import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
   name: "Red Chief",
    price: "5000",
   
    categoryName: "Boots",
  },
  {
    _id: uuid(),
   name: "Air Max",
    price: "3000",
    img: 'https://m.media-amazon.com/images/I/81opGKIBKbL._UX500_.jpg',
    categoryName: "Formal",
  },
  {
    _id: uuid(),
    name: "adidas",
    
    price: "1000",
    img: 'https://m.media-amazon.com/images/I/81opGKIBKbL._UX500_.jpg',
    categoryName: "Formal",
    
  },
  {
    _id: uuid(),
    name: "Lee Cooper",
    price: "1000",
    img: 'https://images.pexels.com/photos/2529147/pexels-ph…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categoryName: "Sport",
  },
];
