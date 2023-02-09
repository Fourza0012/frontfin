import { ethers } from "ethers";
import { useState } from "react";

export const useEthereum = () => {
    const [provid, setProvid]: any = useState(null)
    const [sign, setSign]: any = useState(null)
    const handleMetaLogin = async () => {
        try {
            let signer = null;

            let provider;
            if (window.ethereum == null) {
                console.log("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider()
            
            } else {
                provider = new ethers.BrowserProvider(window.ethereum)
                signer = await provider.getSigner();
                setProvid(provider)
                setSign(signer)
            }
            return
        } catch (e) {
            console.log('some error', e)
            return
        }
    }
    return {
        handleMetaLogin,
        sign,
        provid
    }
}