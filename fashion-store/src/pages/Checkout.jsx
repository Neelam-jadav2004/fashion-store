import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

const handleOrder = async (e) => {
  e.preventDefault();

  try {
    // Razorpay order create
    const orderResponse = await fetch(
      "https://fashion-store-c5qw.onrender.com/api/create-razorpay-order/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalAmount,
        }),
      }
    );

    const orderData = await orderResponse.json();
    console.log("ORDER DATA:", orderData);

    const options = {
      key: "rzp_test_T2K9UqA979FtxZ", // apni rzp_test wali key id

      amount: orderData.amount,
      currency: orderData.currency,
      name: "Fashion Store",
      description: "Order Payment",

      order_id: orderData.id,

      handler: async function (response) {
        // Payment successful

        await fetch(
        "https://fashion-store-c5qw.onrender.com/api/create-order/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              address: formData.address,
              amount: totalAmount,
            }),
          }
        );

        navigate("/order-success");
      },

      prefill: {
        name: formData.name,
        email: formData.email,
      },

      theme: {
        color: "#db2777",
      },
    };
    console.log("Razorpay Opening...");
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

  } catch (error) {
    console.log(error);
    alert("Payment Failed");
  }
};

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
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) =>
              setFormData({
                ...formData,
                pincode: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-500"
          >
            Place Order ₹{totalAmount}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;