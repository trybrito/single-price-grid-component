module.exports = {
  content: ["./src/{pages,components,styles}/**/*.{tsx,css}"],
  theme: {
    fontFamily: {
      primary: ["Karla", "sans-serif"],
    },
    colors: {
      primary: {
        cyan: "hsl(179, 62%, 43%)",
        "light-cyan": "hsl(179, 62%, 44.5%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
      },
      neutral: {
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
      },
    },
    transformOrigin: {
      "left-bottom": "left bottom",
      "center-bottom": "center bottom",
    },
    rotate: {
      "x-90": "transform: rotateX(90deg)",
    },
    boxShadow: {
      card: "0 20px 40px -16px hsl(218, 22%, 67%)",
      "light-cyan-button": "inset 0 0 1px 1px hsl(179, 62%, 44.5%)",
      "yellow-button": "inset 0 0 1px 1px hsl(71, 73%, 54%)",
    },
    extend: {
      fontSize: {
        "main-title": "1.34375rem",
        subtitle: ["0.8125rem", "1.3125rem"],
        price: ["1.625rem", "2.375rem"],
        "left-column": ["0.6875rem", "1rem"],
      },
      spacing: {
        131: "32.75rem",
      },
    },
  },
  plugins: [],
};
