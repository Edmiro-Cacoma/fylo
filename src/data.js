import logo from "../src/Assets/images/logo.svg";
import illustrationIntro from "../src/Assets/images/illustration-intro.png";

export const menus = [logo];
export const altText = ["Fylo company logo","files location image"];
export const navLinks = ["Features", "Team", "Sign In"];

export const navMenu = [
  <nav aria-label="header navigation">
    <ul className="flex items-center gap-[3.5625rem]">
      {navLinks.map((item) => (
        <li key={item}>
          <a href="/" className="border-bottom relative">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>,
];

export const HeroContent = [
  {
    imageUrl: illustrationIntro,
    title: "All your files in one secure location, accessible anywhere.",
    text:"Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
  },
];

export const Features = [{}]