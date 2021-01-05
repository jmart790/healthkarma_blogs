<template>
  <h1>testing blog {{blogId}}</h1>
</template>

<script>
export default {
  async asyncData({ params, store }) {
      const blogId = params.blog
      return {
        blogId
      }
  }
}
</script>

<style>

</style>