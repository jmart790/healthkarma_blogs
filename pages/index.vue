<template>
  <div class="blog-page">
    <h1 class="blog-page__title">Blog Page</h1>
    <!-- blogs -->
    <ul class="blog-page__blogs">
      <li v-for="(i,id) in 3" :key="id" class="blog-page__blog">
        <header class="blog-img-container">
          <img src="~/assets/images/telehealth_image.png" alt="blog image">
        </header>
        <div class="blog-content">
          <h2 class="blog-content__title">5 Thigs You should Know About Telemedicine</h2>
          <p class="blog-content__snippet">Lorem ipsum dolore sot amet, sit dolor sit, lorem ipsum dolore sit amet, sit sit dolore lorem ipsum</p>
          <button
            class="blog-content__link"
          >Read More <span class="icon-navigation-linear-chevron-right" />
          </button>
        </div>
      </li>
    </ul>
    <!-- pagination -->
  </div>
</template>

<script>
import Stack from "../plugins/entry";

export default {
  async asyncData({ store }) {
    
  },
}
</script>

<style lang="scss">
.blog-page {
  padding: 12px 20px;
  &__title {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.52;
    text-align: center;
    color: $black-light;
  }
  &__blogs {
    list-style: none;
    margin: unset;
    padding: unset;
  }
  &__blog {
    width: 335px;
    height: 323px;
    margin-bottom: $spacing-s;
    box-shadow: 0 6px 10px 0 #dfecff;
    .blog-img-container {
      height: 130px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .blog-content {
      padding: $spacing_s $spacing_m;
      &__title {
        font-family: $font-primary;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        color: $black-light;
      }
      &__snippet {
        font-size: 14px;
        line-height: 1.43;
        color: #272f37;
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
