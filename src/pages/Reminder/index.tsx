import { useContext, useEffect } from "react";
import { ContainerReminder } from "./styles";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CardReminder } from "@/components/CardReminder";
import { ReminderContext } from "@/contexts/ReminderContext";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function Reminder() {
  const { listReminders, reminderList } = useContext(ReminderContext);
  const { profile } = useContext(InfoUserContext);

  useEffect(() => {
    if (profile?.id) {
      listReminders(profile.id);
    }
  }, [profile]);

  return (
    <>
      <ContainerReminder>
        <header>
          <Link to="/">
            <Icon icon="fluent:arrow-left-16-filled" height={24} width={24} />
          </Link>
          <h1>Lembretes</h1>
          <span>
            <Link to="/reminder/create">
              <Icon icon="line-md:plus" height={16} width={16} />
            </Link>
          </span>
        </header>
      </ContainerReminder>

      {reminderList.length === 0 ? (
        <p style={{ textAlign: "center" }}>Nenhum lembrete encontrado.</p>
      ) : (
        reminderList.map((reminder) => (
           <CardReminder
            key={reminder.idReminder}
            id={reminder.idReminder}
            idUser={profile.id}
            hourReminder={reminder.hourReminder}
            weekDay={reminder.weekDayReminder}
            done={false}
            item={{
              text: reminder.nameReminder,
              quant: reminder.quantReminder,
              dosage: reminder.dosageReminder,
              dosageUnit: reminder.dosageUnitReminder,
              time: reminder.hourReminder,
            }}
          />
        ))
      )}
    </>
  );
}