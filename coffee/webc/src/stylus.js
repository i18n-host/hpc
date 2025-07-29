import extractReplaceInclude from "@3-/extract/extractReplaceInclude.js"
import stylus from "@~8/stylus"

export default {
  markup: (o) => {
    const r = {
      code: extractReplaceInclude(
        '<style lang="stylus">',
        "</style>",
        (pug) => {
          const code = stylus(pug.slice(21, -8), o.filename)
          return "<style>\n" + code + "</style>"
        },
        o.content,
      ),
    }
    return r
  },
}
