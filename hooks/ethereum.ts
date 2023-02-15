import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from '@ethersproject/providers'
import { injected } from "@/config/connector"
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { convertHexadecimal } from "@/functions"

export const useEthereum = () => {
    const { activate, setError, active, account, library, deactivate, chainId } = useWeb3React<Web3Provider>()
    const handleLoginMetamask = () => {
        activate(injected,(error) => {
            if (error instanceof UserRejectedRequestError) {
              // ignore user rejected error
              console.log("user refused")
            } else {
              setError(error)
            }
          }, false)
          return
    }

    const switchNetwork = async (netId: number) => {
      const formatNetId = convertHexadecimal(netId)
            try {
                    await library.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: formatNetId }],
                    })
              } catch (switchError: any) {
                console.error('switchError', switchError)
                // 4902 error code indicates the chain is missing on the wallet
                if (switchError.code === 4902) {
                  try {
                    // await library.provider.request({
                    //   method: "wallet_addEthereumChain",
                    //   params: [
                    //     {
                    //       chainId: "0x63564c40",
                    //       rpcUrls: ["https://api.harmony.one"],
                    //       chainName: "Harmony Mainnet",
                    //       nativeCurrency: { name: "ONE", decimals: 18, symbol: "ONE" },
                    //       blockExplorerUrls: ["https://explorer.harmony.one"],
                    //       iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
                    //     }
                    //   ],
                    // })
                  } catch (error) {
                     console.error('error', error)
                  }
                }
              }
      }

    return {
        active,
        account,
        chainId,
        handleLoginMetamask,
        deactivate,
        switchNetwork
    }
}