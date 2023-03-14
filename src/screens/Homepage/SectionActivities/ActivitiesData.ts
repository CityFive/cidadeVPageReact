interface Activity {
  id: number;
  title: string;
  text: string;
  buttonContent?: string;
  imageUrl: string;
}
export const ActivitiesData: Array<Activity> = [
  {
    id: 0,
    title: "Cultos dominicais",
    text: "Todos os domingos às 10:30 da manhã no Teatro Comedy Sampa. Endereço: R. Domingos de Morais, 348 - Vila Mariana, São Paulo - SP, 04010-000",
    imageUrl:
      "https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",
  },
  {
    id: 1,
    title: "Grupos de Edificação",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    buttonContent: "Mais informações",
    imageUrl:
      "https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",
  },
  {
    id: 2,
    title: "Discipulado",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    buttonContent: "Mais informações",
    imageUrl:
      "https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",
  },
  {
    id: 3,
    title: "Classe de Membresia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    buttonContent: "Mais informações",
    imageUrl:
      "https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",
  },
];
