import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../data/Products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState("All");

  // Filter Products
  // Filter Products
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    product.category === category;

  const matchesPrice =
    priceRange === "All" ||
    (priceRange === "0-50" &&
      product.price <= 50) ||
    (priceRange === "50-100" &&
      product.price > 50 &&
      product.price <= 100) ||
    (priceRange === "100+" &&
      product.price > 100);

  return (
    matchesSearch &&
    matchesCategory &&
    matchesPrice
  );
});

  // Sort Products
  const sortedProducts = [...filteredProducts];

  if (sortOption === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "a-z") {
    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">
            Trending Products
          </h1>

          <p className="text-gray-600">
            Discover our latest fashion collection
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[400px] px-5 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setCategory("All")}
            className="bg-black text-white px-5 py-2 rounded-full"
          >
            All
          </button>

          <button
            onClick={() => setCategory("Jacket")}
            className="bg-pink-500 text-white px-5 py-2 rounded-full"
          >
            Jackets
          </button>

          <button
            onClick={() => setCategory("Hoodie")}
            className="bg-pink-500 text-white px-5 py-2 rounded-full"
          >
            Hoodies
          </button>

          <button
            onClick={() => setCategory("Casual")}
            className="bg-pink-500 text-white px-5 py-2 rounded-full"
          >
            Casual
          </button>

          <button
            onClick={() => setCategory("Fashion")}
            className="bg-pink-500 text-white px-5 py-2 rounded-full"
          >
            Fashion
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="">Sort Products</option>
            <option value="low-high">
              Price: Low to High
            </option>
            <option value="high-low">
              Price: High to Low
            </option>
            <option value="a-z">
              Name: A to Z
            </option>
          </select>
        </div>

        <div className="flex justify-center mb-8">
  <select
    value={priceRange}
    onChange={(e) =>
      setPriceRange(e.target.value)
    }
    className="border px-4 py-2 rounded-lg"
  >
    <option value="All">
      All Prices
    </option>

    <option value="0-50">
      Under $50
    </option>

    <option value="50-100">
      $50 - $100
    </option>

    <option value="100+">
      Above $100
    </option>
  </select>
</div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;