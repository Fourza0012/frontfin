import BodyComponent from '@/components/BodyComponent'
import NormalHeader from '@/components/Header'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <NormalHeader />
      <BodyComponent>
        <Component {...pageProps} />
      </BodyComponent>
    </Provider>
  )
}
