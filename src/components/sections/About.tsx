import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'

function About() {
    const aboutData = landingPageData.about
  return (
    <div className='mt-24 mb-12 grid lg:grid-cols-2 gap-8 justify-between'>
      <div>
        <Image
            src={aboutData.image}
            alt='About'
            width={550}
            height={550}
            className=''
        />
      </div>
      <div className='space-y-8'>
        <h1 className='text-primary font-bold text-2xl xl:text-5xl'>
            {aboutData.title}
        </h1>
        <p className='text-primary font-bold '>
            {aboutData.description}
        </p>
        <div className='flex items-center gap-12'>
            {
                aboutData.statstics.map((ele)=> (
                    <div key={ele.label} className='flex flex-col'>
                        <span className='xl:text-3xl font-bold text-primary'>{ele.number}</span>
                        <span className='text-sm text-primary'>{ele.label}</span> 
                    </div>
                ))
            }
        </div>
       
      </div>
    </div>
  )
}

export default About
