import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { NeutralColors } from "../../../foundation/tokens";

export const SectionHeroContainer = styled.div`
  width: 100%;
  height: 450px;
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${NeutralColors.darkest}; ;
  
  @media ${MediaQueries.Medium} {
    height: 760px;

    
  }
`;

export const SectionTextHero = styled.div`
  width: 90%;
  height: 100%;
  color: ${NeutralColors.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
  }
  h2 {
    margin: 0;
    font-size: 2rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 150%;
    font-size: small;
  }

  @media ${MediaQueries.Medium} {
    width: 750px;
    height: 289px;
    color: ${NeutralColors.lightest};

    h2 {
      font-size: 5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
