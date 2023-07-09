import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

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
          <h2>Crie sua conta</h2>

          <Input
            id="user"
            icon={FiUser}
            type="text"
            placeholder="Nome"
            autoComplete="off"
          />

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
            autoComplete="off"
          />

          <Button title="Cadastrar" type="submit" loading={false} />
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </main>

      <Background />
    </Container>
  )
}
