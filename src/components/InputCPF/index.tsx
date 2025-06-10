import { InputHTMLAttributes, useState } from "react";
import { ContainerInputCPF } from "./styles";

interface InputCPFProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputCPF({ ...rest }: InputCPFProps) {
  const [value, setValue] = useState("");

  function formatCPF(input: string) {
    return input
      .replace(/\D/g, "") // Remove tudo que não é número
      .replace(/(\d{3})(\d)/, "$1.$2") 
      .replace(/(\d{3})(\d)/, "$1.$2") 
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    const formatted = formatCPF(input);

    setValue(formatted);
  }

  return (
    <ContainerInputCPF  style={{ position: "relative" }}>
      <input
        {...rest}
        type="text"
        maxLength={14} 
        value={value}
        onChange={handleChange}
        placeholder="000.000.000-00"
      />
    </ContainerInputCPF >
  );
}
