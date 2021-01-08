<template>
  <aside class="recent-blogs">
    <h4 class="recent-blogs__title">Recent Posts</h4>
    <ul class="recent-blogs__blogs-container">
      <li v-for="i in 3" :key="`${i}-recentpost`" class="recent-blogs__blog-post">
        <NuxtLink to="/" class="recent-blogs__blog-link">
          Which doctor’s appointments you should schedule in 2020<br>
        </NuxtLink>
        <span class="recent-blogs__blog-date">October 2020</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  created() {
    // call to the BE to retrieve recent blogs and save state
  },
  data() {
    return {
      recentBlogs: []
    }
  }
}
</script>

<style lang="scss">
.recent-blogs {
  &__title {
    margin-bottom: $spacing_m;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    color: $black-light;
  }
  &__blogs-container {
    width: 242px;
    list-style: none;
    font-family: $font-primary;
  }
  &__blog-post {
    margin-bottom: $spacing_s;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: $black-light;
  }
  &__blog-link {
    color: $black-light;
  }
  &__blog-date {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    color: $gray-medium-light
  }
}
</style>