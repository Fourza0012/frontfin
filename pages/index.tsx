import { Inter } from '@next/font/google'
import TotalValue from '@/components/Balance/TotalValue'
import Image from 'next/image'
import AssetBalance from '@/components/Balance/AssetBalance'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <TotalValue />
      <div className='text-[16px] pt-[2%] fam-poppins'>
      <div className='flex justify-between items-center px-[2%]'>
          <span>Assets</span>
          <span>Balances</span>
      </div>
      <div className='flex flex-col pt-[1%] gap-2'>
        <AssetBalance symbol='ada' />
      </div>
      </div>
    </>
  )
}
