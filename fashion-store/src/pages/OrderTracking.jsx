import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderTracking = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const orderSteps = [
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
  ];

  useEffect(() => {
    axios
      .get(
        `https://fashion-store-c5qw.onrender.com/api/orders/${id}/`
      )
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const currentStep = order
    ? orderSteps.indexOf(order.status)
    : 0;

  return (
    <section className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Track Your Order
        </h1>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

          {order && (
            <>
              <p className="text-lg mb-2">
                <strong>Order ID:</strong> #{order.id}
              </p>

              <p className="text-lg mb-2">
                <strong>Name:</strong> {order.name}
              </p>

              <p className="text-lg mb-2">
                <strong>Amount:</strong> ₹{order.amount}
              </p>

              <p className="text-lg mb-8">
                <strong>Status:</strong>
                <span className="text-pink-600 font-bold ml-2">
                  {order.status}
                </span>
              </p>
            </>
          )}

          {orderSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center mb-6"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                  index <= currentStep
                    ? "bg-green-500"
                    : "bg-gray-400"
                }`}
              >
                ✓
              </div>

              <span className="ml-4 text-lg">
                {step}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OrderTracking;