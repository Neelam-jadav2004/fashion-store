import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header
      className={`shadow-md ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 relative">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-pink-600">
          Fashion Store
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <ul
          className={`
            ${menuOpen ? "flex" : "hidden"}
            md:flex
            flex-col md:flex-row
            absolute md:static
            top-16 left-0
            w-full md:w-auto
            ${
              darkMode
                ? "bg-black"
                : "bg-white"
            }
            md:bg-transparent
            p-5 md:p-0
            gap-6
            text-lg
            font-medium
            items-center
            z-50
          `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-pink-500 text-white px-4 py-2 rounded-full"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* Wishlist */}
          <div
            onClick={() => navigate("/wishlist")}
            className="relative cursor-pointer"
          >
            <FaHeart className="text-3xl text-red-500" />

            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
              {wishlistItems.length}
            </span>
          </div>

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <FiShoppingCart className="text-3xl" />

            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </div>

          {/* Logout */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}

        </div>

      </nav>
    </header>
  );
};

export default Navbar;