import { BalanceData } from '@/config/balance'
import { findBalanceSymbol } from '@/functions/balance'
import Image from 'next/image'

const AssetBalance = ({ symbol='-', value=0, balance=0  }: BalanceData) => {
    const symbolImg = findBalanceSymbol(symbol)
    return (
        <div className='py-[1%] px-[2%] border w-full rounded-[15px] shadow-sm flex justify-between items-center'>
          <div className='flex items-center'>
            {typeof symbolImg === 'string' && 
            <Image
              src={symbolImg}
              alt={symbol}
              className=''
              width={50}
              height={50}
              priority
            />}
            <span className='pl-2 uppercase'>{symbol}</span>
          </div>
          <div className='flex flex-col items-end'>
            <span className='font-semibold uppercase'>{value} {symbol}</span>
            <small className='text-[#0091ff]'>฿ {balance.toFixed(2)}</small>
          </div>
        </div>
    )
}

export default AssetBalance