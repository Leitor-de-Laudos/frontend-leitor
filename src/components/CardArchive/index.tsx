import { Icon } from "@iconify/react/dist/iconify.js";
import { CardContainer } from "./styles";

interface Cardprops {
  name: string
  iconName: string
}

export function CardArchive ({name, iconName}: Cardprops){

  return(
    <CardContainer>
      <Icon icon={iconName} />
      <p>{name}</p>
    </CardContainer>
  )
}