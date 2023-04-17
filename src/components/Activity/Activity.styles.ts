import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, NeutralColors } from "../../foundation/tokens";


export const CardActivity = styled.div`
  width: 90%;
  height: 260px;
  background-color: ${BrandColors.colorBrand05};
  border-radius: 24px;

  display: flex;
  align-items: center;
  overflow: hidden;
  flex: 1;
  img {
    display: none;
  }

  @media ${MediaQueries.Medium} {
    width: 950px;
    height: 400px;
    border-radius: 24px 0px 0px 0px;


    img {
      display: block;
      width: 500px;
      height: 400px;
      background-size: 500px 150px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  gap: 10px;
  flex: 1;
  margin: 48px;

  h3 {
    color: ${NeutralColors.darkest};
    font-size: 1.5rem;
    margin-top: 0;
  }
  p {
    color: ${NeutralColors.darkest};
  }

  @media ${MediaQueries.Medium} {
    height: 300px;
    gap: 56px;

    h3 {
      color: ${NeutralColors.darkest};
      font-size: 2rem;
    }
    p {
      color: ${NeutralColors.darkest};
    }
  }
`;
