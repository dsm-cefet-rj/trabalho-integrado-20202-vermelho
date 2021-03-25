import React from 'react';
import '../styles/Registrar.css'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';

yup.setLocale(ptForm);

export let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email("Insira um email válido").required(),
  age: yup.number("Idade precisa ser um número").positive("Idade precisa ser número positivo").integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form () {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <div className="title">Registrar</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)} id='form-registrar'>
          <label htmlFor="">Nome:</label><br/>
          <input type="text" name="firstName"ref={register}/>
          <p> {errors.firstName?.message} </p>
          <label htmlFor="">Sobrenome:</label><br/>
          <input type="text" name="lastName"  ref={register}/>
          <p> {errors.lastName?.message} </p>
          <label htmlFor="">Email:</label><br/>
          <input type="text" name="email"  ref={register}/>
          <p> {errors.email?.message} </p>
          <label htmlFor="">Idade:</label><br/>
          <input type="text" name="age"  ref={register}/>
          <p> {errors.age?.message} </p>
          <label htmlFor="">Senha:</label><br/>
          <input type="password" ref={register}/>
          <p> {errors.password?.message} </p>
          <label htmlFor="">Confirme a Senha:</label><br/>
          <input type="password" name="confirmPassword" ref={register}/>
          <p> {errors.confirmPassword && "As senhas precisam ser iguais"} </p>
          <input type="submit" id="submit" />

        </form>
      </div>
    </div>
  );
}

export default Form;