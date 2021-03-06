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
  async asyncData({ params, payload,  $axios, $config: { baseURL } }) {
    let blog;
    if (payload) blog = payload;
    else {
      const blogURL = params.blog
      blog = await $axios.$get(`${baseURL}/blogs/${blogURL}`)
        .then(({status, message, data}) =>{
          if (status === 'SUCCESS') return data
          else return {}
        })
        .catch(err => {});
    }
    const recentBlogs = (await $axios.$get(`${baseURL}/blogs`)).data.slice(0,3);

    return {
      blog,
      recentBlogs,
      test: 'testingSeo'
    }
  },
  computed: {
    title() {
      if (this.blog) return this.blog.title;
    },
    description() {
      if (this.blog) return this.blog.seo.meta_description;
    },
    image(){
      if (this.blog) return this.blog.thumbnail_image.url;
    },
    url() {
      if (this.blog)  return `https://blog.healthkarma.org${this.blog.url}`;
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
      title: this.title,
      meta: [
        { 
          hid: "og:site_name",
          property: "og:site_name", 
          content: `For The Health Of It | ${this.title}`
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          property: "article:tag", 
          content: this.blog.tags ? this.blog.tags.toString() : "",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: this.url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        // image must be an absolute path
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: this.url,
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
