import styled from "styled-components";
import Chart from "react-apexcharts";

export const Container = styled.main`
    width: 100%;
    padding-left: 224px;
    padding-top: 28px;
    padding-bottom: 24px;
    padding-right: 36px;

    @media (max-width:1224px) {
        padding-left: 64px;
        padding-right: 8px;
    }

`;
export const CardInfoSection = styled.section`
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 576px) {
        grid-template-columns: repeat(1,1fr);
    }
`;
export const ChartSection = styled.section`
    background: #FFFFFF;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    margin-top: 36px;
    overflow: hidden;
    width: 100%;
    padding: 16px;
`;
export const MyChart = styled(Chart)`

`;
export const TableSection = styled.section`
    margin-top: 28px;
    background: #FFFFFF;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    height: 484px;
    padding-top: 36px;
    padding-left: 16px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    overflow-y: hidden;
    table{
        margin-top: 16px;
        width: 100%;
        border-spacing: 0px;
        
        thead{

        tr{
            background-color: #FAFAFA; 
            font-size: 14px;
            height: 56px;
        th{
            
            text-align: left;
            font-size: 14px;
            font-weight: bold;
        }
    }
    }
    }
`;
export const PaginationContainer = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;
    gap: 4px;
    button{
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:white;
        border: 1px solid #E8E8E8;
        border-radius: 4px;
        
    }
    
`;