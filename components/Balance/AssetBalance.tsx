import Image from 'next/image'

type AssetType = {
    symbol?: string,
    value?: number,
    balance?: number
}

const AssetBalance = ({ symbol='', value=0, balance=0  }: AssetType) => {
    return (
        <div className='py-[1%] px-[2%] border w-full rounded-[15px] drop-shadow-2xl flex justify-between items-center'>
          <div className='flex items-center'>
            <Image
              src="/image/bitcoin.png"
              alt="Finstable"
              className=''
              width={50}
              height={50}
              priority
            />
            <span className='pl-2 uppercase'>{symbol}</span>
          </div>
          <div className='flex flex-col items-end'>
            <span className='font-semibold uppercase'>{value || '-'} {symbol}</span>
            <small className='text-[#0091ff]'>฿ {balance.toFixed(2)}</small>
          </div>
        </div>
    )
}

export default AssetBalance