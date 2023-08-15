import Header from "../Containers/Header";
import Hero from "../Containers/Hero";
import Features from "../Containers/Features";
import Illustration from "../Containers/illustrattion";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="curve | relative bg-dark-blue-main">
          <Features />
          <Illustration />
        </div>
      </main>
    </>
  );
};
export default Home;
