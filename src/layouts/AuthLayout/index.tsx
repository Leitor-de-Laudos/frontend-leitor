import { Outlet } from "react-router-dom";
import { LayoutContainer } from "@/layouts/AuthLayout/styles";

export function AuthLayout() {
  return (
    <div>
      <LayoutContainer>
        <Outlet/>
      </LayoutContainer>
    </div>
  )
}