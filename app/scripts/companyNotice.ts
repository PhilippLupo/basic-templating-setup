let global: any = window;
if (typeof global.console !== 'undefined' && typeof global.console.log !== 'undefined') {
	global.console.log('Hi! I am using a nice setup!');
} else {
	global.console = {};
	global.console.log = global.console.error = function() {};
}
