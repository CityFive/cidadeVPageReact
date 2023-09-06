import styled from "styled-components";
import { NeutralColors } from "../../foundation/tokens";

export const CardLayout = styled.div`
  width: 300px;
  height: 70vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${NeutralColors.lightest};
  color: ${NeutralColors.darkest};
  border-radius: 8px;
  div {
    height: 30vh;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  h2 {
    font-size: 1.25rem;
    padding: 10px 20px;
  }
  p {
    font-size: 1rem;
    padding: 0px 20px;
    line-height: 27px;
  }
  a > img {
    width: 20px;
    height: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;
