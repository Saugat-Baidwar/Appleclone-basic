type TProduct = {
  image: string;
  title: string;
  description: string;
  havingLearnMoreBtn: boolean;
  havingBuyBtn: boolean;
};

// type TProducts = {
//   firstProduct: TProduct;
//   secondProduct: TProduct;
// };

export const product: TProduct[] = [
  {
    image: "/banner1.png",
    title: "this is title from banner3",
    description: "this is description from title 3",
    havingLearnMoreBtn: true,
    havingBuyBtn: false,
  },
  {
    image: "/banner2.png",
    title: "this is title from banner4",
    description: "i am description from banner 4",
    havingLearnMoreBtn: true,
    havingBuyBtn: true,
  },
  // {
  //   image: "banner5.png",
  //   title: "this is title from banner4",
  //   description: "i am description from banner 5",
  //   havingLearnMoreBtn: true,
  //   havingBuyBtn: true,
  // },
];

// const ProductsData: TProducts[] = [];

// type TData1 = {
//   image1: string;

//   title: string;
//   description: string;
// };

// export const products: TData1[] = [
//   {
//     image1: "banner3.png",

//     title: "hello i am banner 3",
//     description: "hello i am description",
//   },
//   {
//     image1: "banner4.png",

//     title: "hello i am from banner 4",
//     description: "hello i am  from description 4 ",
//   },
//   {
//     image1: "banner5.png",
//     title: "hello i am banner five",
//     description: "hello i am from description 5",
//   },
//   {
//     image: "banner5.png",
//     title: "hello i am from banner6",
//     description: "hello i am from description 5",
//   },
// ];
