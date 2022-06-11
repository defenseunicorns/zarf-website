import { TypographyOptions } from '@mui/material/styles/createTypography';

const fontWeights = {
  medium: 500,
  regular: 400,
};

const fonts = {
  roboto: 'Roboto',
  mPlusRoundedFont: '"M PLUS Rounded 1c"',
};

const typography: TypographyOptions = {
  fontFamily: 'Roboto',
  h1: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 96,
    lineHeight: '120%',
    letterSpacing: -1.5,
    fontWeight: fontWeights.regular,
  },
  h2: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 64,
    letterSpacing: -0.5,
    fontWeight: fontWeights.regular,
  },
  h3: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 48,
    letterSpacing: -0.25,
    fontWeight: fontWeights.regular,
  },
  h4: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 34,
    letterSpacing: 0,
    fontWeight: fontWeights.regular,
  },
  h5: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 24,
    letterSpacing: 0.15,
    fontWeight: fontWeights.regular,
  },
  h6: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: fontWeights.regular,
  },
  subtitle1: {
    fontFamily: fonts.roboto,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeight: fontWeights.medium,
  },
  subtitle2: {
    fontFamily: fonts.roboto,
    fontSize: 16,
    letterSpacing: 0.1,
    fontWeight: fontWeights.medium,
  },
  body1: {
    fontFamily: fonts.roboto,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeight: fontWeights.regular,
  },
  body2: {
    fontFamily: fonts.roboto,
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: fontWeights.regular,
  },
  caption: {
    fontFamily: fonts.roboto,
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: fontWeights.regular,
  },
  overline: {
    fontFamily: fonts.roboto,
    fontSize: 12,
    letterSpacing: 1,
  },
  button: {
    fontFamily: fonts.roboto,
    fontWeight: fontWeights.medium,
  },
};

export default Object.freeze(typography);
