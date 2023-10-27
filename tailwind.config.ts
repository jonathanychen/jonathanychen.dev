import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        intro: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "30%": {
            width: "0%",
          },
          "40%": {
            width: "20%",
          },
          "70%": {
            width: "20%"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "white"
          },
          "100%": {
            borderColor: "transparent"
          }
        },
        fadeIn: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        }
      },
      colors: {
        darkblue: "#001432",
      },
      animation: {
        typing: "typing 2s steps(40), blink .7s 6",
        fadeIn: "fadeIn linear 2s",
        intro: "intro 2s steps(40), blink .7s 6"
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}
export default config
