<template>
  <div class="blogkarma-layout">
    <Header class="blogkarma-layout__header"/>
    <Nuxt class="blogkarma-layout__page"/>
    <Footer class="blogkarma-layout__footer"/>
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
	components: { Header, Footer },
  
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.blogkarma-layout {
  &__page {
    width: 100%;
    min-height: 70vh;
    background-color: $pale-blue;
  }
}

</style>
