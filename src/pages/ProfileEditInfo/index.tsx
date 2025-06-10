import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerEditInfo } from "./styles";
import { InputPassword } from "@/components/InputPassword";
import { Link } from "react-router-dom";
import { InfoUserContext } from "@/contexts/InfoUserContext";
import { useContext, useState } from "react";

export function ProfileEditInfo() {
  const { profile, update } = useContext(InfoUserContext);

  const [formData, setFormData] = useState({
    nome: profile.nome || "",
    email: profile.email || "",
    telefone: profile.telefone || "",
    senhaAtual: "",
    novaSenha: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.senhaAtual.trim()) {
      alert("Por favor, insira sua senha atual.");
      return;
    }

    const payload = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      senhaAtual: formData.senhaAtual,
      ...(formData.novaSenha.trim() && { novaSenha: formData.novaSenha }),
    };

    const sucesso = await update(payload);

    if (sucesso) {
      alert("Informações atualizadas com sucesso!");
    } else {
      alert(
        "Erro ao atualizar informações. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <ContainerEditInfo>
      <Link to="/profile">
        <Icon
          icon="si:arrow-left-line"
          width={24}
          height={24}
          color="#000000"
        />
        <p>Voltar</p>
      </Link>

      <h1>Suas informações pessoais</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Aqui está seu nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Seu Nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Aqui está seu email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefone">Aqui está seu telefone</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Seu telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="senhaAtual">Digite sua senha atual</label>
          <InputPassword
            dark={true}
            name="senhaAtual"
            id="senhaAtual"
            value={formData.senhaAtual}
            onChange={handleChange}
            placeholder="Sua senha atual"
          />
        </div>
        <div>
          <label htmlFor="novaSenha">Digite sua nova senha</label>
          <InputPassword
            dark={true}
            name="novaSenha"
            id="novaSenha"
            value={formData.novaSenha}
            onChange={handleChange}
            placeholder="Sua nova senha"
          />
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </ContainerEditInfo>
  );
}
