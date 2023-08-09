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
        <meta name='description' content='Site do melhor paintball de PE.' />
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
