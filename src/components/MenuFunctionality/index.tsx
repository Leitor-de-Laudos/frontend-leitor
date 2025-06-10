import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerMenu } from "./styles";
import { Link } from "react-router-dom";


export function MenuFunctionality(){

  return(
    <ContainerMenu>
      <div>
        <Link to="/reader">
          <Icon icon="streamline:scanner" width="54" height="54"/>
        </Link>
        <p>Leitor de laudos</p>
      </div>
      <div>
        <Link to="/reader/historic">
          <Icon icon="la:file-medical-alt" width="54" height="54"/>
        </Link>
        <p>Exames</p>
      </div>
      <div>
        <Link to="/reminder">
          <Icon icon="solar:jar-of-pills-2-bold" width="54" height="54"/>
        </Link>
        <p>Medicações</p>
      </div>
      <div>
        <Link to="/">
          <Icon icon="fluent:desktop-pulse-20-regular" width="54" height="54"/>
        </Link>
        <p>Consultas</p>
      </div>
    </ContainerMenu>
  )
}