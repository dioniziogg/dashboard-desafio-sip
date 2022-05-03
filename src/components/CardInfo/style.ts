import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    height: 88px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background-color: white;
    div{ 
        display: flex;
        flex-direction: column;
        gap: 4px;
        strong{
            font-size:14px;
            font-weight: bold;
        }
        span{ 
            background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            font-weight: 400;
            font-size: 18px;
        }
    }

`;