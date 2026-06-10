import womens from "./assets/womens.jpg"
import men from "./assets/men.jpg"
import bags from "./assets/bags.jpg"
import footware from "./assets/footware.jpg"
import beautyproducts from "./assets/beautyproducts.jpg"
import accessories from "./assets/accessories.jpg"
const CategorySection = () => {
  const categories = [
   {
    title:"womens",
    image: womens,
   },
   {
    title:"men",
    image: men,
   },
   {
    title:"bags",
    image: bags,
   },
   {
    title:"footware",
    image: footware,
   },
   {
    title:"beautyproducts",
    image: beautyproducts,
   },
   {
    title:"accessories",
    image: accessories,
   },

  ];

  return (
       <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">
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

export default CategorySection;