/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ctm: "90rem",
      },
      lineHeight: {
        error: "1.62",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      minHeight: {
        picture: "6.5rem",
      },
      maxWidth: {
        "card-1": "21.8125rem",
        "card-2": "24rem",
        "card-default": "22.6875rem",
      },
      colors: {
        //Primary

        "dark-blue-intro": "hsl(217, 28%, 15%)", //(intro and email sign up background)
        "dark-blue-main": " hsl(218, 28%, 13%)", //(main background)
        "dark-blue-footer": "hsl(216, 53%, 9%)", // (footer background)
        "dark-Blue-testimonials": "hsl(219, 30%, 18%)", //(testimonials background)
        "dark-form": "hsla(217, 28%, 15%, 1);",
        // Accent

        cyan: "hsl(176, 68%, 64%)", //(inside call-to-action gradient)
        blue: "hsl(198, 60%, 50%)", // (inside call-to-action gradient)
        "light-red": "hsl(0, 100%, 63%)", //(error)

        // Neutral
        "white-neutral": "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        verySmall: "0.625rem",
        small: ["0.4375rem", "0.0357rem"],
        "clamp-24-40": ["clamp(1.5rem, 3vw, 2.5rem)", "150%"],
        "clamp-14-20": ["clamp(0.875rem, 1.5vw, 1.25rem)", "150%"],
        base: ["clamp(0.875rem, 1.2vw, 1rem)", "1.5rem"],
        "clamp-18-32": ["clamp(1.125rem, 2.5vw, 2rem)", "150%"],
      },
    },
  },
  plugins: [],
};
