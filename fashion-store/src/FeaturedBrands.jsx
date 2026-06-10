import nike from "./assets/nike.jpg";
import adidas from "./assets/adidas.jpg";
import puma from "./assets/puma.jpg";
import zara2 from "./assets/zara2.jpg";
import hm from "./assets/hm.jpg";

const FeaturedBrands = () => {
  const brands = [
    { name: "Nike", image: nike },
    { name: "Adidas", image: adidas },
    { name: "Puma", image: puma },
    { name: "Zara", image: zara2 },
    { name: "H&M", image: hm },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 mx-auto object-contain"
              />

              <h3 className="text-center mt-4 font-bold text-lg">
                {brand.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedBrands;