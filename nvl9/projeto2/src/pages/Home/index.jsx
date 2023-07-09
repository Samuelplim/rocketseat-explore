import { FiPlus } from "react-icons/fi"

import { Container, Section, MoviePlus, Content, Notes } from "./style"

import { Header } from "../../components/header"
import { Note } from "../../components/note"

import { Link } from "react-router-dom"

export default function Home() {
  return (
    <Container>
      <Header />

      <Section>
        <h2>Meus Filmes</h2>
      </Section>

      <MoviePlus>
        <Link to="/new">
          <FiPlus />
          Adicionar filme
        </Link>
      </MoviePlus>

      <Content>
        <Notes>
          <Note
            type="button"
            data={{
              title: "Interstellar",
              star: 3,
              text: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.`,
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />

          <Note
            type="button"
            data={{
              title: "Homem-Aranha: Através do Aranhaverso",
              star: 5,
              text: `Em Homem-Aranha: Através do Aranhaverso, Miles Morales, o simpático Homem-Aranha do Brooklyn, retorna para mais uma aventura no Aranhaverso. Agora, ele precisa enfrentar o inimigo mais poderoso que já encontrou.`,
              tags: [
                { id: "1", name: "Ação" },
                { id: "2", name: "Aventura" },
                { id: "3", name: "Animação" },
              ],
            }}
          />

          <Note
            type="button"
            data={{
              title: "Elementos",
              star: 1,
              text: `Em uma sociedade em que os quatro elementos da natureza vivem em harmonia, uma jovem mulher do elemento fogo e um tranquilo rapaz do elemento água acabam se conhecendo, e percebem que tem muito mais em comum do que achavam.`,
              tags: [
                { id: "1", name: "Família" },
                { id: "2", name: "Comédia" },
                { id: "3", name: "Animação" },
              ],
            }}
          />
        </Notes>
      </Content>
    </Container>
  )
}
