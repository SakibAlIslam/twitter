import Layout from '@/components/Layout'
import Modal from '@/components/Modal/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal isOpen title='Test Modal' />
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
