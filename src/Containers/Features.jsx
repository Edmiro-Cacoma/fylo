import Card from "../Components/Card";
import {features} from "../data/features"

const Features = () => {
  return (
    <section className="max-w-[59rem] mx-auto px-8">
      <h2 className="sr-only">Features</h2>
      <div className="flex flex-wrap justify-center gap-[4.9375rem] lg:justify-between">
        {features.map((feature, index) => (
          <Card key={index} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
export default Features;
