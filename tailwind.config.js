/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'good-header': '#F5A623',
        'good-card-grey': '#323234',
        'good-card-line': '#434246',
        'good-bg-grey-darker': '#282829',
        'good-successfully': '#5FA612',
        'good-failed': '#F54923',
        'good-label': '#FFCA63',
        'good-field': '#3D3B44',
        'good-button': '#7A5DD1',
        'good-ring-pasive': '#666175',
        'good-ring-active': '#BFB4DF',
        'good-card-line': '#434246',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
