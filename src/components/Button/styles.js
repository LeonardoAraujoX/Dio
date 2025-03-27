import styled,{css} from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    padding: 2px 12px;
    position: relative;
    color: #fff;
    border-radius:22px;
    width: 100%;
    min-width:120px;


    ${({variant}) => variant !== "primary" && css`
    min-width:160px;
    height:30px;
    background-color: #E4105D;

    &:hover{
        opacity:0.6;
        cursor:pointer;
    }


    &::after{
    content:'',
    position: absolute;
    border: 1px solid #E4105D;
    top: -5px;
    left: -6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 22px;

    }

    `}

`;