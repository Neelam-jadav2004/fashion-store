import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="container mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500 mb-4">
              Fashion Store
            </h2>

            <p className="text-gray-400 leading-7">
              Discover the latest fashion trends,
              premium collections and stylish outfits
              for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Shop</li>
              <li>Wishlist</li>
              <li>Cart</li>
              <li>Profile</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe for latest offers and fashion updates.
            </p>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded-lg text-black mb-3"
            />

            <button className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-lg">
              Subscribe
            </button>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12 text-2xl">

          <FaFacebookF className="cursor-pointer hover:text-pink-500" />

          <FaInstagram className="cursor-pointer hover:text-pink-500" />

          <FaTwitter className="cursor-pointer hover:text-pink-500" />

          <FaYoutube className="cursor-pointer hover:text-pink-500" />

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">

          © 2026 Fashion Store. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;