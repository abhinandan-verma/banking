import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedInUser = {
        firstName: "Abhinandan",
        lastName: "Verma",
        email: "a@gmail.com"
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
                banks={[{}, {}]}
            />
    </section>
  )
}

export default Home