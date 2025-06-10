import { InputHTMLAttributes, useState } from "react"
import { Icon } from "@iconify/react"
import { ContainerInputPassword } from "./styles"

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  dark?: boolean;
}

export function InputPassword({ dark, ...rest }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev)
  }

  return (
    <ContainerInputPassword style={{ position: "relative" }} $isDark={dark}>
      <input
        {...rest}
        type={showPassword ? "text" : "password"}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Icon
          icon={showPassword ? "iconamoon:eye-off-light" : "iconamoon:eye-light"}
          width={20}
          height={20}
          color="#fafafa"
        />
      </button>
    </ContainerInputPassword>
  )
}
