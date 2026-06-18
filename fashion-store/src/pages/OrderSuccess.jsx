import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">

        <div className="text-7xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold text-green-600 mb-3">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-2">
          Your order has been placed successfully.
        </p>

        <p className="text-gray-500 text-sm mb-6">
          Thank you for shopping with Fashion Store.
        </p>

        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <p className="font-semibold text-green-700">
            ✔ Order Confirmed
          </p>

          <p className="text-sm text-gray-700 mt-2">
            You can track your order status from My Orders.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">

          <Link
            to="/shop"
            className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            My Orders
          </Link>

        </div>

      </div>
    </section>
  );
};

export default OrderSuccess;