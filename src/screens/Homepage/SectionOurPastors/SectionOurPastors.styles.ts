import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionOurPastorsContainerMobile = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand03};
  gap: 60px;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const SectionOurPastorsContainerDesktop = styled.div`
  display: none;

  @media ${MediaQueries.Medium} {
    width: 100%;
    padding-top: 128px;
    padding-bottom: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${BrandColors.colorBrand03};
    gap: 60px;

    h4 {
      padding-top: 0px;
      font-size: 1.625rem;
      margin: 0;

      padding: none;
      font-family: "Proxima Nova Semibold";
      font-weight: 100;
      color: ${NeutralColors.darkest};
    }
  }
`;
export const ContainerOurPastors = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 60px 0 40px 0;

    padding: none;
    font-family: "Proxima Nova Semibold";
    font-weight: 100;
    color: ${NeutralColors.darkest};
  }

  @media ${MediaQueries.Medium} {
    h4 {
      padding-top: 0px;
      font-size: 1.625rem;
      margin: 80px 0 40px 0;

      padding: none;
      font-family: "Proxima Nova Semibold";
      font-weight: 100;
      color: ${NeutralColors.darkest};
    }
  }
`;
export const ExternalStylingProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 100%;

  @media ${MediaQueries.Medium} {
    gap: 16px;
}
`;

export const SectionTextOurPastors = styled.div`
  width: 90%;
  height: 100%;
  color: ${NeutralColors.darkest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h1 {
    padding-top: 0px;
    font-size: 3rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
  }

  p {
    padding-top: 0px;
    font-size: 1.2rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    text-align: center;
  }

  @media ${MediaQueries.Medium} {
    width: 950px;
    height: 155px;
    color: ${NeutralColors.darkest};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    h2 {
      margin: 0;
      font-size: 3rem;
      text-align: center;
      font-family: "Proxima Nova Semibold";
    }

    h3 {
      padding-top: 0px;
      font-size: 1.125rem;
      margin: 0;
      padding: none;
      font-family: "Proxima Nova Semibold";
      color: ${BrandColors.colorBrand02};
    }
  }
`;
