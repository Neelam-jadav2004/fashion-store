import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import products from "../data/Products";
// import jeans from "../assets/jeans.jpg";
// import jeans2 from "../assets/jeans2.jpg";
// import jeanswomen from "../assets/jeanswomen.jpg";
// import skirt from "../assets/skirt.jpg";
// import tshirt from "../assets/tshirt.jpg";
// import skirt2 from "../assets/skirt2.jpg";
// import tshirt1 from "../assets/tshirt1.jpg";
// import tshirt2 from "../assets/tshirt2.jpg";
// import man1 from "../assets/man1.jpg";
// import man2 from "../assets/man2.jpg";
// import kids1 from "../assets/kids1.jpg";
// import kids2 from "../assets/kids2.jpg";
// import kids3 from "../assets/kids3.jpg";
// import kids4 from "../assets/kids4.jpg";
// import kids5 from "../assets/kids5.jpg";
// import kids6 from "../assets/kids6.jpg";
// import kids7 from "../assets/kids7.jpg";
// import kids8 from "../assets/kids8.jpg";
// import kids9 from "../assets/kids9.jpg";
// import kids10 from "../assets/kids10.jpg";
// import shoes1 from "../assets/shoes1.jpg";
// import shoes2 from "../assets/shoes2.jpg";
// import shoes3 from "../assets/shoes3.jpg";
// import shoes4 from "../assets/shoes4.jpg";
// import shoes5 from "../assets/shoes5.jpg";
// import hills1 from "../assets/hills1.jpg";
// import hills2 from "../assets/hills2.jpg";
// import hills3 from "../assets/hills3.jpg";
// import hills4 from "../assets/hills4.jpg";
// import hills5 from "../assets/hills5.jpg";
const Products = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState("All");

  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "All";

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesPrice =
      priceRange === "All" ||
      (priceRange === "0-50" && product.price <= 50) ||
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