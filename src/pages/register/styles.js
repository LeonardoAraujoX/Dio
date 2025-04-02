import styled from "styled-components";
import { Button } from '../../components/Button';

export const Container = styled.main`
    width:100%;
    max-width: 75%;
    margin:0 auto;
    margin-top:120px;
    flex-direction: row;
    display:flex;
    align-items: center;
    justify-content: space-between;

`;

export const Column = styled.div`
    flex: 0;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    
`;

export const Wrapper = styled.div`
    max-width: 300px;
    margin-top: -150px;
`;

export const TextRegister = styled.p`
    font-family:'Open Sans';
    font-size:18px;
    font-weight:400px;
    line-height:24px;
    font-style:normal;
    margin-top:20px;
`;

export const Text = styled.h2`
    font-family:'Open Sans';
    font-size:32px;
    font-weight:700;
    font-style:normal;
    line-height:44px;
    word-wrap: break-word;
    margin-bottom: 328px;
    width:388px;
    color:#fff;
`;


export const TitleRegister = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  width: 370px;
  margin-bottom: 8px;
  color: #fff;
  word-wrap: 'break-word';
`;

export const Subtitle = styled.p`
    font-family:'Open Sans';
    font-size:18px;
    font-weight:400;
    font-style:normal;
    line-height:24px;
    margin-bottom:35px;
    width: 100%;
`;

export const PersonalizedButton = styled(Button)`
    margin-top: 30px;
`;

export const TextCont = styled.p`
    font-family:'Open Sans';
    font-size:14px;
    font-weight:700;
    font-style:normal;
    line-height:25px;
    margin-top: 20px;
    
`;

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #23dd7a;
    cursor: pointer;
    margin-left: 5px;
    margin-top:20px;

    &:hover {
    opacity: 0.6;
  }
`;
