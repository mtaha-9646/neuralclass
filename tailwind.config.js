module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0f9f6',
          100: '#dff3ed',
          200: '#bfe7db',
          300: '#9fd8c9',
          400: '#6fc4b0',
          500: '#4db896',
          600: '#3a9a7d',
          700: '#2d7a66',
          800: '#256254',
          900: '#1f4f46',
          950: '#0f3530',
        },
        'cream': {
          50: '#fafaf8',
          100: '#f5f5f0',
          200: '#ede9e0',
          300: '#e0d9cc',
          400: '#cfc7b8',
          500: '#bdb5a3',
          600: '#a39787',
          700: '#8b7f6f',
          800: '#6f6b60',
          900: '#5a5652',
          950: '#3a3632',
        }
      },
      animation: {
        'slide-up': 'slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 3s infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
