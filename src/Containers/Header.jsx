import { simpleAnimationVariants } from "../utils/motion";
import { staggerContainer, textVariants } from "../utils/motion";
import MotionComponent from "../Components/MotionComponent";
import logo from "../Assets/images/logo.svg";

const Header = () => {
  const links = ["Features", "Team", "Sign In"];
  return (
    <header className="flex max-w-[84rem] mx-auto font-raleway flex-wrap items-center justify-center gap-8 px-8 pt-8 text-base md:justify-between lg:pt-[4.5625rem]">
      <a
        href="/"
        className="absolute left-0 z-50 m-3 -translate-x-[150%] bg-dark-blue-intro border-2 border-white p-3 transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <MotionComponent as="a" variants={simpleAnimationVariants}>
        <img
          src={logo}
          alt="Fylo"
          width={176}
          height={52}
          className="w-28 md:w-auto"
        />
      </MotionComponent>
      <nav aria-label="Main">
        <MotionComponent
          as="ul"
          role="list"
          variants={staggerContainer}
          className="flex items-center gap-[3.5625rem]"
        >
          {links.map((link, index) => (
            <MotionComponent as="li" role="listitem" key={index} variants={textVariants}>
              <a href="/" className="relative border-bottom">
                {link}
              </a>
            </MotionComponent>
          ))}
        </MotionComponent>
      </nav>
    </header>
  );
};
export default Header;
