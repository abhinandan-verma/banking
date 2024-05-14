import { signOut } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer({ user, type }: FooterProps) {

  const router = useRouter()

  const handleLogout = async() => {
    console.log('logging out')
    const loggedOut = await signOut()

    if(loggedOut){
      console.log('logged out')
      router.push('/sign-in')
    }else{
      console.log('error logging out')
      return null
    }
  }

  return (
   <footer className='footer text-black-1'>
        <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
            <p className='text-xl font-extrabold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>
        <div className={type === "mobile" ? 'footer_email-mobile ' : 'footer-email '}>
            <h1 className='text-14 truncate font-normal'>
              {user?.email}
            </h1>
        </div>

        <div className='footer_image' onClick={handleLogout}>
            <Image src="icons/logout.svg" alt='logout' width={20} height={20}/>
        </div>
   </footer>
  )
}

export default Footer