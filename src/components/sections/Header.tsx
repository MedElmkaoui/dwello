import React from 'react'
import Nav from '../common/Nav'
import Btn from '../common/Btn'
import { landingPageData } from '@/lib/const'
import Image from 'next/image'



function Header() {
    const header = landingPageData.hero
  return (
    <header className='mb-12 relative bg-light'>
      <div className='w-[90%] lg:w-[80%] mx-auto '>
        <Nav />
        <div className="mt-12 lg:mt-0 grid lg:grid-cols-3 items-center justify-center">
          <div className='space-y-8 col-span-1'>
            <h1 className="text-6xl font-bold text-primary ">
            {header.title}
            </h1>
            <p className='text-lg font-medium text-primary'>
              {header.description}
            </p>
            <Btn label={'Sign up'} className={`py-3.5 px-8`} />
          </div>
          <div className=' col-span-2'>
              <Image src={header.image} alt='hero' width={800} height={800} className='w-full'  />
          </div>
        </div>
        <div className='z-10 -mt-24 w-[80%] lg:w-[50%] mx-auto bg-secondary rounded-lg py-12 px-2.5 flex gap-8 flex-col md:flex-row justify-around md:absolute md:left-[25%] md:bottom-12 '>
          <div className='relative'>
              <input 
                  type="text" 
                  placeholder={header.inputs.location.placeholder} 
                  className='bg-light w-full text-forground font-semibold px-4 py-3 rounded-md text-sm'
              />
              <Image 
                  src={header.inputs.location.icon}
                  alt='Icon'
                  width={15}
                  height={15}
                  className='absolute right-3 top-3.5'
              />
          </div>
          <div className='relative'>
              <input 
                  type="text" 
                  placeholder={header.inputs.type.placeholder} 
                  className='bg-light w-full text-forground font-semibold px-4 py-3 rounded-md text-sm'
              />
              <Image 
                  src={header.inputs.type.icon}
                  alt='Icon'
                  width={15}
                  height={15}
                  className='absolute right-3 top-3.5'
              />
          </div>
          <div className='relative'>
              <input 
                  type="text" 
                  placeholder={header.inputs.priceRange.placeholder} 
                  className='bg-light w-full text-forground font-semibold px-4 py-3 rounded-md text-sm'
              />
              <Image 
                  src={header.inputs.priceRange.icon}
                  alt='Icon'
                  width={15}
                  height={15}
                  className='absolute right-3 top-3.5'
              />
          </div>
          <Btn label={'Sign Up'} className='py-2.5' />
        </div>
      </div>
        
    </header>
  )
}

export default Header
