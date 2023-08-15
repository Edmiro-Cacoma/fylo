import * as data from "../data";
import image from "../Assets/images/illustration-stay-productive.png";
import imageWebp from "../Assets/images/illustration-stay-productive.webp";

const Illustration = () => {
  return (
    <section className="grid md:grid-cols-2 mx-auto max-w-[81.1875rem] px-8 pt-[8.4375rem] pb-[7.5rem]">
      <picture>
        <source srcSet={image} type="image/png" />
        <source srcSet={imageWebp} type="image/webp" />
        <img src={image} alt="illustration" className="ml-0.5" />
      </picture>
      <article>
        {data.IllustrationContent.map((item) => (
          <div className="flex flex-col gap-4 pt-4 md:pl-[3.5775rem] md:pt-[7.25rem]">
            <h2 className="font-raleway font-bold max-w-[15ch] text-clamp-24-40 leading-[125%] tracking-[0.0187rem]">
              {item.title}
            </h2>
            <p className="mt-[0.1875rem] text-base">{item.text}</p>
            <p className="mb-2 text-base">{item.text1}</p>
            <a
              href="/"
              className="w-fit items-center text-base leading-[1.375rem] text-cyan icon link-icon"
            >
              See how Fylo works
            </a>
          </div>
        ))}
      </article>
    </section>
  );
};
export default Illustration;
