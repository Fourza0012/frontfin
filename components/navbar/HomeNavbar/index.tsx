import Image from 'next/image'
import AccountSection from './AccountSection'
export type HomeProp = {
  defaultAccount: string | null,
  handleMetaLogin: Function
}

const HomeNavbar = (props: HomeProp) => {
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
          <AccountSection {...props} />
        </div>
    )
}

export default HomeNavbar
