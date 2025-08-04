#!/usr/bin/env bun

import func2arrow from "./func2arrow.js"
import putout from "putout"
import { minify } from "@swc/core"
import { transform } from "@babel/core"

const main = async (code, filename) => {
	code = transform(code, {
		comments: false,
		sourceMaps: false,
		configFile: false,
		babelrc: false,
	}).code

	code = putout(code, {
		plugins: ["esm"],
		rules: {
			"esm/inline-export": false,
			"esm/remove-empty-import": [
				"off",
				{
					ignore: [],
				},
			],
		},
		printer: [
			"putout",
			{
				format: {
					quote: '"',
				},
				semantics: {
					encodeSingleQuote: false,
					encodeDoubleQuote: true,
				},
			},
		],
	}).code

	code = await func2arrow(code)
	const r = await minify(code, {
			compress: {
				toplevel: true, // 启用顶层优化
				unused: true, // 删除未导出变量
				defaults: true, // 启用所有压缩选项
				drop_console: true,
				hoist_funs: true,
				hoist_vars: true,
				booleans_as_integers: true,
				reduce_funcs: true,
				unsafe: true,
			},
			mangle: {
				toplevel: true, // 缩短顶层变量名
			},
			sourceMap: true,
			ecma: 2022,
			module: true,
		}),
		map = JSON.parse(r.map)

	map.sources[0] = filename

	r.map = JSON.stringify(map)
	return r
}

export default main
