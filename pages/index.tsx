import TotalValue from '@/components/Balance/TotalValue'
import AssetBalance from '@/components/Balance/AssetBalance'
import { BalanceData, defaultBalance } from '@/config/balance'

 const Home = ({ defaultAccount } : { defaultAccount: string }) => {
  console.log('home', defaultAccount)
  return (
    <>
      <TotalValue />
      <div className='text-[16px] pt-[2%]'>
      <div className='flex justify-between items-center px-[2%]'>
          <span>Assets</span>
          <span>Balances</span>
      </div>
      <div className='flex flex-col pt-[1%] gap-2'>
        {defaultBalance.map((item: BalanceData, key) => <AssetBalance key={key} {...item} />)}
      </div>
      </div>
    </>
  )
}
export default Home