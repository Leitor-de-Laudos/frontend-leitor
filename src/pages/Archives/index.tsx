import { Link } from "react-router-dom";
import { ArchivesContainer, GridArquivos, } from "./styles";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CardArchive } from "@/components/CardArchive";

interface Categoria {
    id: number;
    nome: string;
    icon: string;
  }

  
export function Archives()  {

  const [categories] = useState<Categoria[]>([
    {
      id: 1,
      nome: "Receitas",
      icon: "solar:jar-of-pills-2-bold",
    },
    {
      id: 2,
      nome: "Laudos",
      icon: "f7:folder",
    },
    {
      id: 3,
      nome: "Exames",
      icon: "la:file-medical-alt",
    },
  ]);
    
  return(
    <>
      <ArchivesContainer>
        <header>
          <Link to="/">
            <Icon icon="garden:chevron-left-fill-16" height={16} width={16} />
            <span>Voltar</span>
          </Link>
          <h1>Arquivos</h1>
          <span>
            <Link to="/reader">
              <Icon icon="line-md:plus" height={16} width={16} />
            </Link>
          </span>
        </header>
      </ArchivesContainer>
      <GridArquivos>
        {categories.map((cat) => (
          <CardArchive key={cat.id} iconName={cat.icon} name={cat.nome} />
        ))}
      </GridArquivos>
    </>
  )
}