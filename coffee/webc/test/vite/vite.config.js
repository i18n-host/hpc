import { defineConfig } from "vite"
import merge from "lodash-es/merge.js"
import Conf from "../../lib/lib.js"

const conf = await Conf(import.meta.dirname)

export default defineConfig(
	merge(conf, {
		define: {
			// __SRV__: JSON.stringify(process.env.__SRV__),
		},
		build: {
			rollupOptions: {
				external: [/^-\/.+/, /^virtual:.+/],
			},
		},
	}),
)
