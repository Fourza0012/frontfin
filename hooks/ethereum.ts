import { useAppDispatch } from "@/app/hooks";
import { addAccount } from "@/features/user/userSlice";
import { ethers } from "ethers";
import { useUser } from "./user";
export const useEthereum = () => {
    const { handleAddAccount } = useUser()
    
    const handleMetaLogin = async () => {
        try {
            let signer = null;
            let provider;
            if (window.ethereum == null) {
                console.log("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider()
            } else {
                provider = new ethers.BrowserProvider(window.ethereum)
                signer = await provider.getSigner()
                const address = signer.address
                handleAddAccount({
                    account: address,
                    network: Number(provider._network.chainId),
                    provider,
                    signer
                 })
            }
        } catch (e) {
            console.log('some error', e)
        }
    }
    return {
        handleMetaLogin
    }
}