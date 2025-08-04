# @3-/webc

项目模板 [github.com/i18n-site/template-webc](https://github.com/i18n-site/template-webc)

## `:global(_)`

`:global(_) ` 可以设置网页组件本身的样式

比如:

```
<style lang="stylus">
:global(_)
  background red
  &>h1
    color #0f0
</stylus>
```

## 组件的css和内容分离


```
<style lang="stylus">
b
  color red
</stylus>
```

默认会转写成

```
<style lang="stylus">
i-index>b
  color red
</stylus>
```

如果要组件内的全局样式，可以写:

```
<style lang="stylus">
:global(_)
  b
    color #0f0
</stylus>
```
