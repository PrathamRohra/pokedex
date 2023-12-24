/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          normal: "#D3D3D3", // Light Gray
          fire: "#F37072", // Salmon Pink
          water: "#689DAE", // Steel Blue
          electric: "#FFFF00", // Yellow
          grass: "#5ACCAD", // Mint Green
          ice: "#ADD8E6", // Light Blue
          fighting: "#C03028", // Firebrick
          poison: "#A040A0", // Purple
          ground: "#D2B48C", // Tan
          flying: "#87CEEB", // Sky Blue
          psychic: "#FF69B4", // Hot Pink
          bug: "#A8B820", // Olive
          rock: "#B8860B", // Dark Goldenrod
          ghost: "#705898", // Slate Blue
          dragon: "#7038F8", // Royal Blue
          dark: "#705848", // Dim Gray
          steel: "#B0C4DE", // Light Steel Blue
          fairy: "#EE99AC", // Rose
      },
      backgroundImage: {
        pokeball: "url('./src/assets/pokeball.jpg')",
      }
    },
  },
  plugins: [],
}

