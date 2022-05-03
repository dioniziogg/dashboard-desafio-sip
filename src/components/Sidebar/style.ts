import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding-top: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    position: fixed;
    left: 0;
    max-height: 1382px;
    height: 100%;
    max-width: 188px;
    width: 100%;
    background-color: #FFFFFF;
    color: #52575C;
    z-index: 2;
    overflow: hidden;
    box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);

    @media (max-width:1224px) {
        width: 56px;
    }

`;
export const ListStyle = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li{
        a{
            span{
                @media (max-width:1224px) {
                display: none;
    }
            }
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            color: #52575C;
        }
    }
`;
export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 16px;
    width: 100%;
    display: flex;
    align-items: center;
`;
export const LogoutButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 16px;
    span{
        @media (max-width:1224px) {
                display: none;
    }
    }
`;
export const LogoTitle = styled.h1`
    padding-top: 24px;
    margin-bottom: 24px;
    @media (max-width:1224px) {
        font-size: 14px;
    }
`;
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const SelectedLink = styled.span`
    background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;