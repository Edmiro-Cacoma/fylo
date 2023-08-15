import * as data from "../data";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-9 px-8 max-w-[84rem] mx-auto pt-[4.6875rem] pb-[9.9375rem]">
      <article>
        {data.HeroContent.map((item) => (
          <div key={item} className="flex flex-col items-center">
            <img src={item.imageUrl} alt={data.altText[1]} className="" />
            <div className="flex flex-col items-center text-center gap-8">
              <h1 className="font-raleway max-w-[35ch] text-clamp-24-40 font-bold">
                {item.title}
              </h1>
              <p className="max-w-[54ch] text-clamp-14-20 leading-[1.875rem]">
                {item.text}
              </p>
              <a
                href="/"
                className="block hover:bg-cyan default-p bg-gradient rounded-full text-base font-bold leading-[1.1875rem] "
              >
                Get Started
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
export default Hero;
