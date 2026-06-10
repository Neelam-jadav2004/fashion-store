import women from "./assets/womens.jpg";
import men from "./assets/men.jpg";
import bags from "./assets/bags.jpg";

const NewArrivals = () => {
  const arrivals = [
    {
      image: women,
      title: "Women's Collection",
    },
    {
      image: men,
      title: "Men's Fashion",
    },
    {
      image: bags,
      title: "Luxury Bags",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          New Arrivals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {arrivals.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                <h3 className="text-white text-3xl font-bold">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default NewArrivals;