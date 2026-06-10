import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const { wishlistItems, toggleWishlist } =
    useContext(WishlistContext);

  const isInWishlist = wishlistItems.find(
    (item) => item.id === product.id
  );

  return (

    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
    >

      {/* Wishlist Icon */}
      <div className="absolute top-4 right-4 z-10">

        <FaHeart
  onClick={(e) => {
    e.stopPropagation();

    if (isInWishlist) {
      toggleWishlist(product);
      toast.info("Removed from Wishlist 💔");
    } else {
      toggleWishlist(product);
      toast.success("Added to Wishlist ❤️");
    }
  }}
  className={`text-3xl cursor-pointer ${
    isInWishlist
      ? "text-red-500"
      : "text-white"
  }`}
/>

      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover"
      />

      {/* Product Info */}
      <div className="p-5">

        <h2 className="text-xl font-semibold mb-2">
          {product.title}
        </h2>

        {/* Rating */}
        <p className="text-yellow-500 text-lg mb-2">
          {"⭐".repeat(Math.floor(product.rating || 4))}
        </p>

        <p className="text-gray-500 text-sm">
  Rating: {product.rating}/5
</p>

        <p className="text-pink-600 font-bold text-lg mb-4">
          ${product.price}
        </p>

        {product.stock > 5 ? (
  <p className="text-green-600 font-semibold">
    In Stock
  </p>
) : product.stock > 0 ? (
  <p className="text-yellow-500 font-semibold">
    Low Stock
  </p>
) : (
  <p className="text-red-600 font-semibold">
    Out of Stock
  </p>
)}

        <button
  onClick={(e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.title} added to cart 🛒`);
  }}
  disabled={product.stock === 0}
  className={`w-full py-2 rounded-full text-white ${
    product.stock === 0
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-pink-600 hover:bg-pink-700"
  }`}
>
  {product.stock === 0
    ? "Out of Stock"
    : "Add To Cart"}
</button>

      </div>

    </div>
  );
};

export default ProductCard;