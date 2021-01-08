<template>
  <div class="blog-index-page">
    <h1 class="blog-index-page__title">Blog Page Title</h1>
    <!-- blogs -->
    <ul class="blog-index-page__blogs">
      <li v-for="(blog,id) in [...testBlogs, ...testBlogs, ...testBlogs]" :key="id" class="blog-index-page__blog">
        <header class="blog-img-container">
          <img :src="blog.image" :alt="`${blog.title} image`" loading="lazy">
        </header>
        <div class="blog-content">
          <h2 class="blog-content__title">{{blog.title}}</h2>
          <p class="blog-content__snippet">Lorem ipsum dolore sot amet, sit dolor sit, lorem ipsum dolore sit amet, sit sit dolore lorem ipsum</p>
          <h-button
            variant="terciary"
            class="px-0"
            @click="$router.push(`/${blog.url}`)"
            icon="icon-navigation-linear-chevron-right"
            flipContent
          >
            <span class="font-600">Read More</span>
          </h-button>
        </div>
      </li>
    </ul>
    <!-- pagination -->
  </div>
</template>

<script>
export default {
  async asyncData() {
    return {
      testBlogs: [
        { title: "Eddy's favorite cupcake recipes to stay in shape",
          image: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg",
          content: "Lorem ipsum dolore sot amet, sit dolor sit, lorem ipsum dolore sit amet, sit sit dolore lorem ipsum",
          url: 'eddies-cupcake-recipes'
        },
        { title: "Josh's top plants for small spaces",
          image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/various-beautiful-green-plants-in-pots-on-white-royalty-free-image-931824676-1565950537.jpg?crop=0.825xw:0.620xh;0.0785xw,0.132xh&resize=1200:*",
          content: "Lorem ipsum dolore sot amet, sit dolor sit, lorem ipsum dolore sit amet, sit sit dolore lorem ipsum",
          url: 'plants-by-josh'
        },
        {
          title: "Save more with Carl's recomended RX meds",
          image: "https://s.abcnews.com/images/Health/GTY_pill_bottle_kab_140618_16x9_992.jpg",
          content: "Lorem ipsum dolore sot amet, sit dolor sit, lorem ipsum dolore sit amet, sit sit dolore lorem ipsum",
          url: 'carlys-fav-meds'
        }
        ]
    }
  },
}
</script>

<style lang="scss">
.blog-index-page {
  padding: 12px 20px;
  @media screen and (min-width: $laptop) { 
    padding: 32px 36px;
  }
  &__title {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.52;
    text-align: center;
    color: $black-light;
    @media screen and (min-width: $laptop) { 
      margin-bottom: 32px;
      font-size: 28px;
    }
  }
  &__blogs {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 335px);
    grid-gap: $spacing-s;
    margin: unset;
    padding: unset;
    list-style: none;
    @media screen and (min-width: $laptop) { 
      grid-template-columns: repeat(auto-fit, 308px);
      grid-row-gap: 24px;
      grid-column-gap: 20px;
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
        @media screen and (min-width: $laptop) { 
          margin-bottom: $spacing_s;
          font-size: 18px;
        }
      }
      &__snippet {
        font-size: 14px;
        line-height: 1.43;
        color: $black-light;
        @media screen and (min-width: $laptop) { 
          font-size: 16px;
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
}

</style>
