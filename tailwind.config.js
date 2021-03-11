module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": ["8rem", "8rem"],
        "11xl": ["9rem", "9rem"],
        "12xl": ["10rem", "10rem"],
        "13xl": ["11rem", "11rem"],
        "14xl": ["12rem", "12rem"],
        "15xl": ["13rem", "13rem"],
        "16xl": ["14rem", "14rem"],
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "space": "url('https://i.ytimg.com/vi/dqoHcfMn6Ck/maxresdefault.jpg')",
      }),
      height: {
        'sm': '75%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
