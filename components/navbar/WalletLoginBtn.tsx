import Image from "next/image"
import LoadingComponent from "../Loading"

const WalletLoginBtn = ({ name = '', loggingIn, handleLoginMethod } : { name: string, loggingIn: string, handleLoginMethod: Function }) => {
    const loading = name === loggingIn
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
            <button onClick={() => handleLoginMethod(name)} className={`${loading ? 'hidden' : 'inline-block'} text-xs text-[#0056DA] hover:underline`}>Connect</button>
            {loading && <LoadingComponent type='spinningBubbles' color='#0056da' height='10%' width='10%' />}
        </div>
    )
}

export default WalletLoginBtn