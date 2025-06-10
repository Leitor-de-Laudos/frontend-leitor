import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerOptionsInfo, ContainerProfile, ProfileMain } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function ProfileInfo() {
  const { profile, deleteAccount, logout } = useContext(InfoUserContext);
  const navigate = useNavigate();

  async function handleDeleteAccount() {
    const confirmed = window.confirm("Tem certeza que deseja excluir sua conta? Essa ação é irreversível.");

    if (confirmed) {
      const sucesso = await deleteAccount();

      if (sucesso) {
        alert("Conta excluída com sucesso.");
        navigate("/auth/signin"); 
      } else {
        alert("Erro ao excluir conta.");
      }
    } else {
      console.log("Exclusão cancelada");
    }
  }

  async function handleLogout() {
    logout(); 
    navigate("/auth/signin"); 
  }

  return (
    <ContainerProfile>
      <ProfileMain>
        <h1>Perfil</h1>
        <div>
          <span><Icon icon="mynaui:pencil" width="16" height="16" /></span>
        </div>
        <h2>{profile.nome ?? "name user"}</h2>
      </ProfileMain>

      <ContainerOptionsInfo>
        <div>
          <span><Icon icon="material-symbols:info-outline" width="20" height="20" /></span>
          <Link to="/profile/edit">
            <p>Informações</p>
          </Link>
        </div>
        <div onClick={handleDeleteAccount}> 
          <span><Icon icon="icons8:cancel" width="20" height="20" /></span>
          <p>Excluir Conta</p>
        </div>
        <div onClick={handleLogout}> 
          <span><Icon icon="garden:exit-fill-16" width="18" height="18" /></span>
          <p>Sair</p>
        </div>
      </ContainerOptionsInfo>
    </ContainerProfile>
  );
}
