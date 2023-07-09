import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background } from "./style"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { Link } from "react-router-dom"

export default function SignIn() {
  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <Form>
          <h2>Faça seu login</h2>

          <Input
            id="email"
            icon={FiMail}
            type="mail"
            placeholder="E-mail"
            autoComplete="off"
          />

          <Input
            id="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            autoComplete="on"
          />

          <Button title="Salvar" type="submit" loading={false} />
        </Form>

        <Link to="/register">Criar Conta</Link>
      </main>

      <Background />
    </Container>
  )
}
