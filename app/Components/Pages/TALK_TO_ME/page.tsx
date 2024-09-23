"use client";


//Talk to me must be revised 
import { FormData } from "../../Util/FormData";
import { InputForm } from "../../Util/InputForm";
import { ButtonForm } from "../../Util/ButtonForm";
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';

const FormValues = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email invalid").min(5, 'Email not valid').max(254, 'Email too long'),
});

type FormDataType = z.infer<typeof FormValues>;

export default function Talk_To_Me() {
  const form = useForm<FormDataType>({ resolver: zodResolver(FormValues) });
  const { register, control, handleSubmit, formState: { errors } } = form;
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log("form submit", data);
    setSubmitMessage('Form submitted successfully!');
  };

  return (
    <section id="TALK" className="min-h-[120vh] md:h-[100vh] sm:h-screen p-5 flex flex-col items-center">
      <div className="text-[1em] text-center flex flex-col items-center mt-36">
        <span className="text-[2em] font-bold flex gap-2 2xl:text-[3em]">
          Talk to me
        </span>
      </div>

      <FormData name="talk to me" onSubmit={handleSubmit(onSubmit)}>
        <InputForm id="name" type="text" label="Name" placeholder="e.g. Ruth" {...register("name")} />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <InputForm id="email" label="Email" placeholder="ruth@myemail.com" {...register("email")} />
        {errors.email && <span className="error-message">{errors.email.message}</span>}

        <ButtonForm label="Submit" type="submit" />
      </FormData>

      {submitMessage && <p>{submitMessage}</p>}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </section>
  );
}
