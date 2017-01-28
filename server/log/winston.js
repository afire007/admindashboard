var moment = require('moment');

function logger(obj){
	var _userid = this.userId();
	var _msg = obj.msg;
	var _level = obj.level;
	var _message - obj.msg; 
}

//https://github.com/winstonjs/winston
winston.add(winston.transports.File, {
    filename: 'path/to/all-logs.log',
    handleExceptions: true,
    humanReadableUnhandledException: true
  }); 
