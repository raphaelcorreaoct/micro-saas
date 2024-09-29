'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createUser } from "@/services/user";
import { useState } from "react";
import { useForm } from 'react-hook-form';

type SignUpFormInputs = {
  fullName: string;
  email: string;
  password: string;
  birthdate: string;
};

const SignUpForm = () => {


  const { register, handleSubmit,  reset, formState: { errors } } = useForm<SignUpFormInputs>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: SignUpFormInputs) => {
   

    try {
      setLoading(true);
      await createUser(data.email, data.password); // Chama a função para criar o usuário no Firebase
      reset(); // Limpa o formulário após o sucesso
      setMessage('User registered successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to register user. Try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <Card className="max-w-md mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold mb-5">Cadastro de Usuário</h2>
      {loading && <p>Salvando...</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <Input id="fullName" type="text" required  {...register('fullName', { required: 'Email is required' })} />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input id="email" type="email" required  {...register('email', { required: 'Email is required' })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
          <Input id="password" type="password" required  {...register('password', { required: 'Email is required' })}/>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
          <Input id="birthdate" type="date" required  {...register('birthdate', { required: 'Email is required' })}/>
          {errors.birthdate && <p>{errors.birthdate.message}</p>}
        </div>
        <Button type="submit" className="w-full">Cadastrar</Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
