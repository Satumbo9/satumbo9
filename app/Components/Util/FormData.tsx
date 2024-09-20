
"use client";
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';


function handleSubmit(){
  console.log("Hello");
}

import React from 'react'

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
