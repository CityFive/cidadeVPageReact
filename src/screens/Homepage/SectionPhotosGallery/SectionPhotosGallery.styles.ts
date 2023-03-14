import { BrandColors, NeutralColors } from "../../../foundation/tokens";
import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";

export const GalleryList = styled.div`
  display: none;

  @media ${MediaQueries.Medium} {
    width: 950px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const GalleryItem = styled.div`
  img {
    width: 306px;
    height: 297px;
    object-fit: cover;
  }
`;

export const SectionGalleryContainer = styled.div`
  width: 100%;
  padding-top: 128px;
  padding-bottom: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${NeutralColors.lightest};
  gap: 64px;
  @media ${MediaQueries.Medium} {
    background-color: ${BrandColors.colorBrand05};
  
  
  }
`;
export const SectionTextGallery = styled.div`
  width: 90%;
  height: 100px;
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
  @media ${MediaQueries.Medium} {
    width: 950px;
    height: 100px;
    color: ${NeutralColors.darkest};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    h3 {
      font-size: 1.125rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
`;
