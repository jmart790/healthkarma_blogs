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
    <figure class="blog-page__hero-container">
      <img v-if="blog.header_image" :src="blog.header_image.url" alt="hero image">
    </figure>
    <section class="blog-page__body">
      <BlogArticle
        class="blog-page__article"
        :article="blog"
        :formatToYearMonth="formatToYearMonth"
      />
      <RecentBlogs
        class="blog-page__recent-posts"
        :recentBlogs="recentBlogs"
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
          name: 'Description for ' + this.blog.seo.meta_title || 'For the Health of It',
          content: this.blog.seo.meta_description || 'Healthcare resources you can depend on',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blog.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blog.blog_summary,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://blog.healthkarma.org${this.blog.url}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blog.thumbnail_image.url,
        },
        {
          property: "article:published_time",
          content: this.blog.created_at,
        },
        {
          property: "article:modified_time",
          content: this.blog.updated_at,
        },
        {
          property: "article:tag",
          content: this.blog.tags ? this.blog.tags.toString() : "",
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.blog.title
        },
        {
          name: 'twitter:description',
          content: this.blog.thumbnail_image.url
        },
        // image must be an absolute path
        {
          name: 'twitter:image',
          content: this.blog.thumbnail_image.url
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://blog.healthkarma.org${this.blog.url}`,
        },
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
      color: $white !important;
    }
  }
  &__hero-container {
    min-height: 204px;
    max-height: 427px;
    height: 100%;
    margin-bottom: unset;
    overflow: hidden;
    img {
      height: 204px;
      width: 100%;
      object-fit: fill;
      @media screen and (min-width: $laptop) {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__body {
    @media screen and (min-width: $laptop) {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  &__recent-posts {
    display: block;
    padding: 20px;
    @media screen and (min-width: $laptop) {
      padding: $spacing_l 36px;
    }
  }
  &__article {
    position: relative;

    width: auto;
    margin: -20px 20px 0 20px;
    padding: 20px;
    background-color: $white;
    @media screen and (min-width: $laptop) {
      max-width: 1025px;
      margin-top: -72px;
      margin-left: auto;
      margin-right: 36px;
      padding: $spacing_l $spacing_m;
      padding-bottom: 45px;
    }
    @media screen and (min-width: $laptop-lg) {
      margin-right: auto;
    }
  }
}
</style>
