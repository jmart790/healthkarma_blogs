<template>
  <b-navbar class="app-header border-bottom" id="navbar" toggleable="sm">
    <b-navbar-brand href="https://app.healthkarma.org/" class="app-header__logo" />
    <b-navbar-toggle class="border-0" target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav class="mr-3" role="navigation">
      <div class="ml-auto">
        <b-navbar-nav class="d-flex align-items-center">
          <b-nav-item href="https://app.healthkarma.org/search">
            Search
          </b-nav-item>
          <b-nav-item href="https://app.healthkarma.org/faq">
            Help 
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.app-header {
  z-index: 10;
  min-height: 50px;
  padding: $spacing_xs $spacing_m !important;
  background-color: $white;
  font-family: $font-primary;
  @media screen and (min-width: $tabet-lg) {
    padding: $spacing_xs $spacing_m;
  }
  @media screen and (min-width: $laptop) {
    padding: $spacing_xs 36px !important;
	}
	&__logo {
    height: 32px;
    width: 189px;
    background-size: contain !important;
    background: url('../assets/icons/logo.svg') center no-repeat;
  }
  // overwriting inherit classes
  .navbar-nav {
    .nav-link {
      font-size: $spacing_s;
      font-weight: bold;
      line-height: 29px;
      padding: 3px 2rem;
      transition: 0.3s;
      color: $black-light !important;
    }
    .nav-item {
      margin: 0 5px;
    }
  }
}
</style>
