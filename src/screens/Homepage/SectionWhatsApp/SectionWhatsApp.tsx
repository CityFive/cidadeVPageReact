import ButtonTertiary from "../../../components/ButtonTertiary";
import {
  ContainerDesktop,
  ContainerImg,
  ContainerMobile,
  SectionWhatsAppDesktop,
  SectionWhatsAppMobile,
} from "./SectionWhatsApp.styles";

const SectionSpotifyPlaylist = () => {
  return (
    <>
      <SectionWhatsAppDesktop>
        <ContainerDesktop>
          <img
            src="/images/spotify-playlist.png"
            alt="Picture of the author"
            width={343}
            height={400}
          />
          <section>
            <div>
              <h3>GRUPO DE WHATSAPP</h3>
              <h2>
                Fique por dentro das <br /> novidades da Cidade Cinco
              </h2>
            </div>
            <ButtonTertiary>Entrar no grupo de WhatsApp</ButtonTertiary>
          </section>
        </ContainerDesktop>
      </SectionWhatsAppDesktop>
      <SectionWhatsAppMobile>
        <ContainerMobile>
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
              <h3>GRUPO DE WHATSAPP</h3>
              <h2>
                Fique por dentro das <br /> novidades da Cidade Cinco
              </h2>
            </div>
            <ButtonTertiary>Entrar no grupo de WhatsApp</ButtonTertiary>
          </section>
        </ContainerMobile>
      </SectionWhatsAppMobile>
    </>
  );
};

export default SectionSpotifyPlaylist;
