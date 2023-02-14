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
                signer = await provider.getSigner();
                const address = await signer.getAddress();
                // let contract = new Contract("0x328371ceF3baF12d62A64215FfBEc0B1Dbb86e60", abi, provider)
                // console.log('test', await contract.balanceOf('0x3798E24E8B0770cF14d5A98B7e01113d1BA01c51'))
                return {
                   account: address,
                   provider,
                   signer
                }
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