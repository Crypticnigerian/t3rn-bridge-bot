const _0x4085f1=_0x14e4;function _0x14e4(_0x29c57e,_0x13e143){const _0x244dab=_0x244d();return _0x14e4=function(_0x14e4b2,_0x1b00ab){_0x14e4b2=_0x14e4b2-0x102;let _0x265db6=_0x244dab[_0x14e4b2];return _0x265db6;},_0x14e4(_0x29c57e,_0x13e143);}(function(_0x4acb0f,_0x93b2a9){const _0x51c691=_0x14e4,_0x23cbb4=_0x4acb0f();while(!![]){try{const _0xe5214b=parseInt(_0x51c691(0x114))/0x1*(-parseInt(_0x51c691(0x10b))/0x2)+parseInt(_0x51c691(0x10d))/0x3+parseInt(_0x51c691(0x105))/0x4+parseInt(_0x51c691(0x115))/0x5+parseInt(_0x51c691(0x110))/0x6*(-parseInt(_0x51c691(0x104))/0x7)+-parseInt(_0x51c691(0x10a))/0x8+parseInt(_0x51c691(0x10f))/0x9;if(_0xe5214b===_0x93b2a9)break;else _0x23cbb4['push'](_0x23cbb4['shift']());}catch(_0x644a9c){_0x23cbb4['push'](_0x23cbb4['shift']());}}}(_0x244d,0x1953b));import{createLogger,format,transports}from'winston';import _0x24dab3 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x59ae1b,message:_0x5b8a84,timestamp:_0x49e911})=>{const _0x27b96d=_0x14e4;return _0x49e911+'\x20['+_0x59ae1b+_0x27b96d(0x102)+_0x5b8a84;});function _0x244d(){const _0x58087d=['6boBTyK','logger','Log\x20file\x20cleared','clear','1WwzVMF','634910kuXqzt','log/app.log','error',']:\x20','truncate','1146817UJMBPM','399788bhfrCo','debug','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','YYYY-MM-DD\x20HH:mm:ss','info','1498824smNRXN','228714WhvtfD','File','354177vlSkkM','setLevel','2018628HzfeNf'];_0x244d=function(){return _0x58087d;};return _0x244d();}class Logger{constructor(){const _0x44c312=_0x14e4;this['logger']=createLogger({'level':_0x44c312(0x106),'format':combine(timestamp({'format':_0x44c312(0x108)}),colorize(),customFormat),'transports':[new transports[(_0x44c312(0x10c))]({'filename':_0x44c312(0x116)})],'exceptionHandlers':[new transports[(_0x44c312(0x10c))]({'filename':_0x44c312(0x116)})],'rejectionHandlers':[new transports['File']({'filename':_0x44c312(0x116)})]});}['info'](_0x1e7d0d){const _0x484c07=_0x14e4;this[_0x484c07(0x111)][_0x484c07(0x109)](_0x1e7d0d);}['warn'](_0x3abfbd){const _0x11802a=_0x14e4;this[_0x11802a(0x111)]['warn'](_0x3abfbd);}['error'](_0xde8611){const _0x33e3dd=_0x14e4;this[_0x33e3dd(0x111)][_0x33e3dd(0x117)](_0xde8611);}[_0x4085f1(0x106)](_0x5a8e43){const _0x154015=_0x4085f1;this[_0x154015(0x111)][_0x154015(0x106)](_0x5a8e43);}[_0x4085f1(0x10e)](_0x24509a){const _0x1bdc9e=_0x4085f1;this[_0x1bdc9e(0x111)]['level']=_0x24509a;}[_0x4085f1(0x113)](){const _0x327f7c=_0x4085f1;_0x24dab3[_0x327f7c(0x103)](_0x327f7c(0x116),0x0,_0x2d4379=>{const _0x4f3fd7=_0x327f7c;_0x2d4379?this['logger'][_0x4f3fd7(0x117)](_0x4f3fd7(0x107)+_0x2d4379['message']):this[_0x4f3fd7(0x111)]['info'](_0x4f3fd7(0x112));});}}export default new Logger();
