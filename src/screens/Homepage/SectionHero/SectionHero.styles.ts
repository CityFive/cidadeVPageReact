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

  h2 {
    margin: 0;
    font-size: 2rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 150%;
    font-size: small;
    font-weight: 600;
  }

  @media ${MediaQueries.Medium} {
    width: 90%;
    height: 289px;
    color: ${NeutralColors.lightest};

    h2 {
      font-size: 4rem;
      width: 60vw;
    }
    p {
      font-size: 1rem;
      width: 56vw;
      font-weight: 600;
    }
  }
`;
