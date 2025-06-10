import { Icon } from "@iconify/react/dist/iconify.js";
import {
  CardContainer,
  CirculoData,
  ColunaDetalhes,
  DataColuna,
  LineItem,
} from "./styles";
import { useContext } from "react";
import { ReminderContext } from "@/contexts/ReminderContext";

interface ReminderItem {
  text: string;
  time: string; // formato "HH:mm"
  quant: string;
  dosage: number;
  dosageUnit: string;
}

interface CardReminderProps {
  id: string;
  idUser: string;
  weekDay: string[]; // também no formato "HH:mm"
  hourReminder: string;
  done: boolean;
  item: ReminderItem;
}

export function CardReminder({
  id,
  idUser,
  weekDay,
  hourReminder,
  item,
}: CardReminderProps) {

  const { deleteReminder } = useContext(ReminderContext)

  const now = new Date();
  const [hours, minutes] = hourReminder.split(":").map(Number);
  now.setHours(hours, minutes, 0, 0);

  async function handleDeleteReminder(){
    console.log(id);

    const result = await deleteReminder(id, idUser);

    alert(result);
  }

  return (
    <CardContainer>
      <DataColuna>
        <CirculoData>
          <small>
            {weekDay[0]}
          </small>
        </CirculoData>
        <button onClick={handleDeleteReminder}>
          <Icon icon="ri:delete-bin-6-line" />
        </button>
      </DataColuna>

      <ColunaDetalhes>
        <LineItem>
          <div className="text">
            {item.text + " x"+item.quant + "\n"}
            {item.dosage + " " + item.dosageUnit}
          </div>

          <div className="time">{item.time.slice(0, 5)}</div>
        </LineItem>
      </ColunaDetalhes>
    </CardContainer>
  );
}
