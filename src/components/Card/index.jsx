import React from 'react'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo, UserInfo,UserPicture,} from './styles';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/178535757?s=96&v=4'/>
                <div>
                <h4>Leonardo Araújo</h4>
                <p>Há 3 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
              <h4>Projeto para curso html</h4>
              <p>Projeto feito para o curso de hmtl...<strong>Saiba mais</strong></p>    
            </PostInfo>
                <HasInfo>
                  <h4>#HTML #CSS #JS</h4>
                  <p><FiThumbsUp/>10</p>
                </HasInfo>
          
        </Content>
    </CardContainer>
  )
}

