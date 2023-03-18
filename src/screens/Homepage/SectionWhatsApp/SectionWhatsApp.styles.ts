import styled from "styled-components";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const ContainerDesktop = styled.div`
  display: none;
  @media ${MediaQueries.Medium} {
    width: 1078px;
    height: 400px;
    display: flex;
    justify-content: space-between;

    section {
      display: flex;
      flex-direction: column;
      gap: 64px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    h3 {
      padding-top: 0px;
      font-size: 1.125rem;
      margin: 0;
      padding: none;
      font-family: "Proxima Nova Semibold";
      color: ${NeutralColors.lightest};
    }
    h2 {
      text-align: left;
      margin: 0;
      font-size: 3rem;
      font-family: "Proxima Nova Semibold";
      color: ${NeutralColors.lightest};
    }
  }
`;

export const SectionWhatsAppDesktop = styled.div`
  display: none;

  @media ${MediaQueries.Medium} {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 528px;
    background-color: ${BrandColors.colorBrand02};
  }
`;

export const PlayButton = styled(ButtonPrimary)`
  display: flex;
  width: 100%;
  justify-content: center;

  @media ${MediaQueries.Medium} {
    width: 230px;
    justify-content: space-between;
  }
`;


export const SectionWhatsAppMobile = styled.div`
  height: 700px;
  background-color: ${BrandColors.colorBrand02};

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  h3 {
    padding-top: 0px;
    font-size: 0.75rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.lightest};
  }
  h2 {
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.lightest};
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  background-color: ${BrandColors.colorBrand05};
  padding-top: 40px;
`;
