#!/usr/bin/env node

import babel from "@babel/core"
import putout from "putout"

let code = `
function get_attributes(element) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    element.__attributes ??= {
      [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
      [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
    }
  );
}
`

console.log(
	babel.transform(code, {
		comments: false,
		sourceMaps: false,
		configFile: false,
		babelrc: false,
	}).code,
)

// console.log(
// 	putout(code, {
// 		plugins: ["esm"],
// 		rules: {
// 			"esm/inline-export": false,
// 		},
// 		printer: [
// 			"putout",
// 			{
// 				format: {
// 					quote: '"',
// 				},
// 				semantics: {
// 					encodeSingleQuote: false,
// 					encodeDoubleQuote: true,
// 				},
// 			},
// 		],
// 	}).code,
// )
