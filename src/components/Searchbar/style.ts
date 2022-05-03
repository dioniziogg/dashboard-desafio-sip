import styled from "styled-components";

export const Container = styled.label`
    max-width: 350px;
    width: 100%;
    height:40px;
    background: white;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 16px ;
    @media (max-width:1224px) {
        max-width: 100%;
        width: 100%;
    }
    input{ 
        display: flex;
        flex: 1;
        height: 100%;
        border: none;
        border-radius: 100px;
        
    }
`;