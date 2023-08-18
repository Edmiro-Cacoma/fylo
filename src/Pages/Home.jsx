import Header from "../Containers/Header";
import Hero from "../Containers/Hero";
import Features from "../Containers/Features";
import Illustration from "../Containers/illustrattion";
import Testimonials from "../Containers/Testimonials";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="curve | relative bg-dark-blue-main">
          <Features />
          <Illustration />
          <Testimonials/>
        </div>
      </main>
    </>
  );
};
export default Home;
