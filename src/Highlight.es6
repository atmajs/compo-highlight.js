var Highlight = mask.Compo({
	meta: {
		attributes: {
			'lang': 'string',
			'tab-spaces': 4
		},
		mode: 'server'
	},
	onRenderStart (model) {
		var source = j(this).text(model);
		source = mask.str.dedent(source);
		if (this.xTabSpaces > 0) {
			source = source.replace(/\t/g, str_repeat(' ', this.xTabSpaces))
		}

		var highlighted = hljs.highlight(this.xLang, source);

		this.model = { text: highlighted.value };
		this.nodes = mask.parse(`pre > code.hljs.${this.xLang} > :html > "~text"`);
	}
});

function str_repeat (c, count) {
	var str = '';
	while (--count > -1) str += c;
	return str;
}