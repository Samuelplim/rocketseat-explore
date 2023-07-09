import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { NoteItem } from "../../components/noteItem"
import { Button } from "../../components/button"

import { Container, Content, Form, Markers } from "./style"

import { FiArrowLeft, FiX } from "react-icons/fi"

import { Link } from "react-router-dom"

export default function New() {
  return (
    <Container>
      <Header />

      <div>
        <Link to="/">
          <FiArrowLeft />
          <p>Voltar</p>
        </Link>
      </div>

      <Content>
        <div>
          <Form id="new-movie">
            <h2>Novo Filme</h2>

            <div>
              <Input placeholder="Título" type="text" />
              <Input placeholder="Sua Nota (de 0 a 5)" type="text" />
            </div>

            <textarea placeholder="Observações"></textarea>
          </Form>

          <Markers>
            <h3>Marcadores</h3>

            <div>
              <NoteItem $isNew={false} value="Animação" />
              <NoteItem $isNew={false} value="Aventura" />
              <NoteItem $isNew={false} value="Ficção cientifica" />
              
              <NoteItem $isNew={true} placeholder="Novo marcador" />
            </div>
          </Markers>

          <div>
            <Button title="Excluir nota" loading={false} />
            <Button
              form="new-movie"
              type="submit"
              title="Salvar alterações"
              loading={false}
            />
          </div>
        </div>
      </Content>
    </Container>
  )
}
