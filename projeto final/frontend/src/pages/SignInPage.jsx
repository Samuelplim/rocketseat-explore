import { LinkLight,InputLarge, HeaderTitle, ButtonLarge } from "../components"

export const SingInPage = ()=> {
  return(
  <main className="bg-dark-400 px-10 flex flex-col h-screen justify-center items-center">
    <HeaderTitle/>
    <div className="flex w-full flex-col gap-8 mt-16">
      <InputLarge title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
      <InputLarge title="Senha" placeholder="No mínimo 6 caracteres"/>
      <ButtonLarge title="Entrar"/>
      <LinkLight title="Criar Uma conta" to="/register"/>
    </div>
  </main>
  )}