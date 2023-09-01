import styled from "styled-components";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

const ButtonGrey = styled.button`
  width: 290px;
  padding: 24px;
  background-color: ${BrandColors.colorBrand01};
  color: ${NeutralColors.lightest};
  border: none;
  border-radius: 4px;
  font-family: "Proxima Nova";
  font-size: 18px;
  display: flex;
  align-items: center;
  gap:12px ;
  justify-content: center;
  cursor: pointer;

`;

export default ButtonGrey;
