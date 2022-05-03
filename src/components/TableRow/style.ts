import styled from "styled-components";
import { css } from "styled-components";

interface ContainerProps{

    isBlack: boolean;

}

export const Container = styled.tr<ContainerProps>`
    height: 56px;
    
    td{
        color: #52575C;
        white-space: nowrap;
        @media (max-width: 576px) {
        padding-right: 8px;
        }
         span{
            background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        button{ 
            min-width: 140px;

            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            color: white;
            background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
            border-radius: 3px;
            font-size: 8px;
            border: none;
        }
    }
    ${(props) =>
        props.isBlack &&
        css`
        background-color: #FAFAFA;
        `
        }
`;