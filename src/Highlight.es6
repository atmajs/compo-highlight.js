var Highlight = mask.Compo({
	meta: {
		attributes: {
			lang: 'string'
		},
		mode: 'server'
	},
	onRenderStart (model) {
		var source = j(this).text(model),
			highlighted = hljs.highlight(this.xLang, mask.str.dedent(source));

		this.model = { text: highlighted.value };
		this.nodes = mask.parse(`pre > code.hljs.${this.xLang} > :html > "~text"`);
	}
}); 