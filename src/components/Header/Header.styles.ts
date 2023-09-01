import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

export const MobileMenuLink = styled.div`
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid ${BrandColors.colorBrand01};

  &:last-child {
    border: none;
  }
`;

export const MobileCloseIcon = styled.div`
  height: 100%;
  cursor: pointer;
  color: ${BrandColors.colorBrand02};
`;

export const MobileMenu = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;
  color: white;
  right: 0;
  top: 0;
  background-color: ${NeutralColors.darkest};
`;

export const HeaderMobileMenu = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
`;

export const ButttonsMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  gap: 60px;
`;

export const HeaderContainer = styled.header`
  height: 88px;
  width: 100%;
  background-color: ${NeutralColors.darkest};
  display: flex;
  align-items: center;
  justify-content: center;

  :first-child {
    display: flex;
    justify-content: space-between;
  }
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

export const HeaderNavLink = styled.a`
  width: 100%;
  color: ${NeutralColors.lightest};
  font-size: 18px;
  margin-right: 32px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;

  :last-child {
    margin-right: 0;
  }
`;

export const ButtonNavLink = styled.a`
  color: ${NeutralColors.darkest};
  background-color: ${NeutralColors.lightest};
  padding: 16px 32px;
  border-radius: 100px;
  font-size: 18px;
  margin-right: 32px;
  cursor: pointer;
  text-decoration: none;

  :last-child {
    margin-right: 0;
  }
`;

export const HeaderNavList = styled.div`
  display: none;
  align-items: center;

  @media ${MediaQueries.Medium} {
    display: flex;
  }
`;

export const HeaderIconList = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 24px;
    line-height: 0;

    :last-child {
      margin-right: 0;
    }
  }

`;

export const HamburgerMenu = styled.div`
  display: block;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;
