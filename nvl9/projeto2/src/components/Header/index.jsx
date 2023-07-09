import { Container, Brand, Profile } from "./style"
import { Input } from "../../components/input"


export function Header(){
  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>

      <Input icon={""} placeholder="Pesquisar pelo título" type="text" />

      <Profile to="/profile">
        <div>
          <h2>Alex da Silva Lima</h2>
          <p>sair</p>
        </div>

        <img src="https://github.com/A1exLima.png" alt="Imagem Avatar" />
      </Profile>
    </Container>
  )
}