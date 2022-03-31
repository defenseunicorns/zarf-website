const fontWeights = {
  medium: 500,
  regular: 400
};

const fonts = {
  roboto: 'Roboto',
  mPlusRoundedFont: '"M PLUS Rounded 1c"'
};

export default Object.freeze({
  fontFamily: 'Roboto',
  h1: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 64,
    letterSpacing: -1.5,
    fontWeight: fontWeights.medium
  },
  h2: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 48,
    letterSpacing: -0.5,
    fontWeight: fontWeights.medium
  },
  h3: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 36,
    letterSpacing: -0.25,
    fontWeigth: fontWeights.medium
  },
  h4: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 24,
    letterSpacing: 0,
    fontWeigth: fontWeights.medium
  },
  h5: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 20,
    letterSpacing: 0.15,
    fontWeight: fontWeights.medium
  },
  h6: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: fontWeights.regular
  },
  subtitle1: {
    fontFamily: fonts.roboto,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeights: fontWeights.regular
  },
  subtitle2: {
    fontFamily: fonts.roboto,
    fontSize: 16,
    letterSpacing: 0.1,
    fontWeights: fontWeights.medium
  },
  body1: {
    fontFamily: fonts.roboto,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeights: fontWeights.regular
  },
  body2: {
    fontFamily: fonts.roboto,
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeights: fontWeights.regular
  }
});
