import React from "react";
import { BrandColors, NeutralColors } from "../../foundation/tokens";
import InstagramSVG from "./assets/Instagram.svg";
import SpotifySVG from "./assets/spotify.svg";
import YoutubeSVG from "./assets/youtube.svg";
import BurgerSVG from "./assets/burger.svg";
import TwitterSVG from "./assets/twitter.svg";
import ArrowRightSVG from "./assets/arrowright.svg";
import CopySVG from "./assets/copy.svg";

export type SVGIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export enum Icons {
  Instagram = "Instagram",
  Spotify = "spotify",
  Youtube = "youtube",
  Burger = "burger",
  ArrowRight = "arrow-right",
  Twitter = "twitter",
  Copy = 'copy'
}

type IIcons = { [key in Icons]: SVGIcon };

export const IconSVGs: IIcons = {
  [Icons.Instagram]: (props) => <InstagramSVG {...props} />,
  [Icons.Spotify]: (props) => <SpotifySVG {...props} />,
  [Icons.Youtube]: (props) => <YoutubeSVG {...props} />,
  [Icons.Burger]: (props) => <BurgerSVG {...props} />,
  [Icons.ArrowRight]: (props) => <ArrowRightSVG {...props} />,
  [Icons.Twitter]: (props) => <TwitterSVG {...props} />,
  [Icons.Copy]: (props) => <CopySVG {...props} />,
};

interface Props {
  icon: Icons;
  color: BrandColors | NeutralColors;
  size?: string;
}

const Icon = ({ icon, color, size }: Props) => {
  const IconElement = IconSVGs[icon];

  if (size) {
    return <IconElement fill={color} width={size} height={size} />;
  }

  return <IconElement fill={color} />;
};

export default Icon;
