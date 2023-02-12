import { loginableList } from "@/config/login"
import { useEthereum } from "@/hooks/ethereum"
import { ReactNode, useState } from "react"
import DropDownWithBtn from "./DropDownWithBtn"
import WalletLoginBtn from "./WalletLoginBtn"
import UserSectionForm from "./UserSectionForm"

const AccountSection = () => {
    const [logginIn, setLoggingIn] = useState('')
    const { defaultAccount, userBalance, handleMetaLogin } = useEthereum()
    // console.log('defaultAccount', defaultAccount)
    // console.log('userBalance', userBalance)
    const handleLoginType = (type: string) => {
        setLoggingIn(type)
        if (type === 'metamask') { handleMetaLogin().then(() => setLoggingIn('')) }
    }
    
    return (
            <div className='text-[14px] flex justify-end items-center gap-3'>
              <a className='text-[#0091ff] hover:underline hover:decoration-4 mr-5' href="">
                Wallet
              </a>
              {!defaultAccount
              ? (
                <NonUserForm>
                    {loginableList.map((item, key) => <WalletLoginBtn key={key} {...item} loggingIn={logginIn} handleLoginMethod={handleLoginType} />)}
                </NonUserForm>
              ) : <UserSectionForm account={defaultAccount} />}
              
            </div>
    )
  }

  export default AccountSection

  const NonUserForm = ({ children }: { children: ReactNode }) => {
    return (
        <DropDownWithBtn btnIcon={<>Connect Wallet</>} btnColor='bg-[#0056DA]' typeId='login'>
            <span className='font-semibold'>Select a wallet</span>
            <small className='text-[#9c9c9c]'>Connect your wallet to sign in</small>
            <hr className='w-full border-t-2 border-[#d0d0d0] border-dashed' />
            {children}
        </DropDownWithBtn>
    )
  }
