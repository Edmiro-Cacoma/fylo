import logo from "../src/Assets/images/logo.svg";
import illustrationIntro from "../src/Assets/images/illustration-intro.png";
import acessAnywhere from "../src/Assets/images/icon-access-anywhere.svg";
import security from "../src/Assets/images/icon-security.svg";
import collaboration from "../src/Assets/images/icon-collaboration.svg";
import anyFile from "../src/Assets/images/icon-any-file.svg";

export const menus = [logo];
export const altText = ["Fylo company logo", "files location image"];
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
    text: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
  },
];

export const FeaturesContent = [
  {
    key: 1,
    imageUrl: acessAnywhere,
    title: "Access your files,anywhere",
    description:
      " The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    key: 2,
    imageUrl: security,
    title: "Security you can trust",
    description:
      "2- factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },

  {
    key: 3,
    imageUrl: collaboration,
    title: " Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },

  {
    key: 4,
    imageUrl: anyFile,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export const IllustrationContent = [
  {
    title: "  Stay productive, wherever you are",
    text: "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
    text1:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
];
