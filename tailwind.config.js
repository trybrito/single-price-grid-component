module.exports = {
  content: ["./src/{pages,components,styles}/**/*.{tsx,css}"],
  theme: {
    fontFamily: {
      primary: ["Karla", "sans-serif"],
    },
    colors: {
      primary: {
        cyan: "hsl(179, 62%, 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
      },
      neutral: {
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%),",
      },
    },
    extend: {},
  },
  plugins: [],
};
