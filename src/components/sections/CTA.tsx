import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'
import Btn from '../common/Btn'

function CTA() {
    const cta = landingPageData.callToAction
  return (
    <div id='contact' className='my-24 text-primary flex flex-col items-center space-y-8'>
        <h1 className='md:w-[50%] text-center text-5xl font-bold'>
            {cta.title}
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-12'>
            <div className='flex gap-2.5'>
                <Image 
                    src={'/icon/check.png'}
                    alt=''
                    width={20}
                    height={25}
                    className=''
                />
                <span>{cta.chatLive}</span>
            </div>
            <div className='flex gap-2.5'>
                <Image 
                    src={'/icon/check.png'}
                    alt=''
                    width={20}
                    height={25}
                    className=''
                />
                <span>{cta.faq}</span>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <div className='relative'>
                <input type="text" placeholder={cta.news.placeholder} className='py-3.5 px-12 placeholder:text-primary placeholder:font-medium bg-secondary text-primary outline-none rounded-lg md:w-[500px]' />
                <Image 
                    src={'/icon/email.png'}
                    alt=''
                    width={25}
                    height={20}
                    className='absolute top-3 left-2'
                />
            </div>
            <Btn label='Submit' className='py-3.5' />
            
        </div>
    </div>
  )
}

export default CTA