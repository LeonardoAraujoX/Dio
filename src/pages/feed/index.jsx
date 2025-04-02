
import { Header } from "../../components/Header";
import Card from "../../components/Card";
import User from "../../components/User";
import {Container,Title,TitleLigth, Column} from './styles';
const Feed = () => {
   return(
   <>
    <Header autenticacao={true} />
    <Container>
      <Column flex={3}>
         <Title>Feed</Title>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </Column>

      <Column flex={1}>
         <TitleLigth>#Ranking top 5 da semana</TitleLigth>
         <User percentual={90} nome="Leonardo Araújo" 
         image= 'https://avatars.githubusercontent.com/u/178535757?s=96&v=4' />
         <User percentual={60} nome="Leonardo Araújo" 
         image= 'https://avatars.githubusercontent.com/u/178535757?s=96&v=4' />
          <User percentual={40} nome="Leonardo Araújo" 
         image= 'https://avatars.githubusercontent.com/u/178535757?s=96&v=4' />
          <User percentual={28} nome="Leonardo Araújo" 
         image= 'https://avatars.githubusercontent.com/u/178535757?s=96&v=4' />
          <User percentual={18} nome="Leonardo Araújo" 
         image= 'https://avatars.githubusercontent.com/u/178535757?s=96&v=4' />
      </Column>
      

    </Container>
   </>
   );
};

export {Feed}; 