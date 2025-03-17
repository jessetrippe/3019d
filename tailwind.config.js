module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_pages/*.md',
    './*.md',
    './*.html',
    './scripts/*.js',
  ],
  theme: {
      extend: {
        fontFamily: {
          "inter": ["Inter", "sans-serif"],
          "playfair": ['"Playfair Display"', "serif"],
        },
        keyframes: {
          kenburns: {
            '0%': { transform: 'scale(1.1)' },
            '50%': { transform: 'scale(1.05)' },
            '100%': { transform: 'scale(1)' },
          },
          scroll: {
            'from': { transform: 'translateX(0)' },
            'to': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          kenburns: 'kenburns 10s infinite alternate ease-in-out',
          scroll: 'scroll 60s linear infinite',
        },
      },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animate-reverse': { 'animation-direction': 'reverse' },
        '.animate-alternate': { 'animation-direction': 'alternate' },
        '.animate-alternate-reverse': { 'animation-direction': 'alternate-reverse' },
      });
    }
  ]
}