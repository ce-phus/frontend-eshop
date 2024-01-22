import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import bgImage from '../../public/images/gallery/herobg.png'
import Image from 'next/image'

const index = () => {
  return (
    <>
    <Head>
    <title>Cephus</title>
        <meta name="description" content="Home" />
    </Head>

    <main className='flex items-center text-light w-full min-h-screen relative mx-auto'>
      <Layout className='pt-0 md:p-16 sm:pt-8'>
        <div className='flex flex-row justify-between items-center w-full bg-scroll h-[972px]'>
          <div className='w-full h-1/2 overflow-hidden'>
            <Image
            src={bgImage}
            alt='heroimg'
            layout='fill'
            objectFit='cover'/>
            <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
          </div>
        </div>
      </Layout>
    </main>
    </>
  )
}

export default index