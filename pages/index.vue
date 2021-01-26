<template>
  <main class="blog-index-page">
    <h1 class="blog-index-page__title">For The Health Of It</h1>
    <!-- blogs -->
    <ul class="blog-index-page__blogs">
      <li v-for="(blog,id) in blogPages[currentPage-1]" :key="id" class="blog-index-page__blog">
        <header class="blog-img-container">
          <img :src="handleImage(blog)" :alt="`${blog.title} image`" loading="lazy">
        </header>
        <div class="blog-content">
          <h2 class="blog-content__title">{{blog.title}}</h2>
          <p class="blog-content__snippet" >{{blog.blog_summary || "A Health Karma Blog"}}</p>
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
    <h-pagination 
      v-if="totalPages > 1"
      class="blog-index-page__pagination" 
      v-model="currentPage"
      :totalPages="totalPages"
      :isLarge="isLargePagination"
    />

  </main>
</template>

<script>
export default {
  name: "BlogsPage",
  async asyncData({ $axios, $config: { baseURL } }) {
    const blogs = (await $axios.$get(`${baseURL}/blogs`)).data;
    const blogsPerPage = 8;
    
    let blogPages = []
    for (let i = 0; i < blogs.length; i += blogsPerPage) {
      let chunk = blogs.slice(i, i + blogsPerPage)
      blogPages.push(chunk)
    }

    return {
      currentPage: 1,
      blogPages,
      totalPages: blogPages.length,
      isLargePagination: false
    }
  },
  created() {
    this.paginationSizeSetup();
  },
  methods: {
    handleImage(blog) {
      if (blog.thumbnail_image) return blog.thumbnail_image.url
      else if (blog.header_image) return blog.header_image.url
      else return ''
    },
    paginationSizeSetup() {
      if (process.client && window.innerWidth >= 768)
      this.isLargePagination = true;
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
    padding: $spacing_l 36px;
  }
  &__title {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.52;
    text-align: center;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      margin-bottom: $spacing_l;
      font-size: 28px;
    }
  }
  &__blogs {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 335px);
    grid-gap: $spacing-s;
    margin: unset;
    margin-bottom: $spacing_s;
    padding: unset;
    list-style: none;
    @media screen and (min-width: $laptop) { 
      grid-template-columns: repeat(auto-fit, 308px);
      grid-row-gap: $spacing_m;
      grid-column-gap: 20px;
      margin-bottom: $spacing_m;
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
        height: 54px;
        font-family: $font-primary;
        font-size: $spacing_s;
        font-weight: bold;
        line-height: 1.5;
        color: $black-light;
        overflow: hidden;
        @media screen and (min-width: $laptop) { 
          margin-bottom: $spacing_s;
          font-size: 18px;
        }
      }
      &__snippet {
        height: 150px;
        margin-bottom: $spacing_m;
        font-size: 14px;
        line-height: 1.43;
        color: $black-light;
        overflow: auto;
        font-family: $font-primary;
        @media screen and (min-width: $laptop) { 
          font-size: $spacing_s;
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
  &__pagination {
    margin: 0 auto;
  }
}

</style>
