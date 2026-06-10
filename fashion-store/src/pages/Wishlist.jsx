import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {

  const { wishlistItems, toggleWishlist } =
    useContext(WishlistContext);

  return (

  <section className="min-h-screen py-20">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          My Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (

          <h2 className="text-2xl text-gray-400">
            Wishlist is empty
          </h2>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {wishlistItems.map((item) => (

              <div
                key={item.id}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-pink-500 text-xl mb-5">
                    ${item.price}
                  </p>

                  <button
                    onClick={() => toggleWishlist(item)}
                    className="w-full bg-red-500 py-3 rounded-full hover:bg-red-600 transition"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default Wishlist;