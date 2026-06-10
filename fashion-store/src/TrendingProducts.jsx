import products from "./data/Products";
import ProductCard from "./ProductCard/ProductCard";

const TrendingProducts = () => {
  const trending = products.slice(0, 4);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          🔥 Trending Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trending.map((product) => (
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

export default TrendingProducts;