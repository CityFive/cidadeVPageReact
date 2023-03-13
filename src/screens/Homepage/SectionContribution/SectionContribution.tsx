import ButtonPrimary from "../../../components/ButtonPrimary";
import {
  Container,
  SectionContributionContainer
} from "./SectionContribution.styles";

const SectionContribution = () => (
  <SectionContributionContainer>
    <Container>
      <img src="/images/qrcode.png" width={278} height={278} />
      <section>
        <div>
          <h3>CONTRIBUA</h3>
          <h2>
            Copie o Pix ou QR-Code para <br /> ofertar na Cidade Cinco
          </h2>
        </div>
        <ButtonPrimary>Copiar chave Pix</ButtonPrimary>
      </section>
    </Container>
  </SectionContributionContainer>
);

export default SectionContribution;
