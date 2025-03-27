
import {Button} from "../../components/Button";
import banner from '../../assets/banner.png';
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import {Container,Title,TitleLight,Text} from './styles';
const Home = () => {
   const navigate = useNavigate();
   const handleclick = () => {
      navigate('/login');
   };
   return(
   <>
    <Header />
    <Container>
      <div>
         <Title>
            <TitleLight>
               implemente
               <br/>
            </TitleLight>
            o seu futuro global agora!
         </Title>
    
         <Text> 
         Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
         </Text>
         <Button title="Começar agora" variant="secondary" onClick={handleclick}/>
      </div>
      <div>
         <img src={banner} alt="banner"/>     
      </div>
      
    </Container>
   </>
   );
};

export {Home};