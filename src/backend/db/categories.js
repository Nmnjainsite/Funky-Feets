import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Boots",
    description:
      "Pure Leather Boots",
  },
  {
    _id: uuid(),
    categoryName: "Formal",
    description:
      "Hello",
  },
  {
    _id: uuid(),
    categoryName: "Fancy",
    description:
      "Hy",
  },
  {
    _id: uuid(),
    categoryName: "Sport",
    description:
      "Bye",
  },
];
