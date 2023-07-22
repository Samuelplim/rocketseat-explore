import { LinkLight, InputLarge, HeaderTitle, ButtonLarge } from "../components";

export const SingUpPage = () => {
  return (
    <main className="bg-dark-400 px-10 flex flex-col h-screen justify-center items-center">
      <HeaderTitle />
      <div className="flex w-full flex-col gap-8 mt-16">
        <InputLarge title="Seu nome" placeholder="Exemplo: Maria da Silva" />
        <InputLarge
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <InputLarge title="Senha" placeholder="No mínimo 6 caracteres" />
        <ButtonLarge title="Entrar" />
        <LinkLight title="Já tenho uma conta" to="/" />
      </div>
    </main>
  );
};
