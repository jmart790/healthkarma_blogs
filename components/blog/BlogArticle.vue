<template>
  <div class="blog-article">
    <h1 class="blog-article__title">{{article.title}}</h1>
    <p class="blog-article__date">{{article.date_of_published_blog}}</p>
    <div class="blog-article__blurb" v-html="richText"/>
    <h6>Let's get social</h6>
    <ShareWithSocials 
      :pageTitle="article.seo.meta_title"
      :pageDescription="article.seo.meta_description"
    />
  </div>
</template>

<script>
import ShareWithSocials from "~/components/blog/ShareWithSocials.vue"

export default {
  components: {
    ShareWithSocials
  },
  props: {
    article: {
      type: Object,
      required: true
    },
  },
  computed: {
    richText() {
      if (this.article.blog_copy) return this.article.blog_copy.rich_text_editor || '';
      return ''
    },
  },
}
</script>

<style lang="scss">
.blog-article {
  font-family: $font-primary;
  &__title {
    max-width: 634px;
    font-size: 21px;
    font-weight: bold;
    line-height: 1.52;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      font-size: 28px;
      line-height: 1.29;
    }
  }
  &__date {
    font-size: 14px;
    line-height: 1.43;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      margin-bottom: $spacing_l;
    }
  }
  &__blurb {
    max-width: 855px;
    margin-bottom: $spacing_l;
    font-size: 14px;
    line-height: 1.43;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      font-size: $spacing_s;
      line-height: 24px;
    }
    ul, ol {
      margin-left: $spacing_l;
    }
    img {
      max-width: 100%;
      @media screen and (min-width: $tablet) { 
        max-width: 90%;
        margin: 0 auto;
        display: flex;
      }
    }
  }
}
</style>