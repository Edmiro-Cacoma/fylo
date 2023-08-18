

const Testimonial = ({ author, position, testimonial, image, index }) => {

  return (
    <figure
      key={index}
      className={`p-testimonial | flex basis-[22.5rem] flex-col-reverse gap-6 rounded-sm bg-dark-Blue-testimonials ${
        index === 0 ? "q-icon relative" : ""
      } `}
    >
      <figcaption className="flex gap-2">
        <img
          src={image}
          alt={author}
          width={24}
          height={24}
          className="rounded-full"
        />
        <div>
          <p className="mb-1.5 text-vsm font-bold tracking-[0.0313rem]">
            {author}
          </p>
          <p
            className={`text-small ${
              index === 0 ? "tracking-[0.07em]" : "tracking-[0.17em]"
            }`}
          >
            {position}
          </p>
        </div>
      </figcaption>
      <blockquote>
        <p className="tracking-[0.0313rem]">{testimonial}</p>
      </blockquote>
    </figure>
  );
};

export default Testimonial;
