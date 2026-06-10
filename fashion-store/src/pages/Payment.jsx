import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    alert(`Payment Method: ${paymentMethod}`);
    navigate("/order-success");
  };

  return (
    <section className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-4xl font-bold text-center mb-8">
            Select Payment Method
          </h1>

          <div className="space-y-4">

            <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Cash On Delivery"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Cash On Delivery
            </label>

            <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="UPI"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              UPI Payment
            </label>

            <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Credit Card"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Credit Card
            </label>

            <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Debit Card"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Debit Card
            </label>

          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-8 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
          >
            Confirm Payment
          </button>

        </div>

      </div>
    </section>
  );
};

export default Payment;