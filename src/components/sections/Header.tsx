import React from 'react'
import Nav from '../common/Nav'
import Btn from '../common/Btn'
import { landingPageData } from '@/lib/const'
import Image from 'next/image'



function Header() {
    const header = landingPageData.hero
  return (
    <header className='mb-12 relative'>
      <Nav />
      <div className=" grid lg:grid-cols-3 items-center">
        <div className='space-y-12 col-span-1'>
          <h1 className="text-6xl font-bold text-primary ">
           {header.title}
          </h1>
          <p className='text-lg font-medium text-primary'>
            {header.description}
          </p>
          <Btn label={'Sign up'} className={`py-3.5 px-8`} />
        </div>
        <div className=' col-span-2'>
            <Image src={header.image} alt='hero' width={800} height={800}  />
        </div>
      </div>
      <div className='-mt-32 w-[70%] mx-auto bg-secondary rounded-lg py-12 px-2.5 flex justify-around absolute left-[15%] bottom-12'>
        <div className='relative'>
            <input 
                type="text" 
                placeholder={header.inputs.location.placeholder} 
                className='bg-light text-forground font-semibold px-4 py-3 rounded-md text-sm'
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
                className='bg-light text-forground font-semibold px-4 py-3 rounded-md text-sm'
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
                className='bg-light text-forground font-semibold px-4 py-3 rounded-md text-sm'
            />
            <Image 
                src={header.inputs.priceRange.icon}
                alt='Icon'
                width={15}
                height={15}
                className='absolute right-3 top-3.5'
            />
        </div>
        <Btn label={'Sign Up'} />
      </div>
    </header>
  )
}

export default Header
