import homepage from "../assets/homepage.jpg"
import fashionbanner from "../assets/fashionbanner.jpg"
import banner2 from "../assets/banner2.jpg"
import fashioncollection from "../assets/fashioncollection.jpg"
import { useState, useEffect } from "react";

const Hero = () => {

  const slides = [
    {
      image: fashioncollection,
      title: "Discover Fashion That Matches Your Style",
      subtitle: "New Fashion Collection",
    },
    {
      image: fashionbanner,
      title: "Premium Fashion For Every Occasion",
      subtitle: "Summer Collection",
    },
    {
      image: banner2,
      title: "Trending Styles Just For You",
      subtitle: "New Arrivals",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center">

      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* Left Side */}
        <div>

          <p className="text-pink-600 font-semibold mb-3">
            {slides[currentSlide].subtitle}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {slides[currentSlide].title}
          </h1>

         <p className="text-lg mb-8">
            Explore trendy outfits, premium fashion and modern styles.
          </p>

          <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700">
            Shop Now
          </button>

        </div>

        {/* Right Side */}
        <div>

          <img
            src={slides[currentSlide].image}
            alt="Fashion Banner"
            className="rounded-3xl shadow-lg w-full"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;