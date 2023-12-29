import Background1 from '../public/images/desktop-image-hero-1.jpg'
import Background2 from '../public/images/desktop-image-hero-2.jpg'
import Background3 from '../public/images/desktop-image-hero-3.jpg'
import Image1 from '../public/images/image-about-dark.jpg'
import Image2 from '../public/images/image-about-light.jpg'
import Arrow from '../public/images/icon-arrow.svg'
import ArrowRight from '../public/images/icon-angle-right.svg'
import ArrowLeft from '../public/images/icon-angle-left.svg'
import { useState } from "react";
import Header from "./Header.jsx";

function App () {

   const [index, setIndex] = useState(0)
   let backgrounds = [Background1, Background2, Background3]

   const nextIndex = () => {
      setIndex(v => v === 2 ? 0 : v + 1)
   }
   const lastIndex = () => {
      setIndex(v => v === 0 ? 2 : v - 1)
   }

   return (
      <div className={'container-2xl relative'}>
         <Header />
         <div className={'h-[65vh] flex lg:flex-col lg:h-full'}>
            <div className={'w-[55%] h-full lg:mx-auto md:w-full'}>
               <img className={'h-full w-full'} src={backgrounds[index]} alt="a"/>
            </div>

            <div className={'w-[45%] relative py-12 px-16 lg:mx-auto lg:w-full lg:text-center'}>
               <h1 className={'text-4xl font-bold font-spartan'}>Discover innovative <br/>ways to decorate</h1>
               <p className={'mt-6 pr-16 text-custom1 text-sm lg:pr-0'}>We provide unmatched quality, comfort, and style for
                  property owners across the country. Our experts combine form and function in bringing your vision to
                  life. Create a room in your own style with our collection and make your property a reflection of you
                  and what you love.</p>

               <div className={'mt-6 flex items-center lg:justify-center'}>
                  <p className={'font-semibold tracking-[.9rem] pr-6 cursor-pointer'}>SHOP NOW</p>
                  <img src={Arrow} alt="a"/>
               </div>

               <div className={'absolute bottom-0 left-0 w-36 h-16 bg-black flex items-center justify-around lg:-top-16 lg:left-auto lg:right-[22.5%] md:right-0'}>
                  <div onClick={lastIndex} className={'w-[50%] h-full cursor-pointer flex items-center justify-center hover:bg-gray-600'}>
                     <img src={ArrowLeft} alt="a" className={'w-4 h-6 cursor-pointer'}/>
                  </div>
                  <div onClick={nextIndex} className={'w-[50%] h-full cursor-pointer flex items-center justify-center hover:bg-gray-600'}>
                     <img src={ArrowRight} alt="a" className={'w-4 h-6 cursor-pointer'}/>
                  </div>
               </div>
            </div>
         </div>


         <div className={'h-[35vh] flex lg:h-100 lg:flex-col lg:mx-auto'}>
            <img className={'w-[30vw] h-[35vh] lg:mx-auto lg:mt-10 md:w-full'} src={Image1} alt="a"/>

            <div className={'w-[40vw] px-16 py-8 lg:mx-auto lg:px-6 lg:w-full lg:text-center'}>
               <h1 className={'font-bold tracking-[.2rem] font-spartan text-black text-xl mb-2'}>ABOUT OUR
                  FURNITURE</h1>
               <p className={'text-sm text-custom1 px-1'}>Our multifunctional collection blends design and function to
                  suit your individual taste. Make each room unique, or pick a cohesive theme that best express your
                  interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary
                  styles or anything in between. Product specialists are available to help you create your dream
                  space. </p>
            </div>

            <img className={'w-[30vw] lg:mx-auto md:w-full'} src={Image2} alt="a"/>

         </div>

      </div>
   )
}

export default App
