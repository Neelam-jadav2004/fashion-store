import { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState([]);

  // Add / Remove Wishlist
  const toggleWishlist = (product) => {

    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (exists) {

      const filteredItems = wishlistItems.filter(
        (item) => item.id !== product.id
      );

      setWishlistItems(filteredItems);

    } else {

      setWishlistItems([
        ...wishlistItems,
        product,
      ]);

    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;