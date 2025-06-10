import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { NavBarMenu } from "@/components/NavBarMenu";


export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Outlet/>
        <NavBarMenu />
      </LayoutContainer>
    </div>
  )
}