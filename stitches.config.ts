import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#f2f2f2',
      background: '#08070b',
      secondary: '#F5F5F5',
      purple: '#654ea3',
      pink: '#eaafc8',
      textColor: 'rgba(255, 255, 255, 0.38)',
      hover: '#212024',
      command: 'rgba(255, 255, 255, 0.05)',
    },
    transitions: {
      duration: '0.2s',
    },
    space: {
      navHeightDesktop: '60px',
      navHeightMobile: '0px',
    },
    fonts: {
      body: 'FiraCode, monospace;',
    },
    radii: {
      borderRadius: '8px',
    },
  },
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 768px)',
    bp3: '(max-width: 780px)',
    bp4: '(max-width: 1024px)',
  },
})

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body',
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: '$background',
  },
  html: {
    fontSize: '62.5%',
  },
  kbd: {
    color: '$background',
    background: '$secondary',
    padding: '1px 5px',
    borderRadius: '.4rem',
    transition: 'background $duration ease-in-out',
    fontFamily: '$code',
    fontSize: '1.4rem',
  },
  h1: {
    fontFamily: 'FiraCode, monospace;',
    color: '$white',
    fontSize: '4rem',
    margin: '0px',
    '@bp2': { fontSize: '5rem' },
  },
  p: {
    color: '$textColor',
    fontSize: '1.6rem',
  },
  span: {
    fontSize: '1.6rem',
  },
  '@font-face': [
    {
      fontFamily: 'FiraCode',
      src: `url("/static/font/FiraCode-Regular.woff2") format("truetype")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'FiraCode',
      src: `url("/static/font/FiraCode-Bold.woff2") format("truetype")`,
      fontWeight: 'normal',
      fontStyle: 'bold',
    },
  ],
})

globalStyles()