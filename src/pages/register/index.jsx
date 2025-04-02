import React from 'react'
import {Header} from "../../components/Header";
import { Link } from 'react-router-dom'; 
import { Column, Container, Subtitle, Text, TitleRegister, Wrapper,PersonalizedButton, Row, TextRegister, TextCont, LoginText } from './styles';
import Input from "../../components/Input";
import { MdLock, MdEmail, MdAccountCircle } from 'react-icons/md';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {api} from '../../services/api';

const validEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = yup
  .object({
    name: yup.string().required('Insira seu nome completo'),
    email: yup.string().matches(validEmail,'Email não é válido').required('Insira seu email'),
    password: yup.string().min(6,'Minimo de 6 caracteres').required('Insira sua senha'),
  })
  .required()

export default function Register() {
  const navigate = useNavigate();

  const {control,handleSubmit, formState: { errors },} = useForm({
        resolver:yupResolver(schema),
        mode:'onChange',
     });
     const onSubmit = async (data) => {
        const response = await api.get(`users?email=${data.email}`);
        if(response.data.length > 0)  {
          alert('E-mail já cadastrado!');
          return;
        } else{
            navigate('/login');
        }
     } 

  return (
   <>
  <Header />
  <Container>
    <Column>
      <Text>
        A plataforma para você aprender com experts, dominar as principais
        tecnologias e entrar mais rápido nas empresas mais desejadas.
      </Text>
    </Column>
    <div>
      <Wrapper>
        <TitleRegister>Comece agora grátis</TitleRegister>
        <Subtitle> Crie sua conta e make the change._</Subtitle>

        <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" placeholder="Nome completo"control={control} 
        type="text" leftIcon={<MdAccountCircle />} />
        <Input name="email" placeholder="E-mail"control={control} 
        type="text" leftIcon={<MdEmail />} />
        <Input name="password" placeholder="Password"control={control} 
        type="text" leftIcon={<MdLock />} />
        <PersonalizedButton title='Criar minha conta' variant="secondary" type="submit"/>
        </form>
        <div> 
          <TextRegister>  Ao clicar em "criar minha conta grátis", declaro que aceito as
          Políticas de Privacidade e os Termos de Uso da DIO.</TextRegister>
          <Row>
            <TextCont> Já tenho conta.</TextCont>
            <Link to='/login' >
            <LoginText>Fazer login</LoginText>
            </Link>
          </Row>
        </div>
      </Wrapper>
    </div>
  </Container>

    </>   
  )
}
