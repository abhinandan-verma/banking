"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Divide, Loader2 } from 'lucide-react'
import CustomInput from './CustomInput'
import { authFormSchema} from '@/lib/utils'


function AuthForm({type}: {type: string}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

   // 1. Define your form.
   const formSchema = authFormSchema(type)
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true)
    console.log(values)
    setLoading(false)
  }


  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>  
        <Link href="/" className='mb-4 cursor-pointer items-center gap-2 flex'>
                    <Image
                        src="/icons/logo.svg"
                        alt='logo'
                        width={30}
                        height={30}
                        className='size-[44px] max-xl:size-14'
                    />
                    <h1 className='text-26 text-black-1 font-ibm-plex-serif font-bold'>
                        SBI
                    </h1>
                </Link> 
                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user ? 'Link Account' : type === "sign-in" ? 'Sign In' : 'Sign Up' }
                        <p className='text-16 font-normal text-gray-600'>
                            {user
                            ? "Link your account to get started"
                            : "Please enter your details"}
                        </p>
                    </h1>
                </div>        
        </header>
        {
            user ? (
                <div className='flex flex-col gap-4'>
                    {/* PlaidLink */}
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        
                        {type === "sign-up" && ((
                            <>
                                <div className='flex gap-4'>
                                    <CustomInput
                                    name='firstName'
                                    label='First Name'
                                    control={form.control}
                                    placeholder='Abhishek'
                                    description='This is the firstName field'
                                    />
                                    <CustomInput
                                    name='lastName'
                                    label='Last Name'
                                    control={form.control}
                                    placeholder='abhi'
                                    description='This is the Last Name field'
                                    />
                                </div>
                                
                                <CustomInput
                                name="address"
                                label="Address"
                                control={form.control}
                                placeholder="Enter your address"
                                description="This is the address field"
                                />

                                <div className='flex gap-4'>
                                    <CustomInput
                                    name="state"
                                    label="State"
                                    control={form.control}
                                    placeholder="Enter your state"
                                    description="This is the state field"
                                    />
                                    <CustomInput
                                    name='postalCode'
                                    label='Postal Code'
                                    control={form.control}
                                    placeholder='Enter your postal code'
                                    description='This is the postal code field'
                                    />
                                </div>
                                
                                <CustomInput
                                name='dateOfBirth'
                                label='Date of Birth'
                                control={form.control}
                                placeholder='DD-MM-YYYY'
                                description='This is the date of birth field'
                                />
                                <CustomInput
                                name='ssn'
                                label='SSN'
                                control={form.control}
                                placeholder='Enter your SSN'
                                description='This is the SSN field'
                                />
                            </>
                        ))}

                        <CustomInput
                        name='email'
                        label='Email'
                        control={form.control}
                        placeholder='abhi@email.com'
                        description='This is the email field'
                        />

                        <CustomInput
                        name='password'
                        label='Password'
                        control={form.control}
                        placeholder='Enter your password'
                        description='This is the password field'
                        />

                        <div className='flex flex-col gap-4'>
                            <Button type="submit" className='form-btn'>
                                {
                                    loading ? 
                                    (
                                        <>
                                            <Loader2 size={24} className='animate-spin'/>
                                            <span className='ml-2'>Loading...</span>
                                        </>
                                    ) : type === "sign-in" ? 'Sign In' : 'Sign Up'
                                }
                            </Button>
                        </div>
                    </form>
                </Form>
            )
        }

        <footer className='flex justify-center gap-1'>
            <p className='text-14 text-gray-600 font-normal'>
                {type === "sign-in" ? 'Don’t have an account?' : 'Already have an account?'}
            </p>
            <Link href={type === "sign-in" ? '/sign-up' : '/sign-in'} className='form-link'>
                {type === "sign-in" ? 'Sign Up' : 'Sign In'}
            </Link>
        </footer>
    </section>
  )
}

export default AuthForm