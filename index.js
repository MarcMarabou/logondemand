const Command = require('command');
const fs = require('fs');
const path = require('path');

let logging = false;

module.exports = function LogOnDemand(dispatch){
	const command = Command(dispatch);

	dispatch.hook('*', 'raw', (code, data, fromServer) => {
		if(logging){
			fs.appendFileSync(file, (fromServer ? '<-' : '->') + ' '+ code +' ' + dispatch.base.protocolMap.code.get(code) + ' ' + data.toString('hex') + '\n');
		}
	});

	command.add('logging',()=>{
 		file = path.join(__dirname, 'Log on demand ' + Date.now() + '.log')
 		logging = !logging;
 		console.log('Logging is '+(logging ? 'enabled' : 'disabled'));
 	});
}
