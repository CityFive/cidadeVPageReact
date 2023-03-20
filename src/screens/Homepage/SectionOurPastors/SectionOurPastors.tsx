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
const deacons = data.churchInfo.deacons;

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
                        title={pastor.title}
                        description={pastor.description}
                      />
                    </ExternalStylingProfileCard>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </CardsContainer>
          <h4>Diáconos da Cidade Cinco</h4>
          <CardsContainer>
            <Swiper>
              {deacons.map((deacon, i) => {
                return (
                  <SwiperSlide>
                    <ExternalStylingProfileCard>
                      <ProfileCard
                        key={i}
                        id={i}
                        imageUrl={deacon.imageUrl}
                        name={deacon.fullName}
                        title={deacon.title}
                        description={deacon.description}
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
          <h3>EQUIPE PASTORAL</h3>
          <h2>
            Somos liderados por <br /> um corpo de presbíteros e diáconos.
          </h2>
        </SectionTextOurPastors>
        <h4>Presbitério da Cidade Cinco</h4>
        <CardsContainer>
          {pastors.map((pastor, i) => {
            return (
              <ProfileCard
                key={i}
                id={i}
                imageUrl={pastor.imageUrl}
                name={pastor.fullName}
                title={pastor.title}
                description={pastor.description}
              ></ProfileCard>
            );
          })}
        </CardsContainer>
        <h4>Diáconos da Cidade Cinco</h4>
        <CardsContainer>
          {deacons.map((deacon, i) => {
            return (
              <ProfileCard
                key={i}
                id={i}
                imageUrl={deacon.imageUrl}
                name={deacon.fullName}
                title={deacon.title}
                description={deacon.description}
              ></ProfileCard>
            );
          })}
        </CardsContainer>
      </SectionOurPastorsContainerDesktop>
    </>
  );
};

export default SectionOurPastors;
