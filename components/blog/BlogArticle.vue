<template>
  <div class="blog-article">
    <h1 class="blog-article__title">{{article.title}}</h1>
    <p class="blog-article__date">{{article.date}}</p>
    <p class="blog-article__blurb">{{article.blurb}}</p>
    <div class="blog-article__links-container">
      <h-button 
        variant="terciary" 
        class="blog-article__link"
      ><b>Share</b>
      </h-button>
      <h-button 
        variant="link" 
        :isCircle="true"
        class="blog-article__link"
      >
        <h-icon icon="icon-brand-facebook" size="large"/>
      </h-button>
      <h-button 
        variant="link" 
        :isCircle="true"
        class="blog-article__link"
      >
        <h-icon icon="icon-brand-instagram" size="large"/>
      </h-button>
      <h-button 
        variant="link" 
        :isCircle="true"
        class="blog-article__link"
      >
        <h-icon icon="icon-brand-twitter" size="large"/>
      </h-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
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
    @media screen and (min-width: $laptop) { 
      margin-bottom: 32px;
    }
  }
  &__date, &__blurb {
    max-width: 855px;
    font-size: 14px;
    line-height: 1.43;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__links-container {
    display: flex;
    align-items: center;
  }
  &__link {
    padding: 0;
    margin-right: $spacing_m;
    text-decoration: none;
  }
}
</style>