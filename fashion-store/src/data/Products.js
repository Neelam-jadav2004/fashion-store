import jackets from "../assets/jackets.jpg";
import hoodies from "../assets/hoodies.jpg";
import casualoutfit from "../assets/casualoutfit.jpg";
import fashionware from "../assets/fashionware.jpg";  

const Products = [
  {
    id: 1,
    title: "Stylish Jacket",
    price: 120,
    image: jackets,
    category: "Jacket",
    rating:4.5,
    stock: 15,
    description: "Premium stylish jacket for modern fashion.",
  },

  {
    id: 2,
    title: "Modern Hoodie",
    price: 90,
    image: hoodies,
    category: "Hoodie",
    rating:4,
    stock: 3,
    description: "Comfortable hoodie with trendy design.",
  },

  {
    id: 3,
    title: "Casual Outfit",
    price: 150,
    image: casualoutfit,
    category: "Casual",
    rating:5,
    stock: 15,
    description: "Perfect casual outfit for daily wear.",
  },

  {
    id: 4,
    title: "Fashion Wear",
    price: 200,
    image: fashionware,
    category: "Fashion",
    rating:4.8,
    stock: 0,
    description: "Luxury fashion wear collection.",
  },
];

export default Products;