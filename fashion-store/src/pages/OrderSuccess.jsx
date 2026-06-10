import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[400px]">

        <h1 className="text-6xl mb-5">
          🎉
        </h1>

        <h2 className="text-4xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with us.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-pink-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-pink-700 transition"
        >
          Continue Shopping
        </Link>

      </div>

    </section>
  );
};

export default OrderSuccess;