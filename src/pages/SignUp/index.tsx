import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import { ContainerSignUp, HeaderSignUp } from "./styles";
import { InputPassword } from "@/components/InputPassword";
import { useState, useContext } from "react";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function SignUp() {
  const { register } = useContext(InfoUserContext);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();

    if (password !== passwordAgain) {
      alert("As senhas não coincidem.");
      return;
    }

    const success = await register(nome, email, password, telefone);

    if (success) {
      navigate("/auth/signin"); 
    } else {
      alert("Erro ao registrar. Verifique os dados e tente novamente.");
    }
  }

  return (
    <ContainerSignUp>
      <HeaderSignUp>
        <main>
          <Icon icon="famicons:camera-outline" width={40} height={40} />
          <h2>Leitor de Laudos</h2>
        </main>
        <h1>Cadastre-se para acessar</h1>
      </HeaderSignUp>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome_input">Seu nome</label>
          <input
            type="text"
            id="nome_input"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telefone_input">Telefone</label>
          <input
            type="text"
            id="telefone_input"
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email_input">Digite seu email</label>
          <input
            type="email"
            id="email_input"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password_input">Escreva uma senha</label>
          <InputPassword
            id="password_input"
            placeholder="Digite uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password_again_input">Escreva novamente a senha</label>
          <InputPassword
            id="password_again_input"
            placeholder="Digite a senha novamente"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/auth/signin">
        Já tem uma conta? <span>clique aqui!</span>
      </Link>
    </ContainerSignUp>
  );
}
