
import Image from 'next/image'

const HomeNavbar = () => {
    return (
        <div className='w-full bg-white px-[70px] py-[12px] flex justify-between items-center'>
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
            <button className='text-white bg-[#0056DA] rounded-[12px] px-[25px] py-[12px]' onClick={() => {}}>
              Connect Wallet
            </button>
          </div>
        </div>
    )
}

export default HomeNavbar