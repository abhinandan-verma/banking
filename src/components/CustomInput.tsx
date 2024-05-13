import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath, Form } from 'react-hook-form'
import * as z from "zod"
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    description: string | undefined
}


function CustomInput({control, name, label, placeholder, description}: CustomInput ) {
  return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label font-semibold'>
                        {label}
                    </FormLabel>
                    <div className='w-full flex flex-col'>
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='input-class'
                                {...field}
                            />
                        </FormControl>
                        <FormDescription className='mt-2'>
                            {/* {description} */}
                        </FormDescription>
                        <FormMessage className='form-message mt-1'/>
                    </div>
                </div>
            )}
            />

  )
}

export default CustomInput