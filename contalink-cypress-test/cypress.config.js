require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1280,
    baseUrl: process.env.BASE_URL,
    env:{
      accessCode: process.env.CYPRESS_ACCESS_CODE
    },
    retries: 1,
    },
  },
);