import { loginableList, loginType } from '@/config/login'
import Image from 'next/image'

const WalletOptions = () => {
    return (
        <div className=''>
            {loginableList.map((item, key) => <WalletLoginBtn key={key} {...item} />)}
        </div>
    )
}

const WalletLoginBtn = ({ name = '' } : loginType) => {
    return (
        <div className='flex justify-between items-center gap-20 px-10 py-2'>
            <div className='flex justify-between items-center gap-5'>
                <Image
                    src={`/image/${name}.png`}
                    alt={name}
                    className=''
                    width={40}
                    height={40}
                    priority
                />
                <label className='capitalize'>{name}</label>
            </div>
            <button className='text-xs text-[#0056DA] hover:underline'>Connect</button>
        </div>
    )
}

export default WalletOptions