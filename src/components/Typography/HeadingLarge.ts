import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, FontFamily, FontSize } from "../../foundation/tokens";

const HeadingLarge = styled.h1`
  font-size: ${FontSize.lg};
  letter-spacing: 0.1px;
  color: ${BrandColors.colorBrand01};
  font-family: ${FontFamily.FONT_FAMILY_01};
  line-height: 100%;
  margin:0;

  @media ${MediaQueries.Medium} {
    font-size: ${FontSize.xxl};
  }
`;


export default HeadingLarge;
