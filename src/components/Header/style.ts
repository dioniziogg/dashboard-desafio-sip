import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    @media (max-width:1224px) {
        gap: 0px;
    }
`;
export const NotificationContainer = styled.div`
    position: relative;
    div{
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -5px;
        span{
            color: white;
            font-size: 10px;
        }
    }
`;
export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        @media (max-width:1224px) {
        width: 28px;
        height: 28px;
    }
        border-radius: 50%;
        border: 3px solid #E8E8E8;
    }
    
`;