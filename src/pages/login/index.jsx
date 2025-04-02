import { MdEmail, MdLock } from 'react-icons/md';
import {Button} from "../../components/Button";
import {Link} from 'react-router-dom'; 
import {Header} from "../../components/Header";
import {Container,Title, SubtitleLogin,Wrapper,Row,Column,CriarText,EsqueciText, Form, TitleLogin} from './styles';
import Input from "../../components/Input";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {api} from '../../services/api';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const validEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = yup
  .object({
    email: yup.string().matches(validEmail,'Email ínvalido').required('Insira seu email'),
    password: yup.string().min(6,'Minimo de 6 caracteres').required('Insira sua senha'),
  })
  .required()

const Login = () => {
   const navigate = useNavigate();

   const {control,handleSubmit, formState: { errors },} = useForm({
      resolver:yupResolver(schema),
      mode:'onChange',
   });

   const onSubmit = async (formData) => {
      try{
          const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
          
          if(data.length && data[0].id){
              navigate('/feed') 
              return
          }

          alert('Usuário ou senha inválido')
      }catch(e){
         console.error('Erro na requisição:', e);
         alert('Erro ao fazer login. Tente novamente!');
      }
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
                  <Input control={control} name='email' errorMessage={errors?.email?.message} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
                  <Input control={control} name='password' errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                  <Button title="Entrar" variant="secondary" type="submit"/>
               </Form>
               <Row>
                  <EsqueciText>Esqueci minha senha</EsqueciText>
                  <Link to='/register'><CriarText>Criar conta</CriarText></Link>
                  
               </Row>
            </Wrapper>
         </Column>
      
    </Container>
   </>
   );
};

export {Login};