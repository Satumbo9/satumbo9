"use client";

import { Form } from "../Util/Form";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

//Zod validation
const FormValueSchema = z.object({
  name: z.string().min(2, "name invalid"),
  email: z.string().min(6, "email invalid").email("email invalid"),
});

export type FormDataType = z.infer<typeof FormValueSchema>;

//Main function

function ContactForm() {
  const [Logged, setLogged] = useState(false);
  // const [errorChecker, seterrorChecker] = useState(false);

  //Bringing all the validation to the form

  const form = useForm<FormDataType>({
    resolver: zodResolver(FormValueSchema),
  });

  // OnSubmit function that later will be used on the form
  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log("Working!!!", data.name, data.email);
    setLogged(true);

    form.reset();
  };

  //Destructuring Form to get individual props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  // const ERROR_CHECKER_NAME = errors.name && (
  //   <p className="text-[#ff0084] text-[1.40em]">{errors.name.message}</p>
  // );

  // const ERROR_CHECKER_EMAIL = errors.email && (
  //   <p className="text-[red] text-[1.40em] ">{errors.email.message}</p>
  // );
  const formErrorChecker = !!(errors.name || errors.email);
  return (
    <div>
      {Logged ? (
        <div className="flex items-center justify-center text-4xl">
          <p> Thank you!</p>
        </div>
      ) : (
        <div className={`flex flex-col  items-center justify-center`}>
          <p className="font-bold text-2xl mt-4 text-center  mb-4 drop-shadow-sm">
            SHOOT A MESSAGE
          </p>
          <Form onSubmit={handleSubmit(onSubmit)} name="talk-to-me">
            <div className="h-[100px] mb-4">
              <InputForm
                label="Name"
                type="text"
                placeholder="Maria"
                id="name"
                {...register("name")}
              />
            </div>
            <div className="h-[100px] mb-10">
              <InputForm
                label="Email"
                type="text"
                placeholder="maria@example.com"
                id="email"
                {...register("email")}
              />
            </div>

            <div className=" bg-white text-red-500 rounded-sm text-center text-xl">
              {formErrorChecker && (
                <p>
                  {errors.email?.message}
                  {errors.name?.message}
                </p>
              )}
            </div>

            <ButtonForm
              className="hover:bg-gray-200"
              label="submit"
              type="submit"
            />
          </Form>
        </div>
      )}
    </div>
  );
}

{
}

export default ContactForm;
