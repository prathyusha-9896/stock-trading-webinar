module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'pulse-ring': {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.7',
          },
          '70%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.66, 0, 0, 1) infinite',
        scrollLeft: "scrollLeft 50s linear infinite",
      },
    },
  },
  plugins: [],
}
