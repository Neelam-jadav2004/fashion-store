const NewsletterSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Subscribe To Our Newsletter
        </h2>

        <p className="text-gray-300 mb-8">
          Get latest fashion updates and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg text-black w-full md:w-96"
          />

          <button className="bg-pink-600 px-8 py-3 rounded-lg hover:bg-pink-700">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;