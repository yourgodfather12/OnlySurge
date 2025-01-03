import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'orbitron': ['var(--font-orbitron)'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          pink: '#FF1B6B',
          purple: '#9D4EDD',
          blue: '#45CAFF',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          yellow: '#FFD700',
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          pink: '#FF1B6B',
          purple: '#B026FF',
          blue: '#45CAFF',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          light: '#1A1A2F',
          lighter: '#2A2A4F',
        },
        'dark': '#0A0A0F',
        'dark-light': '#1A1A1F',
        'primary-pink': '#FF1B6B',
        'primary-purple': '#9D4EDD',
        'primary-blue': '#45CAFF',
        'neon-pink': '#FF1B6B',
        'neon-purple': '#9D4EDD',
        'neon-blue': '#45CAFF',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'particle-float': 'particle-float 10s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.5s ease-out',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '.8',
            transform: 'scale(1.05)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(255, 27, 107, 0.5), 0 0 10px rgba(255, 27, 107, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(255, 27, 107, 0.8), 0 0 30px rgba(255, 27, 107, 0.6)',
          },
        },
        'particle-float': {
          '0%, 100%': {
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(10px, -10px) rotate(90deg)',
          },
          '50%': {
            transform: 'translate(0, -20px) rotate(180deg)',
          },
          '75%': {
            transform: 'translate(-10px, -10px) rotate(270deg)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)',
        'neon-purple': '0 0 5px theme(colors.neon.purple), 0 0 20px theme(colors.neon.purple)',
        'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config
