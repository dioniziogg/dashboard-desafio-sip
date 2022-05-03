import { CardInfo } from "../CardInfo/CardInfo";
import { Header } from "../Header/Header";
import { CardInfoSection, ChartSection, Container, MyChart, PaginationContainer, TableSection } from "./style";
import { Lucro, NewClient, Sells, Unidades, Next, Previous } from '../icons';
import { priceFormater } from "../../utils/formatfix";
import { TableRow } from "../TableRow/TableRow";
import { useMediaQuery } from "react-responsive";

const options = {

    chart: 
    {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
      foreColor: 'black'
    },
    grid: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: 'black'
      },
      axisTicks: {
        color: 'black'
      },
      categories: [
        '2021-03-18T00:00:00.000z',
        '2021-03-19T00:00:00.000z',
        '2021-03-20T00:00:00.000z',
        '2021-03-21T00:00:00.000z',
        '2021-03-22T00:00:00.000z',
        '2021-03-23T00:00:00.000z',
        '2021-03-24T00:00:00.000z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    }
  }
  const series = [
    {
      name: '2021', 
      data: [31, 120, 10, 28, 61, 18, 12]
    },
    {
        name: '2022', 
        data: [21, 100, 80, 18, 51, 20, 41]
      }
  ]

export const Main = () => {


    return (
        <Container > 
            <Header />
            <CardInfoSection>
                <CardInfo icon={Unidades} title={"Unidades Registradas"} quant={"1"}/>
                <CardInfo icon={NewClient} title={"Novos Clientes"} quant={"104"}/>
                <CardInfo icon={Sells} title={"Vendas Realizadas"} quant={"7270"}/>
                <CardInfo icon={Lucro} title={"Lucro Líquido(Geral)"} quant={priceFormater("427300.50")}/>
            </CardInfoSection>
            <ChartSection id="chart">
                <div>
                    <h1>Relatório de Vendas</h1>
                </div>
                <MyChart
                    options={options}
                    series={series} 
                    type='area'
                    height={373}
                />
            </ChartSection>
            <TableSection>
                <div>
                    <h1>Últimos pedidos realizados</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Pedidos
                            </th>
                            <th>
                                Data e Horário
                            </th>
                            <th>
                                Produtos
                            </th>
                            <th>
                                Total
                            </th>
                            <th>
                                Comprador
                            </th>
                            <th>
                                Status dos Pedidos
                            </th>
                            <th>
                                Ação Recomendada
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow isBlack={false}/>
                        <TableRow isBlack={true}/>
                        <TableRow isBlack={false}/>
                        <TableRow isBlack={true}/>
                        <TableRow isBlack={false}/>
                    </tbody>
                </table>

            <PaginationContainer>
                <button >
                    <Previous />
                </button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>
                    <Next />
                </button>
            </PaginationContainer>

            </TableSection>
        
        </Container>
    );

}