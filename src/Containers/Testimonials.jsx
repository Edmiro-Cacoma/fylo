

import testmonials from "../data/testimonials"
import Testimonial from "../Components/Testimonials";

const Testimonials = () => {
    return (
        <section className="relative flex flex-wrap justify-center gap-10 max-w-[77.75rem] mx-auto px-8 pt-[3.6875rem] pb-[22.6875rem]">
            
        <h2 className="sr-only">Testimonials</h2>
        {testmonials.map((testimonial, index) => (
          <Testimonial key={index} index={index} {...testimonial} />
        ))}
      </section>
    );
};
export default Testimonials;