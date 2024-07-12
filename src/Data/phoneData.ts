import { title } from "process";

type Tphone = {
  image: string;
  title: string;
  description: string;
  button1: string;
  button2: string;
};

export const phones: Tphone[] = [
  {
    image: "/iphone2.png",
    title: "iphone",
    description: "Unbelievably thin. Incredibly powerful.",
    button1: "Learn more",
    button2: "Buy",
  },
  {
    image: "/iphone3.png ",
    title: "iPad Pro",
    description: "Unbelievably thin. Incredibly powerful.",
    button1: "Learn more",
    button2: "Buy",
  },
  {
    image: "/macbook.png",
    title: "iPad Pro",
    description: "unbelievable thin",
    button1: "Learn more",
    button2: "Buy",
  },
];
