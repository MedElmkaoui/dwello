import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'

function WhyUs() {
    const whyUs = landingPageData.whyChooseUs
  return (
    <div id='properties'  className='my-12 felx flex-col items-center space-y-8'>
       <div className='flex flex-col items-center gap-3.5'>
            <h1 className='text-center text-4xl text-primary font-bold'>{whyUs.title}</h1>
            <span className='md:w-[50%] text-sm lg:text-lg text-center text-primary w-'>{whyUs.subTitle}</span>
       </div>
       <div className='grid lg:grid-cols-4 gap-5 justify-between'>
        {
            whyUs.reasons.map((ele)=> (
                <div key={ele.title} className='bg-secondary p-5 rounded-lg space-y-8'>
                    <div className='space-y-2.5'>
                        <Image 
                            src={ele.icon}
                            alt='Icon'
                            width={50}
                            height={50}
                            className='p-3.5 bg-light rounded-lg'
                        />
                        <h2 className='text-primary font-bold text-lg'>{ele.title}</h2>
                    </div>
                    <p className='text-primary '>{ele.description}</p>
                </div>
            ))
        }
            
       </div>
    </div>
  )
}

export default WhyUs
