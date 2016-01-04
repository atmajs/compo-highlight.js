var Highlight = mask.Compo({
	meta: {
		attributes: {
			lang: 'string'
		}
	},
	render (model, ctx, container) {
		var source = j(this).text(model),
			highlighted = hljs.highlight(this.xLang, mask.str.dedent(source));

		var div = mask.render('pre > code.hljs.~lang > :html > "~text"', { text: highlighted.value, lang: this.xLang });
		container.appendChild(div);
	}
}); 