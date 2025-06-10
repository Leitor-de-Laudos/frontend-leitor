import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerSignIn, HeaderSignIn } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InputPassword } from "@/components/InputPassword";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { login } = useContext(InfoUserContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/");
      console.log("Login bem-sucedido!");
    } else {
      console.log("Erro no login!");
    }
  };

  return (
    <ContainerSignIn>
      <HeaderSignIn>
        <main>
          <Icon icon="famicons:camera-outline" width={40} height={40} />
          <h2>Leitor de Laudos</h2>
        </main>
        <h1>Seja bem-vindo(a)!👋</h1>
      </HeaderSignIn>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email_input">Seu email</label>
          <input
            type="email"
            name="email_input"
            id="email_input"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Atualiza o valor do email no estado
          />
        </div>
        <div>
          <label htmlFor="password_input">Sua senha</label>
          <InputPassword
            type="password"
            name="password_input"
            id="password_input"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Atualiza o valor da senha no estado
          />
        </div>
        <button type="submit">Entrar</button>
      </form>

      <Link to="/auth/signup">
        Não tem uma conta? <span>clique aqui!</span>
      </Link>
    </ContainerSignIn>
  );
}