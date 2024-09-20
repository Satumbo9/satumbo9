
"use client";
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import React from 'react';
import { z } from 'zod';

//Zod validation definition
const formSchema = z.object({
  name: z.string().min(5).max(10),
  email: z.string().email().min(10).max(20),
  phoneNumber: z.number().min(5).max(20),

});

export const FormData = ({children, className, onSubmit}:{children:React.ReactNode, className?:string, onSubmit?:void}) => {
  return (
    <form 
    onSubmit={()=>onSubmit}
    className={`grid grid-cols-1 gap-10 ${className}`}
    noValidate>
    {children}

    </form>
  )
}
