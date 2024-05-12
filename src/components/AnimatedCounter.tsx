"use client"

import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({ amount }: {amount: number}) {
  return (
    <div className='w-full total-balance-amount flex-center gap-2'>
        <CountUp 
            end={amount}
            decimals={2}
            decimal="."
            prefix='$'
            duration={2.75}
        />
    </div>
  )
}

export default AnimatedCounter