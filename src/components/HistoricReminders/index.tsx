import { useContext, useEffect } from "react";
import { ReminderContext, ReminderTypeResponse } from "@/contexts/ReminderContext";
import { ContainerHistoric, ContainerReminder } from "./styles";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { InfoUserContext } from "@/contexts/InfoUserContext";

dayjs.locale("pt-br");

const reverseWeekDaysMap = [
  "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
];

export function HistoricReminders() {
  const { listReminders, reminderList } = useContext(ReminderContext);
  const { profile } = useContext(InfoUserContext);

  useEffect(()=>{
    listReminders(profile.id);
  }, [profile.id])

  // Lista de 7 dias começando hoje
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const date = dayjs().add(i, 'day');
    return {
      date,
      dayNumber: date.date(),
      weekDay: reverseWeekDaysMap[date.day()],
    };
  });

  function handleRenderTodayReminder( arrayToday: ReminderTypeResponse[]){
    const algo = arrayToday.map((reminder, index) => (
      <h2 key={index}>
        {reminder.nameReminder ?? "Não tem" } <span>{reminder.hourReminder.slice(0,5)}</span>
      </h2>
    ))

    return algo;
  }

  return (
    <ContainerHistoric>
      {next7Days.map((day) => {
        const todaysReminders = reminderList.filter(reminder =>
          reminder.weekDayReminder.includes(day.weekDay)
        );

        return (
          <ContainerReminder key={day.date.format("YYYY-MM-DD")}>
            <div>
              <h1>{day.dayNumber}</h1>
              <p>{day.weekDay.toUpperCase()}</p>
            </div>
            <div>
              {handleRenderTodayReminder(todaysReminders)}
            </div>
          </ContainerReminder>
        );
      })}
    </ContainerHistoric>
  );
}
