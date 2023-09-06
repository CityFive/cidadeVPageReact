export interface SocialInfo {
  instagramUrl?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  spotifyPlaylist?: string;
  twitterUrl?: string;
}

export interface Pastor {
  imageUrl: string;
  fullName: string;
  title: string;
  description: string;
  social: SocialInfo;
}

export const data = {
  instagramPosts: [
    "/images/gallery1.jpeg",
    "/images/gallery2.jpeg",
    "/images/gallery3.jpeg",
    "/images/gallery4.jpeg",
    "/images/gallery5.jpeg",
    "/images/gallery6.jpeg",
    "/images/gallery7.jpeg",
    "/images/gallery8.jpeg",
    "/images/gallery9.jpeg",
  ],
  social: {
    instagramUrl: "https://www.instagram.com/cidade.cinco",
    youtubeUrl: "https://www.youtube.com/channel/UCA5eDWACcuOepN3zPH8mx9A",
    spotifyUrl:
      "https://open.spotify.com/playlist/213Odn5L2T4OpwW3PSoWqv?si=13ff6d6f9746409b",
    spotifyPlaylist:
      "https://open.spotify.com/playlist/213Odn5L2T4OpwW3PSoWqv?si=13ff6d6f9746409b",
  } as SocialInfo,
  blog: {
    authors: [],
    posts: [],
  },
  media: {
    photosGallery: [],
  },
  churchInfo: {
    pastors: [
      {
        imageUrl: "/images/fabio.png",
        fullName: "Fabio Leal",
        title: "Pastor Titular",
        description:
          "Casado com a Anielle e pai do Martin. Estuda teologia no Seminário Martin Bucer e já atuou na plantação de duas igrejas locais. É pastor titular da Igreja Cidade Cinco.",
        social: {
          instagramUrl: 'https://instagram.com/user/sergiogns'
        },
      },
      {
        imageUrl: "/images/matheus.png",
        fullName: "Matheus Odilon",
        title: "Presbítero",
        description:
          "Casado com a Bárbara e pai da Amélia. Estuda teologia no Seminário Martin Bucer e trabalha como Desenvolvedor de Software. É pastor auxiliar na Cidade Cinco.",
        social: {
          instagramUrl: 'https://instagram.com/user/sergiogns'
        },
      },
      {
        imageUrl: "/images/sergio.png",
        fullName: "Sérgio Sousa",
        title: "Presbítero",
        description:
          "Casado com a Camila e pai da Antonella e da Gabriella. Estuda teologia no Seminário Martin Bucer e trabalha como Gerente de Produto. É pastor auxiliar na Cidade Cinco.",
        social: {
          instagramUrl: 'https://instagram.com/user/sergiogns'
        },
      },
      {
        imageUrl: "/images/sergio.png",
        fullName: "Luiz Felipe",
        title: "Presbítero",
        description:
          "Casado com a Kemilly. Estuda teologia no Seminário Martin Bucer e trabalha como Desenvolvedor de Software. É pastor auxiliar na Cidade Cinco.",
        social: {
          instagramUrl: 'https://instagram.com/user/sergiogns'
        },
      },
    ] as Pastor[],
    offerPix: "42.771.926/0001-20",
    contact: "",
    address: {},
    service: {
      hour: "16:00",
      day: "domingo",
      where: "Seminario Teólogico Servo de Cristo",
    },
  },
};
