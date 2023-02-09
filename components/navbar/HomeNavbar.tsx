import { useEffect, useState } from 'react'
import Image from 'next/image'
import LoginDropDown from './LoginDropDown'
import { loginableList } from '@/config/login'
import WalletLoginBtn from './WalletLoginBtn'
import { useEthereum } from '@/hooks/ethereum'

const HomeNavbar = () => {
  const [open, setOpen] = useState(false)
  const [logginIn, setLoggingIn] = useState('')
  const { handleMetaLogin } = useEthereum()
  const handleLoginType = (type: string) => {
      setLoggingIn(type)
      if (type === 'metamask') { handleMetaLogin().then(() => setLoggingIn('')) }
  }

  const closeDropdown = (e : MouseEvent) => {
    const loginMenu = document.getElementById('loginMenu')
    if ( ((e.target as HTMLElement)?.id == 'btnLogin') || loginMenu?.contains((e.target as HTMLElement))) return
    setOpen(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])

    return (
        <div className='w-full bg-white px-[70px] py-[12px] flex justify-between items-center relative'>
          <Image
            src="/image/finstable.png"
            alt="Finstable"
            className=''
            width={121}
            height={37}
            priority
          />
          <div className='text-[14px] flex justify-end items-center gap-[50px]'>
            <a className='text-[#0091ff] hover:underline hover:decoration-4' href="">
              Wallet
            </a>
            <button id='btnLogin' className={`capitalize text-white ${logginIn === '' ? '' : 'grayscale-[50%]'} bg-[#0056DA] rounded-[12px] px-[25px] py-[12px]`} onClick={() => setOpen(true)}>
              {logginIn === '' ? 'Connect Wallet' : `Connecting...`}
            </button>
            <LoginDropDown open={open}>
                {loginableList.map((item, key) => <WalletLoginBtn key={key} {...item} loggingIn={logginIn} handleLoginMethod={handleLoginType} />)}
            </LoginDropDown>
          </div>
        </div>
    )
}

export default HomeNavbar