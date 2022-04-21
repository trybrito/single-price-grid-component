module.exports = {
  content: ["./src/{pages,components,styles}/**/*.{tsx,css}"],
  theme: {
    screens: {
      tablet: {
        max: "565px",
      },
    },
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
        gray: "hsl(204, 3%, 34%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
      },
    },
    transformOrigin: {
      "left-bottom": "left bottom",
      "center-bottom": "center bottom",
    },
    boxShadow: {
      card: "0 20px 40px -16px hsl(218, 22%, 67%)",
      "light-cyan-button": "inset 0 0 1px 2px hsl(179, 62%, 44.5%)",
      "yellow-button": "inset 0 0 1px 2px hsl(71, 73%, 54%)",
    },
    extend: {
      fontSize: {
        "main-title": ["1.21875rem", "1.5rem"],
        "secondary-title": ["0.90625rem", "1.5rem"],
        "tablet-secondary-title": ["1.0625rem", "1.5rem"],
        subtitle: ["0.8125rem", "1.375rem"],
        "tablet-subtitle": ["0.875rem", "1.375rem"],
        "strong-subtitle": ["0.915625rem", "1rem"],
        price: ["1.625rem", "2.375rem"],
        "time-info": ["0.8125rem", "1rem"],
        "left-column": ["0.765625rem", "1rem"],
        "tablet-left-column": ["0.8125rem", "1rem"],
        "right-column": ["0.6875rem", "1rem"],
        "tablet-right-column": ["0.75rem", "1rem"],
      },
      spacing: {
        131: "32.75rem",
      },
    },
  },
  plugins: [],
};
