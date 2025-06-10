import { createContext, ReactNode, useState } from "react";
import { apiReminder } from "@/lib/axiosReminder";

export interface ReminderTypeResponse {
  idReminder: string;
  idUser: string;
  nameReminder: string;
  quantReminder: string;
  dosageReminder: number;
  dosageUnitReminder: "mg" | "ml" | "g" | "mcg";
  weekDayReminder: string[];
  hourReminder: string;
}

export interface ReminderTypeRequest {
  idUser: string;
  email: string;
  nameReminder: string;
  quantReminder: string;
  dosageReminder: number;
  dosageUnitReminder: "mg" | "ml" | "g" | "mcg";
  weekDayReminder: string[];
  hourReminder: string;
}


interface ReminderContextType {
  createReminder: (data: ReminderTypeRequest) => Promise<ReminderTypeResponse>;
  listReminders: (userId: string) => Promise<void>;
  deleteReminder: (id: string, idUser: string) => Promise<String  >;
  reminderList: ReminderTypeResponse[];
}

interface ReaderReportProviderProps {
  children: ReactNode;
}

export const ReminderContext = createContext({} as ReminderContextType);

export function ReminderProvider({ children }: ReaderReportProviderProps) {
  const [reminderList, setReminderList] = useState<ReminderTypeResponse[]>([]);

  async function createReminder(data: ReminderTypeRequest): Promise<ReminderTypeResponse> {
    try {
      console.log('Payload enviado:', data);

      const response = await apiReminder.post<ReminderTypeResponse>(
        "/api/reminders",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao criar lembrete:", error);
      throw error;
    }
  }

  async function listReminders(userId: string) {
    try {
      
      if(userId == undefined || userId == null || userId == '') {
        return;
      }

      const response = await apiReminder.get<ReminderTypeResponse[]>(
        `/api/reminders/user/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setReminderList(response.data);
    } catch (error) {
      console.error("Erro ao listar lembretes:", error);
      throw error;
    }
  }

   async function deleteReminder(id: string, idUser: string) {
    try {
      
      if(id == undefined || id == null || id == '') {
        return "Falta o id do lembrete";
      }

      await apiReminder.delete<void>(
        `/api/reminders/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      listReminders(idUser);

      return `Lembrete deletado com sucesso. ID: ${id ?? 'sem id'}`;
    } catch (error) {
      console.error("Erro ao listar lembretes:", error);
      throw error;
    }
  }

  return (
    <ReminderContext.Provider value={{ createReminder, listReminders, reminderList, deleteReminder }}>
      {children}
    </ReminderContext.Provider>
  );
}
