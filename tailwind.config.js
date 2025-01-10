module.exports = {
  theme: {
    extend: {
      animation: {
        flipPage: 'flipPage 1s ease-in-out',
      },
      keyframes: {
        flipPage: {
          '0%': {
            transform: 'rotateY(90deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateY(0deg)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
