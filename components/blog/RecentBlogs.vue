<template>
  <aside class="recent-blogs">
    <h4 class="recent-blogs__title">Recent Posts</h4>
    <ul class="recent-blogs__blogs-container">
      <li 
        v-for="(blog, id) in recentBlogs" 
        :key="`${id}-recentpost`" 
        class="recent-blogs__blog-post"
      >
        <NuxtLink 
          :to="blog.url" 
          class="recent-blogs__blog-link"
        >
          {{blog.title}}<br>
        </NuxtLink>
        <span class="recent-blogs__blog-date">
          {{extractYearMonth(blog.date_of_published_blog)}}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    recentBlogs: {
      type: Array,
      required: true
    },
  },
  methods: {
    extractYearMonth(publishDetails) {
      return publishDetails.split(',')[1]
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