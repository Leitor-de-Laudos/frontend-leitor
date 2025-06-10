import { Link, useNavigate } from "react-router-dom";
import {
  ReaderContainer,
  ReaderFileContainerInForm,
  HiddenInput,
  UploadLabel,
} from "./styles";
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { ReaderReportContext } from "@/contexts/ReaderReportContext";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function ReaderReport() {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { sendFile } = useContext(ReaderReportContext);
  const { profile } = useContext(InfoUserContext);
  const navigate = useNavigate();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !profile?.id) {
      console.log("Arquivo ou usuário não informado!");
      return;
    }

    try {
      const success = await sendFile(selectedFile, profile.id);
      if (success) {
        navigate(`/reader/summary/${success.id}`);
        console.log("Upload bem-sucedido!", success);
      } else {
        console.log("Erro no upload!");
      }
    } catch (error) {
      console.log("Erro ao enviar:", error);
    }
  };

  return (
    <ReaderContainer>
      <Link to="/">
        <Icon icon="garden:chevron-left-fill-16" height={16} width={16} />
        <span>Voltar</span>
      </Link>

      <header>
        <h1>Leitor de laudo</h1>
        <p>Escolha abaixo qual arquivo PDF deseja ler para obter uma resposta.</p>
      </header>

      <form onSubmit={handleSubmit}>
        <ReaderFileContainerInForm $fileAccept={!!fileName}>
          <HiddenInput
            type="file"
            id="fileUpload"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <UploadLabel htmlFor="fileUpload">
            {!fileName ? (
              <Icon icon="mynaui:upload" height={24} width={24} />
            ) : (
              <Icon icon="simple-line-icons:check" height={24} width={24} />
            )}
            <span>{fileName || "Selecione um arquivo PDF"}</span>
          </UploadLabel>
        </ReaderFileContainerInForm>

        <button type="submit">Confirmar</button>
      </form>
    </ReaderContainer>
  );
}
