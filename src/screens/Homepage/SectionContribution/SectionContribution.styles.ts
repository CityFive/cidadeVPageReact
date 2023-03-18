import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionContributionContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${MediaQueries.Medium} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 550px;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    padding-top: 32px;
    font-size: 0.75rem;

    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand02};
  }
  h2 {
    padding-top: 16px;
    padding-bottom: 32px;

    text-align: center;
    margin: 0;
    font-size: 1.5rem;
    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.darkest};
  }

  @media ${MediaQueries.Medium} {
    width: 970px;
    height: 280px;
    flex-direction: row;
    justify-content: space-between;

    section {
      gap: 64px;
      justify-content: space-between;
      align-items: flex-start;
    }
    div {
      gap: 24px;
      align-items: flex-start;
    }

    h3 {
      padding-top: 0px;
      font-size: 1.125rem;
      margin: 0;
      padding: none;
    }
    h2 {
      text-align: left;
      font-size: 3rem;
    }
  }
`;
