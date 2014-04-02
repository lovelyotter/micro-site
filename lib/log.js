#!/usr/bin/env node
// Logger  
// **log.js** acts as a common logger.  
// Exports itself as a function which recieves the
// log level as it's single parameter. The log level
// defaults to `info` but can be over-ridden the passed
// in parameter or opts
var logger = require('winston'),
    opts   = require('./opts');

// Setup logger
module.exports = function(level){

  var log_level = level || opts.get('LOG_LEVEL') || 'info';

  logger.remove(logger.transports.Console);
  logger.add(logger.transports.Console, {colorize: true, level: log_level});
  return  {
            info: logger.info,
            debug: logger.debug,
            error: logger.error,
            warn: logger.warn
          };
};
