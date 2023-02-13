import BodyComponent from '@/components/BodyComponent'
import NormalHeader from '@/components/Header'
import { useEthereum } from '@/hooks/ethereum'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const { defaultAccount, userBalance, handleMetaLogin } = useEthereum()
  return (
    <>
    <NormalHeader />
      <BodyComponent defaultAccount={defaultAccount} handleMetaLogin={handleMetaLogin}>
        <Component {...pageProps} defaultAccount={defaultAccount} />
      </BodyComponent>
    </>
  )
}
