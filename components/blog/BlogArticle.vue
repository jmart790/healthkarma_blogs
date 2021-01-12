<template>
  <div class="blog-article">
    <h1 class="blog-article__title">{{article.title}}</h1>
    <p class="blog-article__date">{{article.date_of_published_blog}}</p>
    <div class="blog-article__blurb" v-html="richText"></div>
    <div class="blog-article__links-container">
      <h-button 
        variant="terciary" 
        class="blog-article__link"
      ><b>Share</b>
      </h-button>
      <template v-if="article.social.length">
        <a 
          v-for="(item,id) in article.social[0].social_share" 
          :key="id+'-social'"
          target="_blank" 
          :href="item.link.href"
        >
          <h-button 
            variant="link" 
            :isCircle="true"
            class="blog-article__link"
          >
            <h-icon 
              :icon="`icon-brand-${item.link.title.toLowerCase()}`" 
              size="large"/>
          </h-button>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
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
    }
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
      margin-bottom: 32px;
    }
  }
  &__blurb {
    max-width: 855px;
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.43;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      font-size: 16px;
      line-height: 24px;
    }
    ul, ol {
      margin-left: 32px;
    }
  }
  &__links-container {
    display: flex;
    align-items: center;
  }
  &__link {
    padding: 8px;
    margin-right: $spacing_m;
    text-decoration: none;
  }
}
</style>