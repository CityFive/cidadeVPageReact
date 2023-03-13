import {
  GalleryItem,
  GalleryList,
  SectionGalleryContainer,
  SectionTextGallery,
} from "./SectionPhotosGallery.styles";

const SectionsPhotosGallery = ({ instagramPosts }: any) => {
  return (
    <SectionGalleryContainer>
      <SectionTextGallery>
        <h3>GALERIA DE FOTOS</h3>
        <h2>Os tesouros da Cidade Cinco</h2>
      </SectionTextGallery>
      <GalleryList>
        {instagramPosts.map((post: string, i: number) => {
          return (
            <GalleryItem key={i}>
              <img src={post}  />
            </GalleryItem>
          );
        })}
      </GalleryList>
    </SectionGalleryContainer>
  );
};

export default SectionsPhotosGallery;
