import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { useContext } from 'react';

const RegisterForm = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<IRegisterFormValues>();
  const { userRegister } = useContext(UserContext)
  const submit : SubmitHandler<IRegisterFormValues> = (data) => {
    userRegister(data)
  }
  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
    <Input label='Seu nome' type='text' register={register("name")} error={errors.name} />
    <Input label='Seu email' type='email' register={register("email")} error={errors.email}/>
    <Input label='Digite uma senha' type='password' register={register("password")} error={errors.password}/>
    <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  
  </StyledForm>
  )
};

export default RegisterForm;
