import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];
  const navigate = useNavigate();

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

            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow border border-gray-200"
              >

                <h2
                  style={{ color: "#111827" }}
                  className="font-bold text-2xl mb-2"
                >
                  {order.title}
                </h2>

                <p className="text-green-600 font-bold text-lg">
                  ${order.price}
                </p>

              </div>
            ))}


          </div>
        )}
        <button
  onClick={() => navigate("/track-order")}
  className="bg-pink-600 text-white px-5 py-2 rounded-lg"
>
  Track Order
</button>

      </div>

    </section>
  );
};

export default MyOrders;