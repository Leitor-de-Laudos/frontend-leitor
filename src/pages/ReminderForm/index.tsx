import { Link, useNavigate } from "react-router-dom";
import { ContainerReminder, ContainerReminderForm } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { InputHour } from "@/components/InputHour";
import { InputWeekdays } from "@/components/InputWeekdays";
import { InputDosage } from "@/components/InputDosage";
import { useContext, useState } from "react";
import { ReminderContext, ReminderTypeRequest } from "@/contexts/ReminderContext";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function ReminderForm() {
  const navigate = useNavigate();
  const { createReminder } = useContext(ReminderContext);
  const { profile } = useContext(InfoUserContext);

  const [reminderData, setReminderData] = useState<ReminderTypeRequest>({
    idUser: "",
    email: "",
    nameReminder: "",
    quantReminder: "",
    dosageReminder: 1,
    dosageUnitReminder: "mg",
    weekDayReminder: [],
    hourReminder: ""
  });


  function handleChange(field: keyof ReminderTypeRequest, value: any) { // Função genérica para atualizar campo do objeto reminderData
    setReminderData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const finalReminder = {
      ...reminderData,
      idUser: profile.id,
      email: profile.email,
    };

    console.log(finalReminder); 

    try {
      await createReminder(finalReminder);
      alert("Lembrete criado com sucesso!");

      setReminderData({} as ReminderTypeRequest);

      navigate("/reminder");
      
    } catch (err) {
      console.error(err);
      alert("Erro ao criar lembrete.");
    }
}

  return (
    <ContainerReminder>
      <header>
        <Link to="/reminder">
          <Icon icon="majesticons:arrow-left" height={24} width={24} />
        </Link>
        <h1>Criar lembrete</h1>
      </header>

      <ContainerReminderForm onSubmit={handleSubmit}>
        <section>
          <label htmlFor="nameMed">Informe o nome</label>
          <input
            type="text"
            name="nameMed"
            id="nameMed"
            placeholder="Ex: Paracetamol"
            value={reminderData.nameReminder}
            onChange={e => handleChange("nameReminder", e.target.value)}
            required
          />
        </section>

        <section>
          <label htmlFor="quantMed">Informe a quantidade</label>
          <input
            type="number"
            name="quantMed"
            id="quantMed"
            placeholder="Ex: 2"
            min={1}
            value={reminderData.quantReminder}
            onChange={e => handleChange("quantReminder", e.target.value)}
            required
          />
        </section>

        {/* Dosagem e unidade */}
        <InputDosage
          dosageValue={reminderData.dosageReminder}
          dosageUnitValue={reminderData.dosageUnitReminder}
          onDosageChange={value => {
            console.log("DosageChange", value)
            handleChange("dosageReminder", value)
          }}
          onDosageUnitChange={value => {
            console.log("DosageUnitChange", value)
            handleChange("dosageUnitReminder", value)
          }}
          inputProps={{ required: true }}
          selectProps={{ required: true }}
        />

        {/* Dias da semana */}
        <InputWeekdays
          selectedDays={reminderData.weekDayReminder}
          onChange={days => handleChange("weekDayReminder", days)}
        />

        {/* Horário */}
        <InputHour
          value={reminderData.hourReminder}
          onChange={value => handleChange("hourReminder", value)}
        />

        <button type="submit">Salvar lembrete</button>
      </ContainerReminderForm>
    </ContainerReminder>
  );
}
