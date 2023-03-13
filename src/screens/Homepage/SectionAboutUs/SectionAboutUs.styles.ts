import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionAboutUsContainer = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand05};
  gap: 64px;

  @media ${MediaQueries.Medium} {
    height: 650px;
  }
`;
export const SectionTextAboutUs = styled.div`
  width: 90%;
  height: 289px;
  color: ${NeutralColors.darkest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h3 {
    padding-top: 0px;
    font-size: 0.75rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
  }
  h2 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
  p {
    margin: 0;
    font-size: 1rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 150%;
    font-weight: lighter;
  }
  @media ${MediaQueries.Medium} {
    width: 950px;

    h3 {
      font-size: 1.125rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`;
