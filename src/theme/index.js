const fontColors = {
  text: {
    lightest: 'rgba(41, 41, 41, 0.4)',
    light: 'rgba(41, 41, 41, 0.6)',
    normal: '#4f4f4f',
    dark: 'rgba(0, 0, 0, 0.2)',
    darkest: '#000',
  },

  title: {
    normal: '#0E86D4',
  },
};

const colors = {
  fonts: fontColors,
  palette: {
    primary: '#0E86D4',
    secondary: '#003060',
    tertiary: '#68BBE3',
    quaternary: '#0b212f',
    darkest: '#000',
    lightest: '#fff',
    gray: '#FAFAFA',
  },
};

const fontSize = {
  xs: '12px',
  sm: '13px',
  medium: '16px',
  subtitle: '20px',
  title_2: '29px',
  title_1: '44px',
};

const size = {
  px: {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '48px',
  },
};

const sizeDevice = {
  xxs: '320px',
  xs: '375px',
  sm: '425px',
  md: '768px',
  mmd: '990px',
  lg: '1024px',
  xl: '1440px',
  xxl: '1920px',
  xxxl: '2560px',
};

const breakpoints = {
  xxsDown: `(max-width: ${sizeDevice.xxs})`,
  xsDown: `(max-width: ${sizeDevice.xs})`,
  smDown: `(max-width: ${sizeDevice.sm})`,
  mdDown: `(max-width: ${sizeDevice.md})`,
  mmdDown: `(max-width: ${sizeDevice.mmd})`,
  lgDown: `(max-width: ${sizeDevice.lg})`,
  xlDown: `(max-width: ${sizeDevice.xl})`,
  xxlDown: `(max-width: ${sizeDevice.xxl})`,
  xxxlDown: `(max-width: ${sizeDevice.xxxl})`,
  xxsUp: `(min-width: ${sizeDevice.xxs})`,
  xsUp: `(min-width: ${sizeDevice.xs})`,
  smUp: `(min-width: ${sizeDevice.sm})`,
  mdUp: `(min-width: ${sizeDevice.md})`,
  mmdUp: `(min-width: ${sizeDevice.mmd})`,
  lgUp: `(min-width: ${sizeDevice.lg})`,
  xlUp: `(min-width: ${sizeDevice.xl})`,
  xxlUp: `(min-width: ${sizeDevice.xxl})`,
  xxxlUp: `(min-width: ${sizeDevice.xxxl})`,
};

const theme = {
  colors,
  size,
  sizeDevice,
  breakpoints,
  fontSize,
};

export default theme;
