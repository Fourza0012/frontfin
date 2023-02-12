import { Contract, ethers, formatEther } from "ethers";
import { useState } from "react";

export const useEthereum = () => {
    const [defaultAccount, setDefaultAccount] = useState<string | null>(null)
    const [userBalance, setUserBalance] = useState<string | null>(null)
    const [provid, setProvid] = useState<any>(null)
    const [sign, setSign] = useState<any>(null)
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
                accountChangedHandler(signer)
                // console.log('test', formatEther(await provider.getBalance('0x3798E24E8B0770cF14d5A98B7e01113d1BA01c51')))            
            }
            return
        } catch (e) {
            console.log('some error', e)
            return
        }
    }

    const accountChangedHandler = async (newAccount : any) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
        // const balance = await newAccount.getBalance()
        // setUserBalance(formatEther(balance));
        // await getuserBalance(address)
    }
    // const getuserBalance = async (address : string) => {
    //     const balance = await provid.getBalance(address, "latest")
    // }
    return {
        handleMetaLogin,
        sign,
        provid,
        defaultAccount,
        userBalance
    }
}