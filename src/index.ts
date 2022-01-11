import pino from 'pino';

const logger = pino({
  level: 'trace',
  timestamp: pino.stdTimeFunctions.isoTime
});

logger.trace('Logging at TRACE level');
logger.info('Logging at INFO level');
logger.debug('Logging at DEBUG level');
logger.warn('Logging at WARN level');
logger.error('Logging at ERROR level');
logger.fatal('Logging at FATAL level');

logger.log('Logging with an undefined method');