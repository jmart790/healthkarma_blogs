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
      <img src="https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg" alt="hero image">
    </section>
    <section class="blog-page__body">
      <RecentBlogs class="blog-page__recent-posts" />
      <BlogArticle :article="article" class="blog-page__article"/>
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
  async asyncData({ params }) {

    const blogId = params.blog
    return {
      blogId,
      article: {
        title: "5 things you should know about telemedicine in the face of our COVID-19 world",
        date: "Posted by Health Karma October 2020",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim"
      }
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
      min-width: 1025px;
      margin-top: -72px;
      margin-left: auto;
      padding: 32px 24px;
      padding-bottom: 45px;
    }
  }
}
</style>