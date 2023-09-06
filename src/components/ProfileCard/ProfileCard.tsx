import React from "react";
import { CardLayout } from "./ProfileCard.styles";
import instagramSvgBlack from '../../components/Icons/assets/instagram-black.svg';
import { SocialInfo } from "../../api/data";

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  social: SocialInfo;
}

const ProfileCard = ({ name, description, imageUrl, social }: Props) => {
  return (
    <CardLayout>
      <img src={imageUrl} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <a href={social.instagramUrl} target="_blank">
        <img src={instagramSvgBlack} alt="logo instagram" />
      </a>
    </CardLayout>
  );
};

export default ProfileCard
