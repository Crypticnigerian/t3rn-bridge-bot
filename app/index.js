(function(_0xb2cbc8,_0x3adca8){const _0x10c5fd=_0x1c2b,_0x39766e=_0xb2cbc8();while(!![]){try{const _0x2c8623=-parseInt(_0x10c5fd(0x1c9))/0x1+parseInt(_0x10c5fd(0x1d5))/0x2+parseInt(_0x10c5fd(0x1c3))/0x3*(-parseInt(_0x10c5fd(0x1c2))/0x4)+-parseInt(_0x10c5fd(0x1d8))/0x5+parseInt(_0x10c5fd(0x1db))/0x6*(-parseInt(_0x10c5fd(0x1c5))/0x7)+-parseInt(_0x10c5fd(0x1dc))/0x8+parseInt(_0x10c5fd(0x1c7))/0x9;if(_0x2c8623===_0x3adca8)break;else _0x39766e['push'](_0x39766e['shift']());}catch(_0x56ff07){_0x39766e['push'](_0x39766e['shift']());}}}(_0x412e,0xf10e1));import{privateKey}from'./accounts/accounts.js';function _0x412e(){const _0x3f55ad=['Account\x20processing\x20complete,\x20Delaying\x2030\x20Second\x20before\x20next\x20operation','Config\x20Network\x20is\x20Set\x20To\x20','clearAll','Application\x20Started','2721448vpTHzW','delay','balance','8338280AxGzql','clearInfo','getBalance','6NqYnSV','512504HwYuvp','753348ufsEdn','6rVDTnz','\x20,\x20Tx\x20will\x20bridge\x20from\x20','8691879inDisu','Not\x20Enought\x20Balance','31441446XPSiij','Author\x20:\x20Nofan\x20Rambe','516767orcRYh','BOT\x20STOPPED','log','withdraw','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','info','Error\x20During\x20executing\x20bot','all'];_0x412e=function(){return _0x3f55ad;};return _0x412e();}import{Config}from'../config/config.js';function _0x1c2b(_0x271e8a,_0x25baff){const _0x412e77=_0x412e();return _0x1c2b=function(_0x1c2b12,_0x34bb6b){_0x1c2b12=_0x1c2b12-0x1c2;let _0x46fbc6=_0x412e77[_0x1c2b12];return _0x46fbc6;},_0x1c2b(_0x271e8a,_0x25baff);}import _0x1c0c28 from'./src/core/t3rn.js';import{Helper}from'./src/utils/helper.js';import _0x1391ba from'./src/utils/logger.js';import _0x284e2a from'./src/utils/twist.js';async function operation(_0x2cd118){const _0x2f0f41=_0x1c2b,_0x1da7d6=new _0x1c0c28(_0x2cd118),_0x4f4e73=Config['network']??'OP';await Helper[_0x2f0f41(0x1d6)](0xbb8,_0x2cd118,_0x2f0f41(0x1d2)+_0x4f4e73+_0x2f0f41(0x1c4)+_0x4f4e73,_0x1da7d6);if(_0x4f4e73=='OP'){await _0x1da7d6['connectWallet'](),await _0x1da7d6[_0x2f0f41(0x1da)]();if(_0x1da7d6['balance']<0.02)throw Error('Not\x20Enought\x20Balance');for(const _0x21d311 of Array(0xa)){await _0x1da7d6[_0x2f0f41(0x1cc)]();}}else{await _0x1da7d6['reinit']('ARB'),await _0x1da7d6['connectWallet'](),await _0x1da7d6[_0x2f0f41(0x1da)]();if(_0x1da7d6[_0x2f0f41(0x1d7)]<0.02)throw Error(_0x2f0f41(0x1c6));for(const _0x4ddac1 of Array(0xa)){await _0x1da7d6['withdraw']();}}await Helper[_0x2f0f41(0x1d6)](0x7530,_0x2cd118,_0x2f0f41(0x1d1),_0x1da7d6),await operation(_0x2cd118);}async function startBot(){return new Promise(async(_0x259324,_0x55263f)=>{const _0x4566bd=_0x1c2b;try{_0x1391ba[_0x4566bd(0x1ce)]('BOT\x20STARTED');const _0x40ffc0=[];for(const _0x5ed9ba of privateKey){_0x40ffc0['push'](await operation(_0x5ed9ba));}await Promise[_0x4566bd(0x1d0)](_0x40ffc0),_0x259324();}catch(_0x24a4b9){_0x1391ba[_0x4566bd(0x1ce)](_0x4566bd(0x1ca)),_0x1391ba['error'](JSON['stringify'](_0x24a4b9)),await _0x284e2a[_0x4566bd(0x1d3)](),_0x55263f(_0x24a4b9);}});}((async()=>{const _0x5132b5=_0x1c2b;try{_0x1391ba['clear'](),_0x1391ba[_0x5132b5(0x1ce)](''),_0x1391ba['info'](_0x5132b5(0x1d4)),console[_0x5132b5(0x1cb)]('T3RN\x20BRIDGE\x20BOT'),console['log'](_0x5132b5(0x1c8)),console[_0x5132b5(0x1cb)](_0x5132b5(0x1cd)),await startBot();}catch(_0x537a2e){_0x284e2a['clear'](),_0x284e2a[_0x5132b5(0x1d9)](),console['log'](_0x5132b5(0x1cf),_0x537a2e),await startBot();}})());