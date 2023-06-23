import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[48px] h-[48px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <CustomLink 
            to={`${nav.id}`} 
            key={nav.id} 
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}>
              {nav.title}
          </CustomLink>
        ))}
      </ul>


      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={showMenu ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] object-contain cursor-pointer" 
          onClick={() => setShowMenu((prev) => !prev)}
        />

        <div className={`${showMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <CustomLink 
                to={`${nav.id}`} 
                key={nav.id} 
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'} text-white`}>
                  {nav.title}
              </CustomLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const CustomLink = ({ to, className, children, ...props}: any) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true});
  return (
    <li className={(isActive ? "active" : "") + className}>
      <Link to={`richardson-robotics/${to}`} {...props}>{children}</Link>
    </li>
  )
}

export default Navbar