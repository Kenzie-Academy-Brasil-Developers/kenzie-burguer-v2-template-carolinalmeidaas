import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations';
import { IloginFormValues } from '../../../providers/UserContext/type';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginFormValues>({resolver: yupResolver(schema) });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<IloginFormValues> = (data) => {
    userLogin(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu e-mail'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Sua senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
