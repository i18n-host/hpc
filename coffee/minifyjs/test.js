#!/usr/bin/env node

import putout from "putout"

console.log(putout(
  `
let hydrate_node;
function set_hydrate_node(node) {
}
(()=>{hydrate_node=1})();
export {
  set_hydrate_node as i,
  hydrate_node as k,
};
  `
  ,
  {
    plugins: [
      "esm"
    ],
    rules: {
      "esm/inline-export": false
    },
    printer: [
      'putout', {
        format: {
          quote: '"',
        },
        semantics: {
          encodeSingleQuote: false,
          encodeDoubleQuote: true,
        }
      }
    ]
  }
).code)
