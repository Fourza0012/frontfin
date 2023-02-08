import NormalHeader from '@/components/Header'
import HomeNavbar from '@/components/navbar/HomeNavbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NormalHeader />
      <main className='flex flex-col min-h-screen bg-[#F7FBFF] relative'>
        <HomeNavbar />
        <div className='grow relative'>
          <div className='absolute bg-[#0056da] inset-x-0 top-0 h-[22vh] z-0'></div>
          <div className='relative px-[5%] py-[3%]'>
            <div className='bg-white min-h-[75vh] rounded-[15px] px-[6%] py-[3%]'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
