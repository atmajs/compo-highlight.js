// source /src/umd.es6
"use strict";

(function (root, factory) {
	var _global = typeof global !== "undefined" ? global : window;

	var _mask = get("mask", "maskjs");
	if (_mask == null) throw Error("MaskJS was not loaded");

	var _hljs = get("hljs", "highlight.js-postbuild");
	if (_hljs == null) throw Error("`hljs` was not loaded");

	factory(_global, _mask, _mask.jmask, _hljs);

	function get(prop, libraryName) {
		return _global[prop] || _global.atma && _global.atma[prop] || typeof require === "function" && require(libraryName);
	}
})(undefined, function (global, mask, j, hljs) {

	// source Highlight.es6
	"use strict";

	var Highlight = mask.Compo({
		meta: {
			attributes: {
				lang: "string"
			},
			mode: "server"
		},
		onRenderStart: function onRenderStart(model) {
			var source = j(this).text(model),
			    highlighted = hljs.highlight(this.xLang, mask.str.dedent(source));

			this.model = { text: highlighted.value };
			this.nodes = mask.parse("pre > code.hljs." + this.xLang + " > :html > \"~text\"");
		}
	});
	//# sourceMappingURL=Highlight.es6.map
	// end:source Highlight.es6

	mask.define("Highlight", Highlight);
	mask.parser.defineContentTag("Highlight");
});
//# sourceMappingURL=umd.es6.map
// end:source /src/umd.es6