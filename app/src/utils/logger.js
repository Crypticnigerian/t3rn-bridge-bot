const _0x9eaaac=_0x27a2;function _0x5a12(){const _0x4e4ec7=['YYYY-MM-DD\x20HH:mm:ss','Log\x20file\x20cleared','75732lZSXRS','354EVODZk','9426CKnHLO','767385dDVSqX','clear','warn','2205bHsefP','log/app.log','debug','logger',']:\x20','2761Tzcdsr','1fLkeYU','949040SQDjLI','error','849690EgDsLh','4812IsblQd','level','27PWCEyZ','46128SHVIlo','truncate','info','setLevel'];_0x5a12=function(){return _0x4e4ec7;};return _0x5a12();}(function(_0x1576d7,_0x599357){const _0x5bf8ac=_0x27a2,_0x48bfcb=_0x1576d7();while(!![]){try{const _0x3d4dd3=-parseInt(_0x5bf8ac(0x9b))/0x1*(parseInt(_0x5bf8ac(0x83))/0x2)+parseInt(_0x5bf8ac(0x90))/0x3*(-parseInt(_0x5bf8ac(0x86))/0x4)+-parseInt(_0x5bf8ac(0x92))/0x5+-parseInt(_0x5bf8ac(0x91))/0x6*(parseInt(_0x5bf8ac(0x95))/0x7)+parseInt(_0x5bf8ac(0x89))/0x8*(parseInt(_0x5bf8ac(0x88))/0x9)+parseInt(_0x5bf8ac(0x85))/0xa+parseInt(_0x5bf8ac(0x9a))/0xb*(parseInt(_0x5bf8ac(0x8f))/0xc);if(_0x3d4dd3===_0x599357)break;else _0x48bfcb['push'](_0x48bfcb['shift']());}catch(_0xae1fb2){_0x48bfcb['push'](_0x48bfcb['shift']());}}}(_0x5a12,0x66e88));import{createLogger,format,transports}from'winston';import _0x394aa5 from'fs';function _0x27a2(_0x3d5576,_0x690d99){const _0x5a12c5=_0x5a12();return _0x27a2=function(_0x27a23b,_0xdd6aff){_0x27a23b=_0x27a23b-0x83;let _0x403b4f=_0x5a12c5[_0x27a23b];return _0x403b4f;},_0x27a2(_0x3d5576,_0x690d99);}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x88a1a2,message:_0x83102d,timestamp:_0x429d13})=>{const _0x169bc0=_0x27a2;return _0x429d13+'\x20['+_0x88a1a2+_0x169bc0(0x99)+_0x83102d;});class Logger{constructor(){const _0xccf521=_0x27a2;this[_0xccf521(0x98)]=createLogger({'level':_0xccf521(0x97),'format':combine(timestamp({'format':_0xccf521(0x8d)}),colorize(),customFormat),'transports':[new transports['File']({'filename':'log/app.log'})],'exceptionHandlers':[new transports['File']({'filename':_0xccf521(0x96)})],'rejectionHandlers':[new transports['File']({'filename':_0xccf521(0x96)})]});}[_0x9eaaac(0x8b)](_0x240c2c){const _0x55a319=_0x9eaaac;this[_0x55a319(0x98)]['info'](_0x240c2c);}['warn'](_0x325553){const _0x438e93=_0x9eaaac;this[_0x438e93(0x98)][_0x438e93(0x94)](_0x325553);}[_0x9eaaac(0x84)](_0x398772){const _0x175324=_0x9eaaac;this[_0x175324(0x98)][_0x175324(0x84)](_0x398772);}[_0x9eaaac(0x97)](_0x48ec45){const _0x312919=_0x9eaaac;this[_0x312919(0x98)][_0x312919(0x97)](_0x48ec45);}[_0x9eaaac(0x8c)](_0x284fa6){const _0x58d1a5=_0x9eaaac;this[_0x58d1a5(0x98)][_0x58d1a5(0x87)]=_0x284fa6;}[_0x9eaaac(0x93)](){const _0x41490e=_0x9eaaac;_0x394aa5[_0x41490e(0x8a)]('log/app.log',0x0,_0x598883=>{const _0xa20522=_0x41490e;_0x598883?this[_0xa20522(0x98)]['error']('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x598883['message']):this[_0xa20522(0x98)][_0xa20522(0x8b)](_0xa20522(0x8e));});}}export default new Logger();