const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

//Path of Log Directory
const logDir = path.join(__dirname, "logs");

//generate log
const logEvent = async (message, fileName) => {
  const dateTime = format(new Date(), "dd-MM-yyyy\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;

  if (!fs.existsSync(logDir)) await fsPromise.mkdir(logDir);
  await fsPromise.appendFile(path.join(logDir, fileName), logItem);
};

module.exports = logEvent;
