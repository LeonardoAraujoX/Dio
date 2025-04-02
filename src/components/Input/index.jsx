import React from 'react'
import { IconContainer, InputContainer, InputText, Erro, ErrorContainer } from './styles'
import { Controller } from "react-hook-form"

export default function Input({ leftIcon, control, errorMessage, name, ...rest }) {
  return (
    <>
      <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      <ErrorContainer>
      {errorMessage ? <Erro>{errorMessage}</Erro> : null}
      </ErrorContainer>
    </>
  )
}
