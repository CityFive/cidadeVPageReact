import styled from "styled-components";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionMediasDesktop = styled.div`
  display: none;

  @media ${MediaQueries.Medium} {
    display: block;
  }
`;

export const SectionMediasMobile = styled.div`
  display: block;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${BrandColors.colorBrand02};
  padding-top: 40px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 24px;
    margin: 32px 0;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    padding-top: 0px;
    font-size: 0.75rem;
    text-align: center;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand02};
  }
  h2 {
    text-align: left;
    margin: 0;
    font-size: 1.5rem;
    text-align: center;

    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.darkest};
  }

  @media ${MediaQueries.Medium} {
    width: 1078px;
    height: 400px;
    flex-direction: row;

    section {
      align-items: flex-start;
      text-align: left;
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
      text-align: left;
    }
    h2 {
      text-align: left;
      font-size: 3rem;
      text-align: left;
    }
  }
`;

export const SectionYoutube = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${NeutralColors.light};
  @media ${MediaQueries.Medium} {
    height: 528px;
  }
`;
export const SectionSpotify = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${BrandColors.colorBrand03};
  @media ${MediaQueries.Medium} {
    height: 528px;
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
