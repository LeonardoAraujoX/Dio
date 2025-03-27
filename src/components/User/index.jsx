import React from 'react'
import { Container, NameText, UserPicture, Progress } from './styles'
export default function User({percentual,nome, image}) {
  return (
    <Container>
        <UserPicture src={image} />
        <div> 
            <NameText>{nome}</NameText>
            <Progress $percentual={percentual} />
        </div>
       
    </Container>
  )
}
