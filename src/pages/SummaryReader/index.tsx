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
    const explanationTag = "**Explicação:**";
    const conclusionTag = "**Conclusão:**";

    const explanationIndex = content.indexOf(explanationTag);
    const conclusionIndex = content.indexOf(conclusionTag);

    if (explanationIndex === -1 || conclusionIndex === -1 || conclusionIndex < explanationIndex) {
      return { explanation: content.trim(), conclusion: "" };
    }

    const explanation = content
      .substring(explanationIndex + explanationTag.length, conclusionIndex)
      .trim();

    const conclusion = content
      .substring(conclusionIndex + conclusionTag.length)
      .trim();

    return { explanation, conclusion };
  };


  const formatTextToParagraphs = (text: string) => {
    return text
      .split(/\n|\.\s+/) // quebra em frases por ponto final ou nova linha
      .filter(Boolean)
      .map((sentence, index) => <p key={index}>{sentence.trim()}.</p>);
  };


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
            {formatTextToParagraphs(explanation)}
          </div>
          <div>
            <h2>Conclusão</h2>
            {formatTextToParagraphs(conclusion)}
          </div>
        </>
        ) : (
          <p>Carregando...</p>
       )}
      </main>

    </SummaryContainer>
  );
}