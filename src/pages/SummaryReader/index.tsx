import { Icon } from "@iconify/react/dist/iconify.js";
import { SummaryContainer } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useContext, useEffect } from "react";
import { ReaderReportContext } from "@/contexts/ReaderReportContext";

export function SummaryReader() {
  const { getReaderById, readerSpecific, deleteReportReader } = useContext(ReaderReportContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getReaderById(id);
    }
  }, [id]);

  async function handleDelete() {
    if (!readerSpecific?.id) return;

    const confirmDelete = window.confirm("Tem certeza que deseja deletar este relatório?");
    if (!confirmDelete) return;

    try {
      await deleteReportReader(readerSpecific.id);
      navigate("/reader/historic");
    } catch (error) {
      alert("Erro ao deletar o relatório. Tente novamente.");
    }
  }

  const extractExplanationAndConclusion = (content: string) => {
   const regex = /\*\*Explicação\*\*:?\s*(.*?)\s*\*\*Conclusão\*\*:?\s*(.*)/s;
   const match = content.match(regex);

   if (!match) return { explanation: content.trim(), conclusion: "" };

   const [, explanation, conclusion] = match;
   return {
    explanation: explanation.trim(),
    conclusion: conclusion.trim(),
   };
  };

  const formatParagraphs = (text: string) =>
    text.split(/(?<=\.)\s+/).map((sentence, index) => <p key={index}>{sentence}</p>);

  const { explanation, conclusion } = extractExplanationAndConclusion(readerSpecific?.content || "");

  return (
    <SummaryContainer>
      <header>
        <Link to="/reader/historic">
          <Icon icon="garden:chevron-left-fill-16" height={16} width={16} />
          <span>Voltar</span>
        </Link>
        <h1>Resumo do Laudo</h1>
        <button type="button" onClick={handleDelete}>
          <Icon icon="solar:trash-bin-trash-outline" height={16} width={16} />
        </button>
      </header>

      <main>
       {readerSpecific?.content ? (
        <>
         <div>
          <h2>Explicação</h2>
          {formatParagraphs(explanation)}
         </div>
         <div>
          <h2>Conclusão</h2>
          {formatParagraphs(conclusion)}
         </div>
        </>
       ) : (
        <p>Carregando...</p>
       )}
      </main>
    </SummaryContainer>
  );
}