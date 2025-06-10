import { InputHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";
import { InputHourContainer } from "./styles";

interface InputHourProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
}

export function InputHour({ onChange, value, ...rest }: InputHourProps) {
  const [hour, setHour] = useState("");

  const inputValue = typeof value === "string" ? value : hour;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setHour(newValue);
    onChange?.(newValue); // agora está enviando a string HH:mm corretamente
  }

  return (
    <InputHourContainer>
      <label htmlFor="hourMed">Selecione o horário</label>
      <div>
        <input
          type="time"
          name="hourMed"
          id="hourMed"
          value={inputValue}
          onChange={handleChange}
          {...rest}
        />
        <span>{inputValue || "Clique para escolher"}</span>
        <Icon icon="proicons:clock" width={20} height={20} />
      </div>
    </InputHourContainer>
  );
}
