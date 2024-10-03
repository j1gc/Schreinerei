import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { parse } from 'svelte/compiler';
import * as entities from 'entities';

const htmlEntityEncoder = () => {
	return {
		markup({ content }) {
			// parse content into Abstract Syntax Tree (AST)
			const ast = parse(content);

			let html = content;

			// recursively process each node in the AST and encode text
			function processNode(node) {
				if (node.type === 'Element' || node.type === 'Text') {
					// encode text nodes
					if (node.type === 'Text') {
						const encodedText = entities.encodeNonAsciiHTML(node.raw);

						html = html.replace(node.raw, encodedText);
						console.log(html);
					}

					// If node has children, recursively process them too
					if (node.children) {
						node.children.forEach(processNode);
					}
				}
			}

			ast.html.children.forEach(processNode);

			return { code: content.replace(content, html) };
		}
	};
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess()
		//htmlEntityEncoder() // custom preprocessor
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true
		})
	}
};

export default config;
