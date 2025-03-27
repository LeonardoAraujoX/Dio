import { MdEmail, MdLock } from 'react-icons/md';
import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Container,Title, SubtitleLogin,Wrapper,Row,Column,CriarText,EsqueciText, Form, TitleLogin} from './styles';
import {Input} from "../../components/Header/styles";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const validEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = yup
  .object({
    email: yup.string().email(validEmail,'Email ínvalido').required('Insira seu email'),
    password: yup.string().min(6,'Minimo de 6 caracteres').required('Insira sua senha'),
  })
  .required()

const Login = () => {
   const navigate = useNavigate();

   const {control,handleSubmit,watch, formState: { errors },} = useForm({
      resolver:yupResolver(schema),
      mode:'onChange',
   });
   const onSubmit = (data) => console.log(data);


   const handleclickFeed= () => {
      navigate('/feed');
   };
   return(
   <>
    <Header />
    <Container>
      <Column>
         <Title>
         A plataforma para você aprender com experts, dominar as principais
         tecnologias e entrar mais rápido nas empresas mais desejadas.
         </Title>
      </Column>
         <Column> 
            <Wrapper> 
               <TitleLogin>Faça seu cadastro </TitleLogin>
               <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

               <Form onSubmit={handleSubmit(onSubmit)}>
                  <Input control={control} name='Email' erroMensage={errors?.email?.message} placeholder="E-mail"  leftIcon={<MdEmail />}/>
                  <Input control={control} name='Password'erroMensage={errors?.password?.message} placeholder="Senha" type="password"  leftIcon={<MdLock />} />
                  <Button title="Entrar" variant="secondary" onClick={handleclickFeed} type="submit"/>
               </Form>
               <Row>
                  <EsqueciText>Esqueci minha senha</EsqueciText>
                  <CriarText>Criar conta</CriarText>
               </Row>
            </Wrapper>
         </Column>
      
    </Container>
   </>
   );
};

export {Login};