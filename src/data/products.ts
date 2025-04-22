import { Product } from '../types';
import modele1 from '../assets/modele 1.png';
import modele2 from '../assets/modele 2.png';


export const products: Product[] = [
  {
    id: 1,
    name: "Bracelet simple",
    category: "bracelet",
    price: 2500,
    description: "Made in Mada",
    imageUrl: modele1,
    featured: true,
    available: true
  },
  {
    id: 2,
    name: "Woven Pattern Bracelet en V",
    category: "bracelet",
    price: 4000,
    description: "Made in Mada",
    imageUrl: modele2,
    featured: true,
    available: true
  },
  
 
];