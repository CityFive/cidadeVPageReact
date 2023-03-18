import { BrandColors, NeutralColors } from "../../../foundation/tokens";
import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";

export const SectionGalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${NeutralColors.lightest};

  @media ${MediaQueries.Medium} {
    padding-bottom: 168px;
    padding-top: 128px;
    margin-bottom: 0px;
    gap: 64px;
    height: 1420px;
    background-color: ${NeutralColors.lightest};
  }
`;
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
  }
`;
export const MobileCoverImage = styled.img`
  width: 100%;
  height: 375px;
  display: block;
  object-fit: cover;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const SectionTextGallery = styled.div`
  width: 90%;
  height: 100%;
  color: ${NeutralColors.darkest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    padding-top: 0px;
    font-size: 0.75rem;
    margin-top: 32px;
    margin-bottom: 0px;

    padding: none;
    font-family: "Proxima Nova Semibold";
  }
  h2 {
    margin: 0;
    font-size: 1.5rem;
    margin-top: 16px;
    margin-bottom: 32px;
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
      margin: 0;
    }
    h2 {
      font-size: 3rem;
      margin: 0;
    }
  }
`;
