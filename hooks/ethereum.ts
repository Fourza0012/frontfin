import { ethers } from "ethers";

export const useEthereum = () => {
    const handleMetaLogin = async () => {
        try {
            let signer = null;
            let provider;
            if (window.ethereum == null) {
                console.log("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider()
                return {
                    account: '',
                    provider,
                    signer
                }
            } else {
                provider = new ethers.BrowserProvider(window.ethereum)
                console.log('in provider', provider)
                signer = await provider.getSigner();
                const address = await signer.getAddress();
                return {
                   account: address,
                   provider,
                   signer
                }
                // console.log('test', formatEther(await provider.getBalance('0x3798E24E8B0770cF14d5A98B7e01113d1BA01c51')))            
            }
        } catch (e) {
            console.log('some error', e)
            return {
                account: '',
                provider: null,
                signer: null
            }
        }
    }
    return {
        handleMetaLogin
    }
}