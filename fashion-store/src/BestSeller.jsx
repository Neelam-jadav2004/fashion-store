import ProductCard from "./ProductCard/ProductCard";
import products from "./data/Products";

const BestSeller = () => {

  const bestProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          🔥 Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {bestProducts.map((product) => (
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

export default BestSeller;