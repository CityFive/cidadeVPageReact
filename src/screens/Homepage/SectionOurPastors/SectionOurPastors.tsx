import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../../api/data";
import ProfileCard from "../../../components/ProfileCard";

import {
  CardsContainer,
  ContainerOurPastors,
  ExternalStylingProfileCard,
  SectionOurPastorsContainerDesktop,
  SectionOurPastorsContainerMobile,
  SectionTextOurPastors,
} from "./SectionOurPastors.styles";

const pastors = data.churchInfo.pastors;

const SectionOurPastors = () => {
  return (
    <>
      <SectionOurPastorsContainerMobile id="atividades">
        <ContainerOurPastors>
          <SectionTextOurPastors>
            <h3>EQUIPE PASTORAL</h3>
            <h2>
              Somos liderados por <br /> um corpo de presbíteros e diáconos.
            </h2>
          </SectionTextOurPastors>
          <h4>Presbitério da Cidade Cinco</h4>
          <CardsContainer>
            <Swiper>
              {pastors.map((pastor, i) => {
                return (
                  <SwiperSlide>
                    <ExternalStylingProfileCard>
                      <ProfileCard
                        key={i}
                        id={i}
                        imageUrl={pastor.imageUrl}
                        name={pastor.fullName}
                        description={pastor.description}
                        social={pastor.social}
                      />
                    </ExternalStylingProfileCard>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </CardsContainer>
        </ContainerOurPastors>
      </SectionOurPastorsContainerMobile>

      <SectionOurPastorsContainerDesktop id="atividades">
        <SectionTextOurPastors>
          <h1>Presbitério da Cidade Cinco</h1>
          <p>
            Cremos que o modelo de governo de igreja mais saudável é o que conta com uma pluralidade de   presbíteros. Portanto, somos liderados por quatro pastores que cuidam das diferentes áreas da igreja.
          </p>
        </SectionTextOurPastors>
        <CardsContainer>
          {pastors.map((pastor, i) => {
            return (
              <ProfileCard
                key={i}
                id={i}
                imageUrl={pastor.imageUrl}
                name={pastor.fullName}
                description={pastor.description}
                social={pastor.social}
              ></ProfileCard>
            );
          })}
        </CardsContainer>
      </SectionOurPastorsContainerDesktop>
    </>
  );
};

export default SectionOurPastors;
