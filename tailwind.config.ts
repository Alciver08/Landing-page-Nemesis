import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-width': '32rem', // Ajusta al tamaño deseado
      },
      height: {
        'custom-height': '32rem', // Ajusta al tamaño deseado
      },
      colors: {
        'dark-gray': '#1A1A1A',
        "dark-red": "#FF0006",
        'custom-purple': '#B700FF'
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #C100FF, #009FEB)', // Define tu gradiente aquí
        'text-gradientTo': 'linear-gradient(to bottom right, #00FED7, #ABE700)', // Define tu gradiente aquí

      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      }, 
      keyframes: {
        "loop-scroll": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
       'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    }
  ],
}
export default config;