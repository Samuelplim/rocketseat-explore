import { Button } from '../../components/Button';
import { SubTitle, Title, TitleLogin } from '../../components/Button/styles';
import {Container} from'./styles'

export function Login(){
  return (
  <Container>
    <Title>RocketMovies</Title>
    <SubTitle>Aplicação para acompanhar tudo que assistir.</SubTitle>
    <TitleLogin>Faça seu login</TitleLogin>
    <Button label="Entrar" loading/>
  </Container>
    );
}