import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/compat/router';
import Image from 'next/image';
import logo from '../../public/images/gallery/logo6.png';

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <span className={`${className} relative group`}>
        {title}
        <span
          className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${
            router ? 'w-full' : 'w-0'
          }`}
        >
          &nbsp;
        </span>
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.stopPropagation(); // Add this line to stop event propagation
    toggle();
  
    router.push(href);
  };

  return (
    <Link href={href}>
      <span
        className={`${className} relative group text-light my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${
            router.asPath === href ? 'w-full' : 'w-0'
          }dark:bg-light'}`}
        >
          &nbsp;
        </span>
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  

  return (
    <header className='w-full px-32 py-8 flex items-center justify-between text-light relative z-10 lg:px-16 md:px-12 sm:px-8 '>
      <Image
        src={logo}
        alt='farmhouse'
        className='w-[100px] h-[90px] rounded-full bg-dark'
      />
      <button
        className='flex-col  items-center justify-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-end items-center lg:hidden text-light'>
        <nav className='flex items-center justify-center flex-wrap font-bold text-light'>
          <CustomLink href='/' title='Home' className='mr-4 text-light' />
          <CustomLink href='/about' title='About' className='mr-4 text-light' />
          <CustomLink href='/login' title='Login' className='mr-4 text-light' />
          <CustomLink href='/contact' title='Contact Us' className='mr-4' />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 0.9, opacity: 2 }}
          className='min-w-[60%] flex flex-col items-center justify-between z-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light/75 rounded-lg backdrop-blur-m py-32'
        >
          <nav className='flex items-center flex-col  justify-center'>
            <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
            <CustomMobileLink href='/about' title='About' className='' toggle={handleClick} />
            <CustomMobileLink href='/login' title='Login' className='' toggle={handleClick} />
            <CustomMobileLink href='/contact' title='Contact Us' className='' toggle={handleClick} />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
