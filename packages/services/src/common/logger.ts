import logger from "pino";
import type pino from "pino";
//import pinoPretty from "pino-pretty";

/**
 * Creates a logger with the specified name and options.
 * @param name - The name of the logger.
 * @returns A logger instance.
 */
const Logger = (name: string) => {
	const level = Bun.env.LOG_LEVEL ?? "info"; // Default to 'info' if not specified
	const isDevelopment = Bun.env.NODE_ENV === "development";

	let options: pino.LoggerOptions = {
		name,
		level,
	};

	if (isDevelopment) {
		options = {
			...options,
			transport: {
				target: "pino-pretty",
				options: { colorize: true },
			},
		};
	}

	return logger(options);
};

export default Logger;
