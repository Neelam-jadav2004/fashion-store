import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);

const {
cartItems,
increaseQty,
decreaseQty,
removeItem,
} = useContext(CartContext);

const navigate = useNavigate();

// Total Price
const totalPrice = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const finalPrice = totalPrice - discount;

const applyCoupon = () => {
if (coupon === "SAVE10") {
setDiscount(totalPrice * 0.1);
} else if (coupon === "SAVE20") {
setDiscount(totalPrice * 0.2);
} else {
alert("Invalid Coupon");
}
};

return ( 
<section className="min-h-screen py-20">
  <div className="container mx-auto px-6">

    <h1 className="text-5xl font-bold mb-10">
      Shopping Cart
    </h1>

    {cartItems.length === 0 ? (
      <h2 className="text-2xl text-gray-400">
        Your cart is empty 🛒
      </h2>
    ) : (
      <div className="space-y-6">

        {cartItems.map((item, index) => (
          <div
            key={index}
            className="border p-5 rounded-2xl flex items-center justify-between flex-col md:flex-row gap-5"
          >
            <div className="flex items-center gap-5">

              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-xl"
              />

              <div>
                <h2 className="text-2xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-pink-500 text-xl mt-2">
                  ${item.price}
                </p>

                <div className="flex items-center gap-4 mt-4">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="border px-4 py-2 rounded-lg"
                  >
                    -
                  </button>

                  <span className="text-xl">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-700 px-4 py-2 rounded-lg"
                  >
                    +
                  </button>

                </div>
              </div>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 px-5 py-2 rounded-full hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Coupon Section */}
        <div className="flex gap-3 justify-end mb-5">

          <input
            type="text"
            placeholder="Enter Coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border p-3 rounded-lg text-black"
          />

          <button
            onClick={applyCoupon}
            className="bg-green-600 px-5 py-3 rounded-lg"
          >
            Apply
          </button>

        </div>

        {/* Total Section */}
        <div className="text-right mt-10">

          <h3 className="text-xl text-green-400 mb-2">
            Discount: ${discount.toFixed(2)}
          </h3>

          <h2 className="text-4xl font-bold mb-5">
            Total: ${finalPrice.toFixed(2)}
          </h2>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-pink-600 px-8 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Checkout
          </button>

        </div>

      </div>
    )}

  </div>
</section>


);
};

export default Cart;
