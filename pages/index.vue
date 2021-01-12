<template>
  <main class="blog-index-page">
    <h1 class="blog-index-page__title">Health Karma Blogs</h1>
    <!-- blogs -->
    <ul class="blog-index-page__blogs">
      <li v-for="(blog,id) in [...blogs, ...blogs, ...blogs]" :key="id" class="blog-index-page__blog">
        <header class="blog-img-container">
          <img :src="handleImage(blog)" :alt="`${blog.title} image`" loading="lazy">
        </header>
        <div class="blog-content">
          <h2 class="blog-content__title">{{blog.title}}</h2>
          <div v-html="blog.blog_copy.rich_text_editor" class="blog-content__snippet" />
          <h-button
            variant="terciary"
            class="px-0"
            @click="$router.push(blog.url)"
            icon="icon-navigation-linear-chevron-right"
            flipContent
          >
            <span class="font-600">Read More</span>
          </h-button>
        </div>
      </li>
    </ul>
    <!-- pagination -->
    <Pagination />

  </main>
</template>

<script>
import Pagination from '~/components/base/Pagination.vue';

export default {
	components: { Pagination },
  async asyncData({ $axios, $config: { baseURL } }) {
    const blogs = await $axios.$get(`${baseURL}/blogs`);
    return {
      blogs: blogs.data,
    }
  },
  methods: {
    handleImage(blog) {
      if (blog.thumbnail_image) return blog.thumbnail_image.url
      else if (blog.header_image) return blog.header_image.url
      else return ''
    } 
  },
  head: {
    title: 'Health Karma Blogs',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Healthcare resources you can depend on'
      }
    ],
  }
}
</script>

<style lang="scss">
.blog-index-page {
  padding: 12px 20px;
  @media screen and (min-width: $laptop) { 
    padding: 32px 36px;
  }
  &__title {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.52;
    text-align: center;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      margin-bottom: 32px;
      font-size: 28px;
    }
  }
  &__blogs {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 335px);
    grid-gap: $spacing-s;
    margin: unset;
    padding: unset;
    list-style: none;
    @media screen and (min-width: $laptop) { 
      grid-template-columns: repeat(auto-fit, 308px);
      grid-row-gap: 24px;
      grid-column-gap: 20px;
    }
  }
  &__blog {
    min-height: 323px;
    max-width: 335px;
    width: 100%;
    background-color: $white;
    box-shadow: 0 6px 10px 0 $blue-light;
    @media screen and (min-width: $laptop) { 
      max-width: 308px;
    }
    .blog-img-container {
      height: 200px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .blog-content {
      padding: $spacing_s $spacing_m;
      &__title {
        min-height: 54px;
        font-family: $font-primary;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        color: $black-light;
        @media screen and (min-width: $laptop) { 
          margin-bottom: $spacing_s;
          font-size: 18px;
        }
      }
      &__snippet {
        max-height: 75px;
        margin-bottom: 24px;
        font-size: 14px;
        line-height: 1.43;
        color: $black-light;
        overflow: hidden;
        font-family: $font-primary;
        @media screen and (min-width: $laptop) { 
          font-size: 16px;
          line-height: 24px;
          color: $gray-medium-light;
        }
      }
      &__link {
        color: $secondary1;
        padding: unset;
        border: unset;
        background: unset;
      }
    }
  }
}

</style>
