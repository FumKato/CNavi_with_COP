Context = function(name, operations){
		var name = name;
		var operations = operations;
		var validation = false;
		
		return {
			adapt: function(object, functionName, operationName) {
				//TODO: enable check context's validation
				/*var command = object + '.prototype.proceed = ' + object + '.prototype.' + functionName + ';' +
				  object + '.prototype.' + functionName + ' = operations.' + operationName + ';console.log(' +
				  object + '.prototype.proceed); console.log(' + object + '.prototype.' + functionName + ');' + 
				  'console.log(' + object + '.prototype.' + functionName + ');';*/
				var command = 'var tmp = {' +
					'proceed: ' + object + '.prototype.' + functionName + ',' +
					functionName + ': operations.' + operationName +
				'};' +
				'_.extend(' + object + '.prototype, tmp);' + 
				'_.extend(' + object + '.prototype,' + 'tmp);';
				eval(command);
			},
			
			activate: function(){
				validation = true;
			},
			
			deactivate: function(){
				validation = false;
			}
		};
};
