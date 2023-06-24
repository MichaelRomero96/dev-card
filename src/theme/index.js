const colors = {
  default: '#54b689',
};

const size = {
  xxs: '320px',
  xs: '375px',
  sm: '425px',
  md: '768px',
  mmd: '990px',
  lg: '1024px',
  xl: '1440px',
  xxl: '2560px',
};

const breakpoints = {
  xxsDown: `(max-width: ${size.xxs})`,
  xsDown: `(max-width: ${size.xs})`,
  smDown: `(max-width: ${size.sm})`,
  mdDown: `(max-width: ${size.md})`,
  mmdDown: `(max-width: ${size.mmd})`,
  lgDown: `(max-width: ${size.lg})`,
  xlDown: `(max-width: ${size.xl})`,
  xxlDown: `(max-width: ${size.xxl})`,
  xxsUp: `(min-width: ${size.xxs})`,
  xsUp: `(min-width: ${size.xs})`,
  smUp: `(min-width: ${size.sm})`,
  mdUp: `(min-width: ${size.md})`,
  mmdUp: `(min-width: ${size.mmd})`,
  lgUp: `(min-width: ${size.lg})`,
  xlUp: `(min-width: ${size.xl})`,
  xxlUp: `(min-width: ${size.xxl})`,
};

const theme = {
  colors,
  size,
  breakpoints,
};

export default theme;
