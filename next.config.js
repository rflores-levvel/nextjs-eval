require('dotenv').config();

// next.config.js
module.exports = {
    target: "serverless",
    env: {
        CMS_COMPANY_NAME: process.env.CMS_COMPANY_NAME
    }
};