import { Container, Content } from "./style"

import { Header } from "../../components/header"
import { DisplayNote } from "../../components/displayNote"

import { FiArrowLeft } from "react-icons/fi"

import { data } from "./data"

import { Link } from "react-router-dom"

export default function Preview() {
  return (
    <Container>
      <Header />

      <Link to="/">
        <FiArrowLeft />
        <p>Voltar</p>
      </Link>

      <Content>
        <DisplayNote data={data} />
      </Content>
    </Container>
  )
}
