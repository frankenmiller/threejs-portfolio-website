import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from '../constants';
import { logo, frankenmillerlogo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
          }}>
          <img src={frankenmillerlogo} alt='img of logo' className='w-[80px] h-[80px] object-contain -translate-x-6 mx-0 -translate-y-5' />
          <p className='-translate-x-8 -translate-y-6 text-white text-[18px] font-bold cursor-pointer'>&nbsp;&nbsp;&nbsp;&nbsp;frankenmiller <span className='sm:block md:inline-block hidden'>&nbsp;&nbsp;&nbsp;&nbsp;programmer</span></p>
        </Link>

        {/* full screen Navbar */}
        <ul className='list-none hidden sm:flex flex-row gap-5 translate-x-5 -translate-y-6'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${
              active === link.title ? 'text-white' : 'text-secondary'
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() =>setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* iPhone Navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="img of menu button on small screen" 
          className='w-[28px] h-[28px] object-contain cursor-pointer -translate-y-6'
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-3 translate-x-0 -translate-y-0'>
            {navLinks.map((link) => (
              <li key={link.id} className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar