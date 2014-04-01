var fs    = require('fs'),
    nconf = require('nconf');

  // Basic setup (in-order):
  //   1. Command-line arguments
  //   2. Environment variables
  //   3. A file located at 'path/to/config.json'
  nconf.argv()
       .env()
       .file({ file: 'config.json' });

module.exports = nconf;
