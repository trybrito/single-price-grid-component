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
      card: "0 20px 44px -16px hsl(218, 22%, 67%)",
      "light-cyan-button":
        "inset 0 0 2px 1px hsl(179, 62%, 43%), 0 8px 14px -2px rgba(0, 0, 0, 0.15)",
      "yellow-button":
        "inset 0 0 2px 1px hsl(71, 73%, 54%), 0 8px 14px -2px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      fontSize: {
        "main-title": ["1.5rem", "2rem"],
        "tablet-main-title": ["1.21875rem", "1.5rem"],
        "secondary-title": ["1.1875rem", "1.625rem"],
        "tablet-secondary-title": ["1.0625rem", "1.5rem"],
        "tablet-subtitle": ["0.875rem", "1.375rem"],
        "strong-subtitle": ["1.125rem", "1.5rem"],
        "tablet-strong-subtitle": ["0.915625rem", "1rem"],
        price: ["2rem", "3rem"],
        "tablet-time-mark": ["0.8125rem", "1rem"],
        "tablet-left-column": ["0.8125rem", "1rem"],
        "right-column": ["0.875rem", "1.28125rem"],
        "tablet-right-column": ["0.75rem", "1rem"],
      },
      spacing: {
        162: "40.5rem",
      },
    },
  },
  plugins: [],
};
