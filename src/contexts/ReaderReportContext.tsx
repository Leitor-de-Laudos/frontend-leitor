import { createContext, ReactNode, useState } from "react";
import { apiReader } from "@/lib/axiosReader";


interface ReaderReportInfoTypeResponse {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  title: string;
}

interface ReaderReportContextType {
  readerSummary: ReaderReportInfoTypeResponse; 
  readerSpecific: ReaderReportInfoTypeResponse;
  readerList: ReaderReportInfoTypeResponse[];
  getReaderList: (userId: string) => Promise<ReaderReportInfoTypeResponse[]>;
  getReaderById: (id: string) => Promise<ReaderReportInfoTypeResponse>;
  sendFile: (file: File, userId: string) => Promise<ReaderReportInfoTypeResponse>;
  deleteReportReader: (id: string ) => Promise<void>;
}


interface ReaderReportProviderProps {
  children: ReactNode;
}

export const ReaderReportContext = createContext({} as ReaderReportContextType);

export function ReaderReportProvider({ children }: ReaderReportProviderProps) {
  const [readerSummary, setReaderSummary] = useState<ReaderReportInfoTypeResponse>({} as ReaderReportInfoTypeResponse);
  const [readerSpecific, setReaderSpecific] = useState<ReaderReportInfoTypeResponse>({} as ReaderReportInfoTypeResponse)
  const [readerList, setReaderList] = useState<ReaderReportInfoTypeResponse[]>([]);

  async function getReaderList(userId: string): Promise<ReaderReportInfoTypeResponse[]> {
    try {
      const response = await apiReader.get<ReaderReportInfoTypeResponse[]>("/api/list", {
        params: { userId },
      });
      setReaderList(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar lista de relatórios:", error);
      setReaderList([]);
      return []; 
    }
  }


  async function getReaderById(id: string): Promise<ReaderReportInfoTypeResponse> {
  try {
    const response = await apiReader.get<ReaderReportInfoTypeResponse>(`/api/report/laudo/${id}`);
    setReaderSpecific(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar relatório:", error);
    // Retorne um objeto vazio com valores padrão válidos
    return {
      id: '',
      content: '',
      userId: '',
      createdAt: '',
      title: ''
    };
  }
}


  async function sendFile(file: File, userId: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      const response = await apiReader.post<ReaderReportInfoTypeResponse>("/api/scanner", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setReaderSummary(response.data);
      
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      throw error;
    }
  }

  async function deleteReportReader(id: string): Promise<void> {
    try {
      await apiReader.delete(`/api/scanner/delete/${id}`);
      
      
      setReaderList((prev) => prev.filter((report) => report.id !== id)); // Atualiza a lista 
    } catch (error) {
      console.error("Erro ao remover o relatório:", error);
      throw error;
    }
  }

  return (
    <ReaderReportContext.Provider value={{ readerSummary, readerSpecific, readerList, getReaderList, getReaderById, sendFile, deleteReportReader }}>
      {children}
    </ReaderReportContext.Provider>
  );
}
