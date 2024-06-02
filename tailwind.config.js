/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Customize your colors
        customColor: '#123456',
        ...defaultTheme.colors,
      },
      spacing: {
        // Customize your spacing
        '128': '32rem',
        '144': '36rem',
        ...defaultTheme.spacing,
      },
      borderRadius: {
        // Customize your border radius
        '4xl': '2rem',
        ...defaultTheme.borderRadius,
      },
      // Add any other customization you need
      screens: {
        'xs': '400px',
        ...defaultTheme.screens,
      },
      fontSize: {
        'xxs': '0.65rem',
        ...defaultTheme.fontSize,
      },
      // Extend other theme properties as needed
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
  ],
}
