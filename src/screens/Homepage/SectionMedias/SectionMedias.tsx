import { SocialInfo } from "../../../api/data";
import {
  Container,
  ContainerImg,
  SectionMediasDesktop,
  SectionMediasMobile,
  SectionSpotify,
  SectionYoutube,
} from "./SectionMedias.styles";
import ButtonSecondary from "../../../components/ButtonSecondary";

interface Props {
  social: SocialInfo;
}

const SectionSpotifyPlaylist: React.FC<Props> = ({ social }) => {
  return (
    <>
      <SectionMediasDesktop>
        <SectionYoutube>
          <Container>
            <section>
              <div>
                <h3>PREGAÇÕES</h3>
                <h2>
                  Acesse as pregações <br /> realizadas em nossa igreja
                </h2>
              </div>
              <ButtonSecondary>Acessar canal no Youtube</ButtonSecondary>
            </section>
            <img
              src="/images/youtubechannel.png"
              alt="Picture of the author"
              width={343}
              height={400}
            />
          </Container>
        </SectionYoutube>
        <SectionSpotify>
          <Container>
            <>
              <img
                src="/images/spotify-playlist.png"
                alt="Picture of the author"
                width={343}
                height={400}
              />
            </>
            <section>
              <div>
                <h3>MÚSICAS</h3>
                <h2>
                  Ouça no Spotify as músicas <br /> que cantamos nos cultos
                </h2>
              </div>
              <ButtonSecondary>Acessar canal no Youtube</ButtonSecondary>
            </section>
          </Container>
        </SectionSpotify>
      </SectionMediasDesktop>

      <SectionMediasMobile>
        <SectionYoutube>
          <Container>
            <ContainerImg>
              <img
                src="/images/youtubechannel.png"
                alt="Picture of the author"
                width={343}
                height={400}
              />
            </ContainerImg>
            <section>
              <div>
                <h3>PREGAÇÕES</h3>
                <h2>
                  Acesse as pregações <br /> realizadas em nossa igreja
                </h2>
              </div>
              <ButtonSecondary>Acessar canal no Youtube</ButtonSecondary>
            </section>
          </Container>
        </SectionYoutube>
        <SectionSpotify>
          <Container>
            <ContainerImg>
              <img
                src="/images/spotify-playlist.png"
                alt="Picture of the author"
                width={343}
                height={400}
              />
            </ContainerImg>

            <section>
              <div>
                <h3>MÚSICAS</h3>
                <h2>
                  Ouça no Spotify as músicas <br /> que cantamos nos cultos
                </h2>
              </div>
              <ButtonSecondary>Acessar canal no Youtube</ButtonSecondary>
            </section>
          </Container>
        </SectionSpotify>
      </SectionMediasMobile>
    </>
  );
};

export default SectionSpotifyPlaylist;
