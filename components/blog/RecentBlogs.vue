<template>
  <aside class="recent-blogs">
    <h4 class="recent-blogs__title">Recent Posts</h4>
    <ul class="recent-blogs__blogs-container">
      <li
        v-for="(blog, id) in recentBlogs"
        :key="`${id}-recentpost`"
        class="recent-blogs__blog-post"
      >
        <img class="recent-blogs__thumbnail" :src="blog.thumbnail_image.url" :alt="`${blog.title} image`">
        <div>
          <NuxtLink :to="blog.url" class="recent-blogs__blog-link">
            {{ blog.title }}<br />
          </NuxtLink>
          <span class="recent-blogs__blog-date">
            {{ extractYearMonth(blog.date_of_published_blog) }}
          </span>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    recentBlogs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    extractYearMonth(publishDetails) {
      return publishDetails.split(',')[1]
    },
  },
}
</script>

<style lang="scss">
.recent-blogs {
  &__title {
    margin-bottom: $spacing_s;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    color: $black-light;
    font-family: $font-primary;
    @media screen and (min-width: $laptop) {
      margin-bottom: $spacing_m;
    }
  }
  &__blogs-container {
    list-style: none;
    font-family: $font-primary;
    @media screen and (min-width: $laptop) {
      width: 242px;
    }
  }
  &__blog-post {
    display: flex;
    align-items: flex-start;
    margin-bottom: $spacing_s;
    margin-right: 6px;
    font-size: $spacing_s;
    font-weight: 600;
    line-height: 1.5;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      margin-right: unset;
    }
  }
  &__thumbnail {
    width: 72px;
    height: 72px;
    object-fit: cover;
    margin-right: $spacing_s;
    margin-top: 6px;
    border-radius: 4px;
    @media screen and (min-width: $laptop) { 
      display: none;  
    }
  }
  &__blog-link {
    color: $black-light;
  }
  &__blog-date {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    color: $gray-medium-light;
  }
}
</style>
