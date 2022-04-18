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
    extend: {
      fontSize: {
        "main-title": "1.34375rem",
        subtitle: ["0.8828125rem", "1.5rem"],
      },
      spacing: {
        140: "35rem",
      },
      boxShadow: {
        card: "0 20px 40px -16px hsl(218, 22%, 67%)",
        button: "inset 0 0 1px 2px hsl(179, 62%, 43%)",
      },
    },
  },
  plugins: [],
};
