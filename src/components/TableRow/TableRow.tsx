import { Container } from './style'

interface TableRowProps{

    isBlack: boolean;

}

export const TableRow = ({isBlack}: TableRowProps) => {

    return (

        <Container isBlack={isBlack}>
                            <td>
                                0112466
                            </td>
                            <td>
                                30/07/2021 - 15:49
                            </td>
                            <td>
                                <span>Ver(Quantidade)</span>
                            </td>
                            <td>
                                R$ 200,00
                            </td>
                            <td>
                                Comprador A
                            </td>
                            <td>
                                Pronta para embalar
                            </td>
                            <td>
                            <button>Marcar como Embalado</button>
                            </td>
        </Container>
    );

}