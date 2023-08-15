import * as data from "../data";

const Features = () => {
  return (
    <section className="mx-auto max-w-[59rem] px-8">
      <h2 className="sr-only">Features</h2>
      <article className=" text-center mx-auto flex flex-wrap justify-center gap-[4.9375rem] lg:justify-between">
        {data.FeaturesContent.map((item) => (
          <div className="w-96">
            <img src={item.imageUrl} alt="" className="mx-auto" />
            <h3 className="mt-4 mb-2 font-raleway text-xl font-bold leading-[1.4375rem]">
              {item.title}
            </h3>
            <p className="leading-[150%]">{item.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};
export default Features;
