import styled from "styled-components";
import { NeutralColors } from "../../foundation/tokens";

export const CardLayout = styled.div`
  width: 300px;
  height: 60vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${NeutralColors.lightest};
  color: ${NeutralColors.darkest};
  border-radius: 8px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  h2 {
    font-size: 1.25rem;
    padding: 10px 20px;
  }
  h3 {
    font-size: 1.125rem;
    color: ${NeutralColors.dark};
    font-weight: 100;
    padding: 0px 20px;
  }
  p {
    font-size: 1rem;
    padding: 0px 20px;
  }
  a {
    width: 20px;
    height: 20px;
  }
`;
