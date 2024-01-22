import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { styles } from '../styles'
// import ComputerCanvas from '../components/canvas/Computers'
import bgImage from '../../public/images/gallery/herobg.png'
import Image from 'next/image'
import { fadeIn, slideIn } from '../../variants'
import { motion } from 'framer-motion'

const index = () => {
  return (
    <>
    <Head>
    <title>Cephus</title>
        <meta name="description" content="Home" />
    </Head>

    <main className='flex items-center text-light w-full min-h-screen relative mx-auto'>
      
      <Layout className='pt-0 md:p-16 sm:pt-8'>
        <div className={`relative w-full h-screen mx-auto `}>
          <div className={`absolute inset-o top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-100 h-40 bg-[#6D28D9]' />
        </div>

        <div>
          <motion.h1 
          variants={slideIn('left',"tween", 0.2, 1)}
          
          className={`${styles.heroHeadText} text-light`}>Unleash Infinite Possibilities</motion.h1>
          <p className={`${styles.heroSubText} mt-2 text-light text-3xl`}>Explore the Best Accessories at your Fingertips</p>
        </div>
          </div>
        </div>
      </Layout>
       
    </main>
    </>
  )
}

export default index