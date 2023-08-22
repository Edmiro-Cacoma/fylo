import MotionComponent from "../Components/MotionComponent";
import illustration from "../Assets/images/illustration-intro.png";
import {
  staggerContainer,
  textVariants,
  fadeInVariants,
} from "../utils/motion";
const Hero = () => {
  return (
    <section className="flex max-w-[84rem] flex-col items-center gap-9 px-8 pt-[4.6875rem] pb-[9.9375rem]">
      <MotionComponent
        as="img"
        src={illustration}
        alt=""
        width={720}
        height={534}
        variants={fadeInVariants("up", 0.5, 0.8)}
      ></MotionComponent>
      <MotionComponent
        as="div"
        variants={staggerContainer}
        className="flex flex-col items-center gap-8 text-center"
      >
        <MotionComponent
          as="h1"
          variants={textVariants}
          className="max-w-[35ch] font-raleway font-bold text-clamp-24-40 "
        >
          All your files in one secure location, accessible anywhere.
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className="max-w-[54ch] leading-[1.875rem] text-clamp-14-20"
        >
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </MotionComponent>
        <MotionComponent
          as="a"
          variants={textVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="bg-gradient default-p block rounded-full text-base font-bold leading-[1.1875rem] hover:bg-cyan"
        >
          Get Started
        </MotionComponent>
      </MotionComponent>
    </section>
  );
};
export default Hero;
