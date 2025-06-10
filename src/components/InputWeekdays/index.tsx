import { InputWeekDayContainer } from "./styles";

interface InputWeekDaysProps {
  selectedDays: string[];
  onChange?: (days: string[]) => void;
}

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function InputWeekdays({ selectedDays = [], onChange }: InputWeekDaysProps) {
  function toggleDay(day: string) {
    const updatedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    onChange?.(updatedDays);
  }

  return (
    <InputWeekDayContainer>
      <label>Selecione os dias</label>
      <div>
        {daysOfWeek.map((day) => (
          <label
            key={day}
            className={selectedDays.includes(day) ? "checked" : ""}
          >
            <input
              type="checkbox"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </InputWeekDayContainer>
  );
}
