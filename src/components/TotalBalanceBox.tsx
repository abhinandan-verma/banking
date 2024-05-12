
import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughNutChart from './DoughNutChart'

function TotalBalanceBox({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceBoxProps) {
  return (
    <div>
        <section className='total-balance'>
            <div className='total-balance-chart'>
               <DoughNutChart
                accounts={accounts}
               />
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='header-2'>
                    Bank Accounts: {totalBanks}
                </h2>
                <div className='flex flex-col'>
                    <p className='total-balance-label'>
                        Total Current Balance
                    </p>

                    <AnimatedCounter
                       amount={totalCurrentBalance}
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default TotalBalanceBox