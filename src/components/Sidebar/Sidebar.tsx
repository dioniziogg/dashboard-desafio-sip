import { Container, ListStyle, LogoContainer, LogoTitle, LogoutButton, SelectedLink, SideBarContent } from "./style";
import '../../assets/dashboardIcon.svg';
import { ClientesIcon, DashboardIcon, FinanceiroIcon, LogoutIcon, PedidosIcon, ProdutosIcon, UsuariosIcon } from "../icons";

export const Sidebar = () => {

    return(

            <Container>
                <LogoContainer>
                    <LogoTitle>LOGO</LogoTitle>
                </LogoContainer>
                <SideBarContent>
                    <ListStyle>
                        <li>
                            <a href="#">
                                <DashboardIcon />
                                <SelectedLink>Dashboard</SelectedLink> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <PedidosIcon />
                                <span>Pedidos</span> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ProdutosIcon />
                                <span>Produtos</span> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ClientesIcon />
                                <span>Clientes</span> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FinanceiroIcon />
                                <span>Financeiro</span> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <UsuariosIcon />
                                <span>Usuários</span> 
                            </a>
                        </li>
                    </ListStyle>
                    <LogoutButton><LogoutIcon /> <span>Logout</span> </LogoutButton>
                </SideBarContent>
            </Container>

    );

}