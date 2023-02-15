import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from '@ethersproject/providers'
import { injected } from "@/config/connector"
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { convertHexadecimal } from "@/functions"
import { defaultNetwork } from "@/config/login"

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
      if (library) {
            try {
                    await library.provider.request?.({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: formatNetId }],
                    })
              } catch (switchError: any) {
                console.error('switchError', switchError)
                // 4902 error code indicates the chain is missing on the wallet
                if (switchError.code === 4902) {
                  try {
                    await library.provider.request?.({
                      method: "wallet_addEthereumChain",
                      params: [defaultNetwork],
                    })
                  } catch (error) {
                     console.error('error', error)
                  }
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