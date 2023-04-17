import React, { useState } from "react";
import { SocialInfo } from "../../api/data";
import { NeutralColors } from "../../foundation/tokens";
import Grid from "../Grid";
import Typography from "../Typography";
import {
  ButtonNavLink,
  ButttonsMenuMobile,
  HamburgerMenu,
  HeaderContainer,
  HeaderIconList,
  HeaderMobileMenu,
  HeaderNavLink,
  HeaderNavList,
  MobileCloseIcon,
  MobileMenu,
  MobileMenuLink,
} from "./Header.styles";

import instagramSvg from "../../components/Icons/assets/instagram.svg";
import burgerSvg from "../../components/Icons/assets/burger.svg";
import spotifySvg from "../../components/Icons/assets/spotify.svg";
import youtubeSvg from "../../components/Icons/assets/youtube.svg";
import { X, XCircle } from "phosphor-react";

interface Props {
  social: SocialInfo;
}

const Header: React.FC<Props> = ({ social }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Grid.Container>
        <section>
          <div>
            <Typography.Subtitle color={NeutralColors.lightest}>
              Cidade Cinco
            </Typography.Subtitle>
          </div>
          <div>
            <HeaderNavList>
              <HeaderNavLink href="#confissao">Confissão De Fé</HeaderNavLink>
              <HeaderNavLink href="#sobre">Nossa História</HeaderNavLink>
              <HeaderNavLink href="#atividades">Atividades</HeaderNavLink>
              <HeaderNavLink href="#galeria">Equipe Pastoral</HeaderNavLink>
              <ButtonNavLink href="#galeria">Contribuir</ButtonNavLink>
              <HeaderIconList>
                <a href={social.instagramUrl} target="_blank">
                  <img src={instagramSvg} />
                </a>
                <a href={social.youtubeUrl} target="_blank">
                  <img src={youtubeSvg} />
                </a>
                <a href={social.spotifyUrl} target="_blank">
                  <img src={spotifySvg} />
                </a>
              </HeaderIconList>
            </HeaderNavList>
          </div>

          <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            <img src={burgerSvg} />
          </HamburgerMenu>
          {menuOpen && (
            <MobileMenu>
              <HeaderMobileMenu>
                <Typography.Subtitle color={NeutralColors.lightest}>
                  Cidade Cinco
                </Typography.Subtitle>
                <MobileCloseIcon onClick={() => setMenuOpen(false)}>
                  <X size={32} weight="fill" color="white" />
                </MobileCloseIcon>
              </HeaderMobileMenu>
              <MobileMenuLink>
                <HeaderNavLink
                  href="#confissao"
                  onClick={() => setMenuOpen(false)}
                >
                  Confissão de Fé
                </HeaderNavLink>
              </MobileMenuLink>

              <MobileMenuLink>
                <HeaderNavLink href="#sobre" onClick={() => setMenuOpen(false)}>
                  Nossa história
                </HeaderNavLink>
              </MobileMenuLink>

              <MobileMenuLink>
                <HeaderNavLink href="#sobre" onClick={() => setMenuOpen(false)}>
                  Atividades
                </HeaderNavLink>
              </MobileMenuLink>

              <MobileMenuLink>
                <HeaderNavLink
                  href="#galeria"
                  onClick={() => setMenuOpen(false)}
                >
                  Galeria de Fotos
                </HeaderNavLink>
              </MobileMenuLink>

              <MobileMenuLink>
                <HeaderNavLink
                  href="#seminaristas"
                  onClick={() => setMenuOpen(false)}
                >
                  Equipe pastoral
                </HeaderNavLink>
              </MobileMenuLink>
              <ButttonsMenuMobile>
                <HeaderIconList>
                  <a href={social.instagramUrl} target="_blank">
                    <img src={instagramSvg} />
                  </a>
                  <a href={social.youtubeUrl} target="_blank">
                    <img src={youtubeSvg} />
                  </a>
                  <a href={social.spotifyUrl} target="_blank">
                    <img src={spotifySvg} />
                  </a>
                </HeaderIconList>
                <ButtonNavLink href="#galeria">Contribuir</ButtonNavLink>
              </ButttonsMenuMobile>
            </MobileMenu>
          )}
        </section>
      </Grid.Container>
    </HeaderContainer>
  );
};

export default Header;
