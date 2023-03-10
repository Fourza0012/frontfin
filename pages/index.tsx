import TotalValue from '@/components/Balance/TotalValue'
import AssetBalance from '@/components/Balance/AssetBalance'
import { BalanceData, defaultBalance } from '@/config/balance'
import { useUser } from '@/hooks/user'
import { useEthereum } from '@/hooks/ethereum'
import VerificationKYC from '@/components/KYC/VerificationKYC'

 const Home = () => {
  const { active } = useEthereum()
  const { userData, handleAddUserData } = useUser()
  console.log('userData', userData)
  return (
    <>
      <TotalValue />
      <div className='text-[16px] pt-[2%]'>
      <div className='flex justify-between items-center px-[2%]'>
          <span>Assets</span>
          <span>Balances</span>
      </div>
      {!active || userData 
      ? (
      <div className='flex flex-col pt-[1%] gap-2'>
        {defaultBalance.map((item: BalanceData, key) => <AssetBalance key={key} {...item} />)}
      </div>)
      : (
        <VerificationKYC />
      )}
      </div>
    </>
  )
}
export default Home