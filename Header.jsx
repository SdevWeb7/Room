import { useEffect, useRef, useState } from "react";
import Logo from '../public/images/logo.svg'
import Hamburger from '../public/images/icon-hamburger.svg'
import Close from './svg/Close'

function Header () {

   const [isBurger, setIsBurger] = useState(false)
   const menuRef = useRef(null)

   useEffect(() => {
      const listener = (e) => {
         if (menuRef && !menuRef.current.contains(e.target)) {
            setIsBurger(false)
         }
      }
      if (isBurger) {
         setTimeout(() => {
            document.addEventListener('click', listener)
         }, 100)
      }

      return () => {
         document.removeEventListener('click', listener)
      }
   }, [isBurger])

   const toggleBurger = () => {
      setIsBurger(v => !v)
   }

   return (
      <header className={'absolute top-0 left-0 right-0 text-white font-spartan pt-12 lg:pt-8'}>

         <div className="hidden md:flex justify-center relative mt-3">
            <div ref={menuRef} className={`absolute -top-12 left-0 right-0 bg-white h-20 flex text-black items-center justify-around ${isBurger ? '' : "-translate-y-20"} transition-all`}>
               <Close className={'cursor-pointer hover:text-black text-gray-400'} onClick={toggleBurger} />
               <a href="#">home</a>
               <a href="#">shop</a>
               <a href="#">about</a>
               <a href="#">contact</a>
            </div>
            <img src={Hamburger} alt="a" className={'absolute top-0 left-10 cursor-pointer'} onClick={toggleBurger} />
            <img src={Logo} alt="a" />
         </div>

         <nav className={'md:hidden flex w-full items-center lg:justify-center'}>
            <img className={'ml-12 -translate-y-0.5 lg:ml-0'} src={Logo} alt="a" />
            <div className={'flex flex-col items-center relative ml-8 [&>div]:hover:w-[100%]'}>
               <a href={'#'} className={''}>home</a>
               <div className={'w-[0%] h-1 bg-white rounded transition-all'}></div>
            </div>
            <div className={'flex flex-col items-center relative ml-8 [&>div]:hover:w-[100%]'}>
               <a href={'#'} className={''}>shop</a>
               <div className={'w-[0%] h-1 bg-white rounded transition-all'}></div>
            </div>

            <div className={'flex flex-col items-center relative ml-8 [&>div]:hover:w-[100%]'}>
               <a href={'#'} className={''}>about</a>
               <div className={'w-[0%] h-1 bg-white rounded transition-all'}></div>
            </div>

            <div className={'flex flex-col items-center relative ml-8 [&>div]:hover:w-[100%]'}>
               <a href={'#'} className={''}>contact</a>
               <div className={'w-[0%] h-1 bg-white rounded transition-all'}></div>
            </div>
         </nav>
      </header>
   )
}

export default Header;