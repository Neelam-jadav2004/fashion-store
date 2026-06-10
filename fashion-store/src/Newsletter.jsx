import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Subscribed Successfully 🎉");
    setEmail("");
  };

  return (
    <section className="py-16 bg-pink-600 text-white">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Subscribe To Our Newsletter
        </h2>

        <p className="mb-8">
          Get latest fashion updates and special offers.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-lg text-black w-full md:w-[400px]"
          />

          <button
            onClick={handleSubscribe}
            className="bg-black px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;