import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect, } from 'next/navigation'
import React from 'react'

const Home = async() => {
    const loggedInUser = await getLoggedInUser()
    console.log("loggedInUser: "+loggedInUser)

    if(!loggedInUser){
        redirect('/sign-in')
    }

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedInUser?.firstName || 'Guest'}
                subtext="Access and manage your account and transaction efficiently"
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250}
                />
            </header>

            
        </div>
            <RightSideBar
                user={loggedInUser}
                transactions={[]}
                banks={[{ currentBalance: 123.50}, { currentBalance: 234.50}]}
            />
    </section>
  )
}

export default Home