<template>
  <div class="blog-page">
    <h-button
      variant="terciary"
      class="px-0 blog-page__back-link"
      @click="$router.push('/')"
      icon="icon-navigation-linear-chevron-left"
      :isSmall="true"
    >
      <span class="font-600">See All Blogs</span>
    </h-button>
    <section class="blog-page__hero-container">
      <img v-if="blog.header_image" :src="blog.header_image.url" alt="hero image">
    </section>
    <section class="blog-page__body">
      <RecentBlogs 
        class="blog-page__recent-posts" 
        :recentBlogs="recentBlogs" 
        :formatToYearMonth="formatToYearMonth" 
      />
      <BlogArticle 
        class="blog-page__article"
        :article="blog" 
        :formatToYearMonth="formatToYearMonth" 
      />
    </section>
  </div>
</template>

<script>
import RecentBlogs from "~/components/blog/RecentBlogs";
import BlogArticle from "~/components/blog/BlogArticle";

export default {
  components: {
    RecentBlogs, BlogArticle
  },
  async asyncData({ params,  $axios, $config: {baseURL} }) {
    const blogURL = params.blog
    const blog = await $axios.$get(`${baseURL}/blogs/${blogURL}`)
      .then(({status, message, data}) =>{
        if (status === 'SUCCESS') return data
        else return {}
      })
      .catch(err => {});
    const recentBlogs = (await $axios.$get(`${baseURL}/blogs`)).data.slice(0,3);

    return {
      blog,
      recentBlogs
    }
  },
  methods: {
    formatToYearMonth(date) {
      const month = new Date(date).toLocaleString('default', { month: 'long' })
      const year = date.split('-')[0]
      return month + ' ' + year
    }
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: this.blog.uid + '-description',
          name: 'Description for ' + this.blog.seo.meta_title || 'A Health Karma Blog',
          content: this.blog.seo.meta_description || 'Healthcare resources you can depend on'
        }
      ],
    }
  }
}
</script>

<style lang="scss">
.blog-page {
  height: 100%;
  padding-top: $spacing-xxs;
  @media screen and (min-width: $laptop) { 
    padding-top: unset;
  }
  &__back-link {
    margin: $spacing-xxs $spacing_s;
    margin-bottom: $spacing_xs;
    @media screen and (min-width: $laptop) { 
      position: absolute;
      margin: 20px 38px;
      color: $white;
    }
  }
  &__hero-container {
    max-height: 204px;
    overflow: hidden;
    @media screen and (min-width: $laptop) { 
      max-height: 427px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  &__body {
    display: flex;
  }
  &__recent-posts {
    display: none;
    @media screen and (min-width: $laptop) { 
      display: block;
      padding: 32px 36px;
    }
  }
  &__article {
    width: 100%;
    padding: 20px 40px;
    background-color: $white;
    @media screen and (min-width: $laptop) { 
      max-width: 1025px;
      margin-top: -72px;
      margin-left: auto;
      margin-right: 36px;
      padding: 32px 24px;
      padding-bottom: 45px;
    }
    @media screen and (min-width: $laptop-lg) { 
      margin-right: auto;
    }
  }
}
</style>