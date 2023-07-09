import { Container, Header, Form, Avatar } from "./style"
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export default function Profile(){
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
          <p>Voltar</p>
        </Link>
      </Header>

      <Form>
        <Avatar>
          <img src="https://github.com/A1exLima.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input icon={FiUser} type="text" placeholder="Nome" autoComplete="on" />

        <Input
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          autoComplete="on"
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha Atual"
          autoComplete="on"
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova Senha"
          autoComplete="on"
        />

        <Button title="Salvar" type="submit" loading={false} />
      </Form>
    </Container>
  )
}