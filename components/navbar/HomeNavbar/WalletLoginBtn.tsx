import LoadingComponent from "@/components/Loading"
import Image from "next/image"

const WalletLoginBtn = ({ name = '', loggingIn, handleLoginMethod } : { name: string, loggingIn: string, handleLoginMethod: Function }) => {
    const loading = name === loggingIn
    return (
        <div className='flex justify-between gap-20 px-10 py-2'>
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
            <div className='relative grow'>
                <button onClick={() => handleLoginMethod(name)} className={`${loading ? 'invisible' : ''} h-full text-xs text-[#0056DA] hover:underline`}>Connect</button>
                {loading && (
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <LoadingComponent type='spinningBubbles' color='#0056da' height='50%' width='50%' />
                    </div>)}
            </div>
        </div>
    )
}

export default WalletLoginBtn