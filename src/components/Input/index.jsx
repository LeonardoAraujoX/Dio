import React from 'react'
import { IconContainer, InputContainer, InputText, Erro } from './styles'
import { Controller} from "react-hook-form"

export default function Input({ leftIcon, control, erroMensage, name, ...rest }) {
  return (
    <>
    <InputContainer>
      {leftIcon? (<IconContainer>leftIcon</IconContainer>)  :null}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) =>   <InputText {... field} {...rest}/>}
      />
      
    </InputContainer>
    {erroMensage? <Erro>{erroMensage}</Erro>  :null}
    </>
  )
}
