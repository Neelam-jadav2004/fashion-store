import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fashion-store-c5qw.onrender.com/api/orders/")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="min-h-screen py-20 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Orders
      </h1>

      <div className="max-w-4xl mx-auto">
        {orders.length === 0 ? (
          <p className="text-center">
            No Orders Found
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-xl p-5 mb-4"
            >
              <h2 className="font-bold">
                Order #{order.id}
              </h2>

              <p>Name: {order.name}</p>

              <p>Email: {order.email}</p>

              <p>
                Amount: ₹{order.amount}
              </p>

              <p>
                Date: {order.created_at}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Orders;