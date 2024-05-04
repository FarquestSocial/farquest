import logger from "pino";
import type pino from "pino";
//import pinoPretty from "pino-pretty";

const Logger = (name: string) => {
  const level = Bun.env.LOG_LEVEL ?? "info"; // Default to 'info' if not specified
  const isDevelopment = process.env.NODE_ENV === "development";

  let options: pino.LoggerOptions = {
    name,
    level,
  };

  if (isDevelopment) {
    options = {
      ...options,
      transport: {
        target: 'pino-pretty',
        options: { colorize: true }
      }
    };
  }

  return logger(options);
};

export default Logger;