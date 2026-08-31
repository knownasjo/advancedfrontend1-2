export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chill: {
          bg: '#181A1C',
          surface: '#22282A',
          surfaceAlt: '#2F3334',
          border: 'rgba(231,227,252,0.23)',
          primary: '#0F1E93',
          primaryLight: '#3254FF',
          primaryHover: '#09147A',
          danger: '#B71F1D',
          textMuted: 'rgba(255,255,255,0.8)',
          textDim: 'rgba(255,255,255,0.6)',
        },
      },
    },
  },
  plugins: [],
}
