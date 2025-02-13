import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Light mode colors
        'light-bg': '#FAFAFA',
        'light-card': '#FFFFFF',
        'light-primary': '#FF3E41',
        'light-secondary': '#2B59C3',
        'light-accent': '#FFD23F',
        'light-text': '#0F0F0F',
        'light-border': '#1A1A1A',
        
        // Dark mode colors
        'dark-bg': '#0F0F0F',
        'dark-card': '#1A1A1A',
        'dark-primary': '#FF6B6D',
        'dark-secondary': '#4776E6',
        'dark-accent': '#FFE071',
        'dark-text': '#FAFAFA',
        'dark-border': '#FAFAFA',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'slide-up': 'slide-up 0.3s ease-out',
        'rotate-in': 'rotate-in 0.3s ease-out',
      },
      boxShadow: {
        'neo-light': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-dark': '4px 4px 0px 0px rgba(244,244,245,1)',
        'neo-sm-light': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-sm-dark': '2px 2px 0px 0px rgba(244,244,245,1)',
        'neo-lg-light': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-lg-dark': '8px 8px 0px 0px rgba(244,244,245,1)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;