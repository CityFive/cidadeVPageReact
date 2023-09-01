import { DownloadSimple } from "phosphor-react";
import ButtonGrey from "../../../components/ButtonsConfession/ButtonPrimary/ButtonGrey copy";
import {
  GridContainer,
  SectionConfessionContainer,
  SectionTextConfession,
} from "./SectionConfessionOfFaith.styles";
import ButtonBeige from "../../../components/ButtonsConfession/ButtonPrimary/ButtonBeige";

const SectionConfessionOfFaith = () => {
  return (
    <SectionConfessionContainer id="confissao">
      <SectionTextConfession>
        <h2>Conheça os nossos distintivos de fé </h2>
        <p>
          Somos uma igreja cristã, batista e reformada fundada na cidade de São
          Paulo durante a pandemia da COVID-19 em 2021, por meio do trabalho de
          plantação liderado pelo pastor Fábio Leal e outros irmãos. Nosso
          objetivo é ecoar a mensagem do evangelho do Reino de Deus, cooperar
          com outras igrejas na Grande Comissão e ser uma igreja comprometida
          com os princípios do cristianismo bíblico.
        </p>
      </SectionTextConfession>
      <GridContainer>
        <ButtonGrey>
          Confissão Batista de 1689
          <DownloadSimple size={20} weight="fill" />
        </ButtonGrey>
        <ButtonGrey>
          Declaração de Cambridge
          <DownloadSimple size={20} weight="fill" />
        </ButtonGrey>
        <ButtonGrey>
          Sínodo de Dort
          <DownloadSimple size={20} weight="fill" />
        </ButtonGrey>
        <ButtonBeige>
          Credo Apostólico
          <DownloadSimple size={20} weight="fill" />
        </ButtonBeige>
        <ButtonBeige>
          Credo Niceno
          <DownloadSimple size={20} weight="fill" />
        </ButtonBeige>
        <ButtonBeige>
          Credo Niceno
          <DownloadSimple size={20} weight="fill" />
        </ButtonBeige>
      </GridContainer>
    </SectionConfessionContainer>
  );
};
export default SectionConfessionOfFaith;
