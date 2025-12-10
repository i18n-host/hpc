<script lang="coffee">
> svelte > onMount

onMount =>
  console.log '> hello'
  return

</script>

<template lang="pug">
b
  h1 面试信息抽取
  b
    p 上传面试录音转写的 txt / md 文件
    p
      input(type="file" name="file" accept=".txt,.md")
  p.or
    b 或者
  b
    p 发送飞书文档的连接
    p
      input(type="url" name="url" placeholder="飞书文档的链接")
  hr
  b.model
    | 管理能力素质模型
    a(href="#")

</template>

<style lang="stylus">
b
  font-weight 400

</style>
