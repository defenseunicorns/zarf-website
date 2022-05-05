/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  SITE_URL: process.env.SITE_URL || 'localhost:8000',
  PATH_PREFIX: process.env.PATH_PREFIX || '/',
};
