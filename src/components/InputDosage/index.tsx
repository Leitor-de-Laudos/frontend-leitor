import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { InputDosageContainer } from "./styles";

interface InputDosageProps {
  dosageValue: number;
  dosageUnitValue: "mg" | "ml" | "g" | "mcg";
  onDosageChange: (value: number) => void;
  onDosageUnitChange: (value: "mg" | "ml" | "g" | "mcg") => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
}

export function InputDosage({
  dosageValue,
  dosageUnitValue,
  onDosageChange,
  onDosageUnitChange,
  inputProps,
  selectProps
}: InputDosageProps) {
  return (
    <InputDosageContainer>
      <label htmlFor="dosMed">Informe a dosagem</label>

      <div className="input-wrapper">
        <input
          type="number"
          name="dosMed"
          id="dosMed"
          placeholder="Ex: 500"
          min={1}
          step="any"
          value={dosageValue}
          onChange={(e) => {
            const value = Number(e.target.value);
            onDosageChange(value);
            inputProps?.onChange?.(e); // se quiser manter o evento adicional
          }}
          {...inputProps}
        />

        <select
          name="dosUnit"
          id="dosUnit"
          value={dosageUnitValue}
          onChange={(e) => {
            const value = e.target.value as "mg" | "ml" | "g" | "mcg";
            onDosageUnitChange(value);
            selectProps?.onChange?.(e);
          }}
          {...selectProps}
        >
          <option value="mg">mg</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
          <option value="mcg">mcg</option>
        </select>
      </div>
    </InputDosageContainer>
  );
}
