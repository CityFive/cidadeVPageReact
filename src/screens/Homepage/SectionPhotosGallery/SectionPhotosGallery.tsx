import ButtonSecondary from "../../../components/ButtonSecondary";
import {
  GalleryItem,
  GalleryList,
  MobileCoverImage,
  SectionGalleryContainer,
  SectionTextGallery
} from "./SectionPhotosGallery.styles";

const SectionsPhotosGallery = ({ instagramPosts }: any) => {
  return (
    <SectionGalleryContainer>
      <MobileCoverImage src={instagramPosts[5]}/>
      <SectionTextGallery>
        <h3>GALERIA DE FOTOS</h3>
        <h2>Os tesouros da <br /> Cidade Cinco</h2>
      </SectionTextGallery>
      <GalleryList>
        {instagramPosts.map((post: string, i: number) => {
          return (
            <GalleryItem key={i}>
              <img src={post} />
            </GalleryItem>
          );
        })}
      </GalleryList>
      <ButtonSecondary>Acessar Galeria</ButtonSecondary>
    </SectionGalleryContainer>
  );
};

export default SectionsPhotosGallery;