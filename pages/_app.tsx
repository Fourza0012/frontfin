import BodyComponent from '@/components/BodyComponent'
import NormalHeader from '@/components/Header'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'


function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  return library
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
      <NormalHeader />
        <BodyComponent>
          <Component {...pageProps} />
        </BodyComponent>
      </Provider>
    </Web3ReactProvider>
  )
}
