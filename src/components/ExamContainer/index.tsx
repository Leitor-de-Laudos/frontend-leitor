import { Link } from "react-router-dom";
import { ExamContainerStyle } from "./styles";

interface ExamInfoProps {
  id: string; // ADICIONADO
  name: string;
  nameUser: string;
  date: string;
}

export function ExamContainer({ id, name, nameUser, date }: ExamInfoProps) {
  return (
    <ExamContainerStyle>
      <section>
        <h3>{name}</h3>
        <span>{date}</span>
      </section>
      <section>
        <p>{nameUser}</p>
        <Link to={`/reader/summary/${id}`}>
          Visualizar
        </Link>
      </section>
    </ExamContainerStyle>
  );
}
