import { HeaderTitle } from "../components/HeaderTitle"
import {InputLarge} from "../components/InputLarge"

export const SingInPage = ()=> {
  return(
  <main className="bg-dark-400 flex h-screen justify-center">
    <HeaderTitle/>
    <InputLarge title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
  </main>
  )}