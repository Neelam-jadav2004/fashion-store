import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Checkout = () => {
  const navigate = useNavigate();

  const handleOrder = (e) => {
  
  e.preventDefault();
    console.log("Cart Items:", cartItems);

  const existingOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const newOrders = [
    ...existingOrders,
    ...cartItems,
  ];

  localStorage.setItem(
    "orders",
    JSON.stringify(newOrders)
  );

  navigate("/order-success");
};
const { cartItems } =
  useContext(CartContext);
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Checkout
        </h1>

        <form onSubmit={handleOrder} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Pincode"
            className="w-full border p-3 rounded-lg"
          />

         <button
         type="submit"
         className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-500"
         >
         Place Order
         </button>

        </form>

      </div>
    </section>
  );
};

export default Checkout;