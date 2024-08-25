import Banner from "./Banner";
import Company from "./Company";
import OurProducts from "./OurProducts";
import Rooms from "./Rooms";
import SolutionsWeOffer from "./SolutionsWeOffer";
import BookNow from "./BookNow";
import Faq from "./Faq";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <div className="max-w-7xl mx-auto container">
        <Company />
        <OurProducts />
        <Rooms />
        <SolutionsWeOffer />
      </div>
      <BookNow />

      <div className="max-w-7xl mx-auto container">
        <Faq />
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
