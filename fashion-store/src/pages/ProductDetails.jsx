import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Products from "../data/Products";
import ProductCard from "../ProductCard/ProductCard";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();

  const product = Products.find(
    (item) => item.id === Number(id)
  );

  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const [selectedSize, setSelectedSize] =
    useState("M");

  const [selectedColor, setSelectedColor] =
    useState("Black");

  const relatedProducts = Products.filter(
    (item) => item.id !== product.id
  ).slice(0, 4);

  const { addToCart } = useContext(CartContext);

  return (
    <section className="min-h-screen py-20">

      {/* Product Details */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-3xl shadow-lg w-full"
          />
        </div>

        {/* Product Content */}
        <div>

          <h1 className="text-5xl font-bold mb-6">
            {product.title}
          </h1>

          <p className="text-pink-500 text-3xl font-bold mb-6">
            ${product.price}
          </p>

          <p className="text-gray-300 text-lg mb-8">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">

            <h3 className="text-xl font-semibold mb-3">
              Select Size
            </h3>

            <div className="flex gap-3">

              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-lg border ${
                    selectedSize === size
                      ? "bg-pink-600 text-white border-pink-600"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* Color Selection */}
          <div className="mb-6">

            <h3 className="text-xl font-semibold mb-3">
              Select Color
            </h3>

            <div className="flex gap-3">

              {["Black", "White", "Blue", "Pink"].map(
                (color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColor(color)
                    }
                    className={`px-5 py-2 rounded-lg border ${
                      selectedColor === color
                        ? "bg-pink-600 text-white border-pink-600"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                )
              )}

            </div>

          </div>

          {/* Selected Options */}
          <p className="mb-6 text-green-400 text-lg">
            Selected: {selectedSize} | {selectedColor}
          </p>

         <button
  onClick={() => {
    addToCart(product);

    toast.success(
      `${product.title} added to cart 🛒`
    );
  }}
  className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
>
  Add To Cart
</button>

        </div>

      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-6 mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Customer Reviews
        </h2>

        <input
          type="text"
          placeholder="Write a review..."
          value={review}
          onChange={(e) =>
            setReview(e.target.value)
          }
          className="w-full p-3 rounded-lg text-black"
        />

        <button
          onClick={() => {
            if (review.trim()) {
              setReviews([
                ...reviews,
                review,
              ]);
              setReview("");
            }
          }}
          className="mt-3 bg-pink-600 text-white px-5 py-2 rounded-lg"
        >
          Submit Review
        </button>

        <div className="mt-5">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-3 rounded-lg mb-3"
            >
              ⭐⭐⭐⭐⭐ {item}
            </div>
          ))}

        </div>

      </div>

      {/* Related Products */}
      <div className="container mx-auto px-6 mt-20">

        <h2 className="text-3xl font-bold mb-8">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;