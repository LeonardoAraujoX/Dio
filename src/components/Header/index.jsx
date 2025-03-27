import React from 'react'
import { HeaderContainer,Row,Wrapper,InputContainer,Input, Menu } from './styles';
import {Button} from '../Button';
import Logo from '../../assets/logo-dio.png';
import { UserPicture } from '../Card/styles';
import { Link } from 'react-router-dom';
export function Header({autenticacao}) {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
              <img src={Logo} alt='Dio'/>
              {autenticacao? ( 
              <>
                <InputContainer>
                <Input placeholder='Buscar'/>
              </InputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
             </>
            ) :null}
            </Row>
            
            <Row>
            {autenticacao? (
               <UserPicture src='https://avatars.githubusercontent.com/u/178535757?s=96&v=4'/>
            ):( 
                <>
                <Menu href='#'>Home</Menu>
                <Link to='/login'><Button title="Entrar"/></Link>
                <Button title="Cadastrar"/>
               </>
              )}
            </Row>
        
        </HeaderContainer>
    </Wrapper>



  )
}
