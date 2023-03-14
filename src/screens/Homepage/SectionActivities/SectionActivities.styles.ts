import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionActivitiesContainer = styled.div`
  width: 100%;
  padding-top: 128px;
  padding-bottom: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand01};
  gap: 64px;
`;
export const SectionTextActivities = styled.div`
  width: 90%;
  height: 220px;
  color: ${NeutralColors.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 64px;

  h3 {
    padding-top: 0px;
    font-size: 0.75rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand05};
  }
  h2 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 30px;
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 150%;
    font-weight: lighter;
  }

  @media ${MediaQueries.Medium} {
    width: 950px;
    height: 220px;

    h3 {
      font-size: 1.125rem;
    }
    h2 {
      font-size: 3rem;
      line-height: 50px;
    }
    
  }
`;

export const Activitiescards = styled.div`
  width: 950px;
`;
