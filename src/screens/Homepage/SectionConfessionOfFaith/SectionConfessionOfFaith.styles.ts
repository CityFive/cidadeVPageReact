import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { NeutralColors } from "../../../foundation/tokens";

export const SectionConfessionContainer = styled.div`
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${NeutralColors.lightest};
  gap: 40px;

  @media ${MediaQueries.Medium} {
  }
`;
export const SectionTextConfession = styled.div`
  width: 90%;
  color: ${NeutralColors.darkest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  h2 {
    margin: 0;
    font-size: 2rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
  p {
    margin: 0;
    font-size: 1rem;
    text-align: center;
    font-family: "Proxima Nova";
    line-height: 150%;
    font-weight: lighter;
  }
  @media ${MediaQueries.Medium} {
    width: 950px;

    h3 {
      font-size: 1.125rem;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`;
export const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  @media ${MediaQueries.Medium} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media ${MediaQueries.Large} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
