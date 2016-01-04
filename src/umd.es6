(function(root, factory){
	var _global = typeof global !== 'undefined'
			? global
			: window
			;
	
	var _mask = get('mask', 'maskjs');
	if (_mask == null) 
		throw Error('MaskJS was not loaded');
	
	var _hljs = get('hljs', 'highlight.js-postbuild');
	if (_hljs == null) 
		throw Error('MaskJS was not loaded');
	
	factory(_global, _mask, _mask.jmask, _hljs);
	
	function get(prop, libraryName) {
		return _global[prop]
			|| (_global.atma && _global.atma[prop])
			|| (typeof require === 'function' && require(libraryName));
	}
	
}(this, function(global, mask, j, hljs){

	// import Highlight.es6

	mask.define('Highlight', Highlight);
}));
