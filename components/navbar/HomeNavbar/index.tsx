import Image from 'next/image'
import AccountSection from './AccountSection'

const HomeNavbar = () => {
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
          <AccountSection />
        </div>
    )
}

export default HomeNavbar
