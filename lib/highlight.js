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
				lang: "string",
				"tab-spaces": 4
			},
			mode: "server"
		},
		onRenderStart: function onRenderStart(model) {
			var source = j(this).text(model);
			source = mask.str.dedent(source);
			if (this.xTabSpaces > 0) {
				source = source.replace(/\t/g, str_repeat(" ", this.xTabSpaces));
			}

			var highlighted = hljs.highlight(this.xLang, source);

			this.model = { text: highlighted.value };
			this.nodes = mask.parse("pre > code.hljs." + this.xLang + " > :html > \"~text\"");
		}
	});

	function str_repeat(c, count) {
		var str = "";
		while (--count > -1) str += c;
		return str;
	}
	//# sourceMappingURL=Highlight.es6.map
	// end:source Highlight.es6

	mask.define("Highlight", Highlight);
	mask.parser.defineContentTag("Highlight");
});
//# sourceMappingURL=umd.es6.map
// end:source /src/umd.es6