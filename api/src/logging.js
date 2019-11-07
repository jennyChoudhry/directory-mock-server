import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const filename = 'directory-mock-server.log';
const myTransports = [ new transports.Console(), new transports.File({ filename }) ];

const myFormat = printf(info => {
  const { timestamp, level, message, label } = info;
  return `[${timestamp}] ${level.toUpperCase()}: ${label} ${message}`;
});

export default moduleName => {
  const name = 'directory-mock-server' + (moduleName === undefined ? '' : `:${moduleName}`);
  return createLogger({
    transports: myTransports,
    format: combine(label({ label: name }), timestamp(), myFormat),
  });
};
