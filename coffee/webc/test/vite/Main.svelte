<script lang="coffee">
> svelte > onMount

onMount =>
  console.log '> hello'
  return

</script>

<template lang="pug">
h1 test
</template>

<style lang="stylus">
:global(_)
  overflow hidden

h1
  color #f00
</style>
