import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'

function Testimonials() {
    const testimonials  = landingPageData.testimonials
  return (
    <div className='mt-24 mb-12 flex flex-col space-y-12'>
        <div className='self-center'>
            <h1 className='font-bold text-4xl text-center'>
                {testimonials.title}
            </h1>
        </div>
       
        <div className='grid lg:grid-cols-3 justify-between gap-12'>
            {
                testimonials.quotes.map((ele)=> (
                    <div key={ele.author} className='bg-secondary rounded-3xl' >
                        <Image 
                            src={ele.img}
                            alt=''
                            width={250}
                            height={250}
                            className='w-full rounded-t-3xl'
                        />
                        <div className='p-5 space-y-3'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3.5 items-end'>
                                    <Image 
                                        src={ele.authorImg}
                                        alt=''
                                        width={65}
                                        height={65}
                                        className='rounded-full'
                                    />
                                    <div>
                                        <h3 className='font-bold'>{ele.author}</h3>
                                        <span className='text-sm font-medium'>{ele.city}</span>
                                    </div>
                                </div>
                                <div className='w-fit py-0.5 px-3.5 bg-light rounded-lg flex items-center gap-1.5'>
                                    <Image 
                                        src={'/icon/Star.png'}
                                        alt=''
                                        width={15}
                                        height={15}
                                        className='rounded-full'
                                    />
                                    <span className='text-sm'>{ele.rate}</span>
                                </div>
                            </div>
                            
                            <p className='font-medium'>{ele.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='flex gap-8 items-center justify-center'>
            <button>
                <Image 
                    src={'/icon/arrow-left.png'}
                    alt=''
                    width={50}
                    height={50}
                />
            </button>
            <button>
                <Image 
                    src={'/icon/arrow-right.png'}
                    alt=''
                    width={50}
                    height={50}
                />
            </button>
        </div>
    </div>
  )
}

export default Testimonials