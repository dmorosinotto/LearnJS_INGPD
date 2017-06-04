//MONKEY-PATCHING: un modo per correggere o aumentare il linguaggio
if (typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1");
	};
}

if (!Array.hasOwnProperty('isArray')) { //codice difensivo per non ridefinire funzioni esistenti!
	Array.prototype.isArray = function (value) {
		return Object.prototype.toString.apply(value) === '[object Array]';
	}
}

if (!Function.prototype.bind) {
	Function.prototype.bind = function(object) {
		var func = this,
			slice = Array.prototype.slice;
		return function(){
			return func.apply(object, slice.call(arguments,0) );
		}
	}
}