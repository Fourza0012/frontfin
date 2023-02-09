import WalletOptions from './WalletOptions'

const LoginDropDown = () => {
    
    return (
        <>
        <div id='loginMenu' className='absolute rounded-xl bg-white top-[105%] right-[70px] p-[1%] z-[3] shadow-lg flex flex-col justify-center items-center gap-3'>
              <span className='font-semibold'>Select a wallet</span>
              <small className='text-[#9c9c9c]'>Connect your wallet to sign in</small>
              <hr className='w-full border-t-2 border-[#d0d0d0] border-dashed' />
              <WalletOptions />
        </div>
        </>
    )
}

export default LoginDropDown
