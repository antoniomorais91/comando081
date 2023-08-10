import Image from 'next/image'
import { Righteous, Inter } from 'next/font/google'
import Header from '../components/Header'
import Head from 'next/head'
import SwiperComponent from '@/components/Swiper'
import Swiper from '@/components/Swiper'
import Command from '@/components/Command'
import How from '@/components/How'
import Maps from '@/components/Maps'
import Footer from '@/components/Footer'

export const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Comando 081</title>
        <meta name='robots' content='follow, index' />
        <meta name='description' content='Site do melhor paintball de PE.' />
        <meta property='og:type' content='website' />
        <meta property='og:description' 
        content='Website do melhor paintball de PE.' />
        <meta property='og:url' content='https://comando081.vercel.app/' />
        <meta property='og:image' content='/comando-thumbnail.png' />
        <meta property='og:image:secure_url' content='/comando-thumbnail.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='300' />
        <meta property='og:image:alt' content='Miniatura do Website do Comando 081.' />
      </Head>
      <Header />
      <Swiper />
      <Command />
      <How />
      <Maps />
      <Footer />
    </div>
  )
}
