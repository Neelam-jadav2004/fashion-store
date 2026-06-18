import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/orders/"
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-black">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <h2 className="text-gray-500 text-xl">
            No Orders Yet 📦
          </h2>
        ) : (
          <div className="space-y-5">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-5 rounded-xl shadow border border-gray-200"
              >
                <h2 className="font-bold text-xl text-black">
                  Order #{order.id}
                </h2>

                <p className="text-gray-700">
                  Name: {order.name}
                </p>

                <p className="text-gray-700">
                  Email: {order.email}
                </p>

                <p className="text-green-600 font-bold">
                  ₹{order.amount}
                </p>

                <p className="font-semibold mt-2">
                  Status:
                  <span className="text-pink-600 ml-2">
                    {order.status}
                  </span>
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {new Date(order.created_at).toLocaleString()}
                </p>

                <button
                  onClick={() =>
                    navigate(`/track-order/${order.id}`)
                  }
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg mt-4"
                >
                  Track Order
                </button>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default MyOrders; 
