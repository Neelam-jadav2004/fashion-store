const BrandSection = () => {
  const brands = [
    "ZARA",
    "H&M",
    "ONLY",
    "BIBA",
    "FOREVER 21",
    "W"
  ];

  return (
    <section className="py-16 bg-gray-100">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Trending Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-10 text-center text-2xl font-bold"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BrandSection;