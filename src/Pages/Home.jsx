import Hero from "../Containers/Hero";
import Header from "../Containers/Header";
import Features from "../Containers/Features";
import Illustration from "../Containers/Illustration";
import Testimonial from "../Containers/Testimonials";
import Form from "../Containers/Form";
import Footer from "../Containers/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="curve | relative bg-dark-blue-main">
          <Features />
          <Illustration />
          <Testimonial />
          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
