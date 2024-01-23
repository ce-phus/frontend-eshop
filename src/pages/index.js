import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { styles } from '../styles'
import bgImage from '../../public/images/gallery/pexels2.jpg'
import Image from 'next/image'
import { fadeIn, slideIn } from '../../variants'
import { motion } from 'framer-motion'
import ImageCarousel from '../components/ImageCarousel'
import Shopnow from '../components/Button'

const Index = () => {
  return (
    <>
      <Head>
        <title>Cephus</title>
        <meta name="description" content="Home" />
      </Head>

      <main className='flex items-center text-light w-full min-h-screen relative mx-auto'>

        <Layout className='pt-0 md:p-16 sm:pt-8'>

          <div className='flex justify-between items-center w-full bg-scroll h-[972px]'>
            <div className='w-full h-full overflow-hidden'>
              <Image
                src={bgImage}
                alt='bgimage'
                layout='fill'
                
              />
              <div className='absolute inset-0 w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
                <h1 className='h1 text-6xl pt-60 font-bold inline-block pl-10'>
                  Unleash Infinite <span className='text-accent'>Possibilities</span>
                </h1>
                <p className='font-medium text-light text-4xl pl-10 pt-5'>Explore The Best Accessories At your Fingertips </p>
                <Shopnow />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-end w-full pt-10 font-semibold grid gap-4 sm:gap-6 grid-cols-2 relative z-10'>
            <div className='w-full md:col-span-4'>
              <h2 className='text-light text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-5 '>About Us</h2>
              <h1 className='text-light font-bold text-4xl ss:text-[68px] ss:leading-[100px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-light'>CEPHUS TECH <span className='text-primary'>LTD.</span></h1>
            </div>
          </div>

        </Layout>
      </main>
    </>
  )
}

export default Index;
