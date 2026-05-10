'use client'
import React from 'react'
import Carousell from '@/components/Carousell'
import Bgfix from '@/components/Bgfix'
import Topsecond from '@/components/Topsecond'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'

const page = () => {
  return (
    <div>
     <Carousell/>
      <Topsecond/>
     <Bgfix/>
     <Services/>
     <WhyChooseUs/>
    
    </div>
  )
}

export default page
