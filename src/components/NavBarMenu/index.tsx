import { useLocation, useNavigate } from "react-router-dom";
import { ContainerNavBar, NavButton } from "./styles";
import { Icon } from "@iconify/react";

export function NavBarMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const isActive = (path: string) => location.pathname === path;

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <ContainerNavBar>
      <div>
        <NavButton
          $isActive={isActive("/")}
          onClick={() => handleClick("/")}
        >
          <Icon icon="lucide:home" width="24" height="24" />
        </NavButton>

        <NavButton
          $isActive={isActive("/archives")}
          onClick={() => handleClick("/archives")}
        >
          <Icon icon="material-symbols:inbox-outline-rounded" width="24" height="24" />
        </NavButton>
      </div>

      <NavButton
        $isActive={isActive("/reader")}
        $isMain
        onClick={() => handleClick("/reader")}
      >
        <Icon icon="streamline:scanner" width="28" height="28" />
      </NavButton>

      <div>
        <NavButton
          $isActive={isActive("/reminder")}
          onClick={() => handleClick("/reminder")}
        >
          <Icon icon="lsicon:calendar-outline" width="24" height="24" />
        </NavButton>

        <NavButton
          $isActive={isActive("/profile")}
          onClick={() => handleClick("/profile")}
        >
          <Icon icon="iconoir:profile-circle" width="24" height="24" />
        </NavButton>
      </div>
    </ContainerNavBar>
  );
}