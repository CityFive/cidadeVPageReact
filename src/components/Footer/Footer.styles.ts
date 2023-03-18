import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${BrandColors.colorBrand01};
  @media ${MediaQueries.Medium} {
    flex-direction: row;
    height: 100px;
    width: 100%;
  }
`;
export const FooterContent = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  color: ${NeutralColors.lightest};
  align-items: center;
  text-align: center;

  @media ${MediaQueries.Medium} {
    flex-direction: row;
    width: 1300px;
    height: 35px;
    justify-content: space-between;
    padding: 35px 32px;
    p {
      font-size: 0.875rem;
      margin: 0;
      padding: 0;
    }
  }
`;
