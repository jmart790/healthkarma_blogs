<template>
  <div class="blog-page">
    <h1 class="blog-page__title">Blog Page</h1>
    <!-- blogs -->
    <ul class="blog-page__blogs">
      <li v-for="(blog,id) in testBlogs" :key="id" class="blog-page__blog">
        <header class="blog-img-container">
          <img src="~/assets/images/telehealth_image.png" alt="blog image">
        </header>
        <div class="blog-content">
          <h2 class="blog-content__title">{{blog.title}}</h2>
          <p class="blog-content__snippet">Lorem ipsum dolore sot amet, sit dolor sit, lorem ipsum dolore sit amet, sit sit dolore lorem ipsum</p>
          <h-button
            variant="terciary"
            class="px-0"
            @click="$router.push(`/${blog.url}`)"
          >
            Read More
            <h-icon icon="icon-navigation-linear-chevron-right" size="small" class="d-inline"/>
          </h-button>
        </div>
      </li>
    </ul>
    <!-- pagination -->
  </div>
</template>

<script>
import Stack from "../plugins/entry";

export default {
  async asyncData() {
    return {
      testBlogs: [
        { title: "Eddy's favorite cupcake recipes to stay in shape",
          url: 'eddies-cupcake-recipes'
        },
        { title: "Josh's top plants for small spaces",
          url: 'plants-by-josh'
        },
        {
          title: "Save more with Carl's recomended RX meds",
          url: 'carlys-fav-meds'
        }
        ]
    }
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
