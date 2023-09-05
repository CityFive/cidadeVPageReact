import { SectionHeroContainer, SectionTextHero } from "./SectionHero.styles";


const SectionHero = () => {
  return (
    <SectionHeroContainer>
      <SectionTextHero>
        <h2>
          Bem-vindo à Cidade Cinco! 
        </h2>
        <p>
          Somos uma igreja batista reformada no centro de São Paulo.
          Ficamos felizes com seu interesse em <br/> nos visitar!
          Abaixo, você encontrará informações que serão úteis no planejamento de sua visita.
        </p>
      </SectionTextHero>
    </SectionHeroContainer>
  );
};

export default SectionHero;
