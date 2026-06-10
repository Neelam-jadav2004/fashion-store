import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import CategorySection from "../CategorySection";
import BrandSection from "../BrandSection";
import OfferBanner from "../OfferBanner";
import TrendingProducts from "../TrendingProducts";
import BestSeller from "../BestSeller";
import FeaturedBrands from "../FeaturedBrands";
import NewArrivals from "../NewArrivals";
// import NewsletterSection from "../NewsletterSection";
import Newsletter from "../Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <BestSeller />
      <TrendingProducts />
      <FeaturedBrands/>
      <OfferBanner />
      <NewArrivals/>
      {/* <NewsletterSection/> */}
      <Products />
      <Newsletter/>
      <footer/>
    </>
  );
};

export default Home;