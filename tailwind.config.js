// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E3200",
        secondary: "#D7A86E",
        accent: "#FFEBC1",
        dark: "#3D2B1F",
        light: "#F8F4E1",
      },
    },
  },
  plugins: [],
}
