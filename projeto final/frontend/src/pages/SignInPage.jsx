import { useState } from "react";

import { useAuth } from "../hooks/auth";

import { LinkLight, InputLarge, HeaderTitle, ButtonLarge } from "../components";

export const SingInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <main className="bg-dark-400 px-10 flex flex-col h-screen justify-center items-center">
      <HeaderTitle />
      <div className="flex w-full flex-col gap-8 mt-16">
        <InputLarge
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLarge
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonLarge title="Entrar" onClick={handleSignIn} />
        <LinkLight title="Criar Uma conta" to="/register" />
      </div>
    </main>
  );
};
