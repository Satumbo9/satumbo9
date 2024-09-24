"use client";

import { Form } from "../Util/Form";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";


//Message
const formHeaderMessage = "SHOOT A MESSAGE";

//Zod validation
const FormValueSchema = z.object({
  name: z.string().min(6, "name invalid"),
  email: z.string().min(6, "email invalid"),
});

type FormDataType = z.infer<typeof FormValueSchema>;

//Main function

export default function FormData() {
  const [Logged, setLogged] = useState(false);

  //Bringing all the validation to the form

  const form = useForm<FormDataType>({
    resolver: zodResolver(FormValueSchema),
  });

  // OnSubmit function that later will be used on the form
  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log("Working!!!", data.name, data.email);
    setLogged(true);
  };

  //Destructuring Form to get individual props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div 
    className="flex flex-col  items-center ">
      <span className="font-bold text-[1.80em] mt-4 text-center md:text-[4.50em] mb-10">{formHeaderMessage}</span>
      <Form onSubmit={handleSubmit(onSubmit)} name="talk-to-me" className="">
        {/* <div className="h-[150px] "> */}

        <InputForm
          label="Name"
          type="text"
          placeholder="Maria"
          id="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-[yellow] text-[0.80em] ">{errors.name.message}</p>
        )}



        <InputForm
          label="Email"
          type="text"
          placeholder="maria@example.com"
          id="email"
          {...register("email")}
        /> 
                {errors.email && (
          <p className="text-[yellow] text-[0.80em]">{errors.email.message}</p>
        )}

        <ButtonForm label="submit" type="submit" />

      </Form>
    </div>
  );
}




//Necessary 

        {/* <input
          className="text-[black]"
          type="text"
          placeholder="Maria"
          id="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-[yellow] text-[0.80em]">{errors.name.message}</p>
        )} */}