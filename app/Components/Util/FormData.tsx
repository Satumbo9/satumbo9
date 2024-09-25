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
  name: z.string().min(2, "name invalid"),
  email: z.string().min(6, "email invalid").email("email invalid"),
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
    if(Logged === true) return console.log("Logged");

    form.reset();
  };

  //Destructuring Form to get individual props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const ERROR_CHECKER_NAME = errors.name && (
    <p className="text-[red] text-[1.20em]">{errors.name.message}</p>
  );

  const ERROR_CHECKER_EMAIL = errors.email && (
    <p className="text-[red] text-[1.20em]">{errors.email.message}</p>
  );
  return (
    <div className="flex flex-col  items-center ">
      <span className="font-bold text-[1.80em] md:text-[2.90em] mt-4 text-center  mb-10">
        {formHeaderMessage}
      </span>
      <Form className="" onSubmit={handleSubmit(onSubmit)} name="talk-to-me">
        {/* <div className="h-[150px] "> */}
        <div className="h-[100px] mb-2">
          <InputForm
            label="Name"
            type="text"
            placeholder="Maria"
            id="name"
            {...register("name")}
          />
          {ERROR_CHECKER_NAME}
        </div>
        <div className="h-[100px] mb-2">
          <InputForm
            label="Email"
            type="text"
            placeholder="maria@example.com"
            id="email"
            {...register("email")}
          />
          {ERROR_CHECKER_EMAIL}
        </div>

        <ButtonForm
          className="hover:bg-gray-200"
          label="submit"
          type="submit"
        />
      </Form>
    </div>
  );
}

//Necessary

{
  /* <input
          className="text-[black]"
          type="text"
          placeholder="Maria"
          id="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-[yellow] text-[0.80em]">{errors.name.message}</p>
        )} */
}
