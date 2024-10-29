const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "g6tHSDQL#lbCwmX4jLj4I8xVkfVDhx75aMazNUcm0XdKBKfJP4UM",
ALIVE_IMAGE: process.env.ALIVE_IMG || "https://i.ibb.co/Pcw5MZq/In-Collage-20241028-103516143.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
};
