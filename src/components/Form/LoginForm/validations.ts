import * as yup from 'yup';

export const schema = yup
.object({
  email: yup
    .string()
    .required("Campo Obrigatório")
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "Deve estar em formato de E-mail"
    ),

  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra Maiúscula")
    .matches(/(W||_)/, "Deve conter ao menos um caracter especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracteres")
    .required("Campo Obrigatório"),
})
.required();
