type Tproductdata = {
  image: string;
  title: string;
  description: string;
  havingLearnMoreBtn: boolean;
  havingBuyBtn: boolean;
};

export const Dataproduct: Tproductdata[] = [
  {
    image: "/banner3.png",
    title: "this is title from banner3",
    description: "this is description from title 3",
    havingLearnMoreBtn: true,
    havingBuyBtn: false,
  },
  {
    image: "/banner4.png",
    title: "this is title from banner4",
    description: "this is description from title 4",
    havingLearnMoreBtn: true,
    havingBuyBtn: false,
  },
];
