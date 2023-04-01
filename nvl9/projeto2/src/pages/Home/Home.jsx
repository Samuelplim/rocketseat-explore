import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import {Container, BtnAddMovie} from'./styles'
export function Home(){
  return (
  <Container>
    <Header/>
    <Title label="Meus filmes"/>
    <BtnAddMovie/>
  </Container>
  )
}