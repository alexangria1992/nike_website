import React from 'react';
import NikeLogo from '../assets/favicon.ico';
import search from '../assets/search.png';
import bag from '../assets/bag.9c816c6b923ef947a58e.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav>
      <div className='px-5 py-2 md:px-12 flex justify-between items-center'>
        <img src={NikeLogo} alt='' />
        <div className='hidden lg:flex space-x-8'>
          <h3>New & Featured</h3>
          <h3>Men</h3>
          <h3>Women & Featured</h3>
          <h3>Kids</h3>
          <h3>Sale</h3>
          <h3>SNKRS</h3>
        </div>
        <div className='icons flex my-3 justify-around gap-5'>
          <img src={search} alt='' className='w-7 h-7' />
          <input
            type='text'
            placeholder='search'
            className='hidden md:block border-2 px-4 py-1 rounded-lg'
          />
          <img src={bag} alt='' className='w-7 h-7' />
          <GiHamburgerMenu className='w-7 h-7 md:hidden' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
