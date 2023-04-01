import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, SearchBar,TextTitleHeader } from "./styles";

export function Header(){

    return(
        <Container>
            <TextTitleHeader>RocketMovies</TextTitleHeader>
            <SearchBar placeholder="Pesquisar pelo título"/>
            <Profile>
            <div>
                <span>Samuel plim</span>
                <a href=""><RiShutDownLine/>Sair</a>
            </div>
            <img src="https://github.com/Samuelplim.png" alt="Foto do Usuario"/>
            </Profile>
        </Container>
    )
}