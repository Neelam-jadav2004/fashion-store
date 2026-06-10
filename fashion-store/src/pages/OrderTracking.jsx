const OrderTracking = () => {

  const orderStatus = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out For Delivery",
    "Delivered",
  ];

  const currentStep = 2; // 0-4

  return (
    <section className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Track Your Order
        </h1>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

          <p className="text-lg mb-8">
            Order ID:
            <span className="font-bold ml-2">
              #FS2026001
            </span>
          </p>

          {orderStatus.map((status, index) => (
            <div
              key={index}
              className="flex items-center mb-6"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white
                ${
                  index <= currentStep
                    ? "bg-green-500"
                    : "bg-gray-400"
                }`}
              >
                ✓
              </div>

              <span className="ml-4 text-lg">
                {status}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OrderTracking;