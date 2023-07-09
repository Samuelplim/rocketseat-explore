import { Container } from "./style"

export function Button({ title, icon: Icon, loading=false, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
