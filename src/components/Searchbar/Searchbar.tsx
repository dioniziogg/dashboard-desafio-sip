import { SearchIcon } from "../icons";
import { Container } from "./style";

export const SearchBar = () => {

    return(
        
        
            <Container htmlFor="inputSearch">
                <SearchIcon />
                <input id="inputSearch" type="text" placeholder="Pesquisar" />
            </Container>

    );

}