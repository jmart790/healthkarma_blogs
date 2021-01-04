<template>
  <footer class="app-footer p-3">
    <div class="app-footer--row-top">
      <div class="app-footer--row-top-left">
        
        <span class="app-footer__hk-logo icon-logo-hkc-full-black" />
        <div class="mt-4 app-footer--social-icons__desktop">
          <a target="_blank" href="https://www.facebook.com/HealthKarmaApp">
            <div class="white-circle">
              <span class="app-footer--icon icon-brand-facebook"></span>
            </div>
          </a>
          <a
            class="mx-3"
            target="_blank"
            href="https://www.instagram.com/healthkarmaapp"
          >
            <div class="white-circle">
              <span class="app-footer--icon icon-brand-instagram"></span>
            </div>
          </a>
          <a target="_blank" href="https://twitter.com/HealthKarmaApp">
            <div class="white-circle">
              <span class="app-footer--icon icon-brand-twitter"></span>
            </div>
          </a>
        </div>
      </div>
      <div class="mt-4 mt-md-0 app-footer--row-top-right">
        <div class="m-md-3 app-footer--product">
          <h2 class="text-uppercase mb-1 app-footer--header">Product</h2>
          <ul class="list-unstyled">
            <li>
              <a href="https://app.healthkarma.org/faq">FAQs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div class="m-md-3 ml-4 app-footer--company">
          <h2 class="text-uppercase mb-1 app-footer--header">Company</h2>
          <ul class="list-unstyled">
            <li>
              <a href="https://app.healthkarma.org/terms"
                >Terms and Conditions</a
              >
            </li>
            <li>
              <a href="https://app.healthkarma.org/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="mailto:support@healthkarma.org">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-footer--row-bottom">
      <div class="mb-4 app-footer--social-icons__mobile">
        <a target="_blank" href="https://www.facebook.com/HealthKarmaApp">
          <div class="white-circle">
            <span class="icon-brand-facebook app-footer--icon"></span>
          </div>
        </a>
        <a
          class="mx-3"
          target="_blank"
          href="https://www.instagram.com/healthkarmaapp"
        >
          <div class="white-circle">
            <span class="icon-brand-instagram app-footer--icon"></span>
          </div>
        </a>
        <a target="_blank" href="https://twitter.com/HealthKarmaApp">
          <div class="white-circle">
            <span class="icon-brand-twitter app-footer--icon"></span>
          </div>
        </a>
      </div>
      <b-img
        class="col-img mt-2 app-footer--medixall-logo"
        :src="require('../assets/images/medixall-group-logo-white.svg')"
      />
      <p class="app-footer--copyright">
        © 2020 All rights reserved. HealthKarma<sup>TM</sup>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.app-footer {
  bottom: 0;
  width: 100%;
  background: $secondary2;
  color: white;

  &__hk-logo {
    font-size: 30px;
  }
  &--header {
    width: 72px;
    height: 20px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
  }
  &--row-top {
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  &--row-top-left {
    display: flex;
    flex-direction: column;
  }
  &--social-icons {
    &__desktop {
      display: flex;
      color: $black;
      @media (max-width: 576px) {
        display: none;
      }
    }
    &__mobile {
      display: flex;
      @media (min-width: 576px) {
        display: none;
      }
    }
  }
  &--medixall-logo {
    width: 200px;
  }
  &--row-top-right {
    display: flex;
    a {
      width: 35px;
      height: 24px;
      font-size: 14px;
      line-height: 1.71;
      color: $white;
      &:hover {
        color: $secondary3;
      }
    }
  }
  &--row-bottom {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    border-top: 0.3px solid white;
  }
  &--copyright {
    width: 340px;
    height: 30px;
    font-size: 14px;
    line-height: 2.14;
  }
  &--icon {
    color: #342737;
  }
}
.white-circle {
  border-radius: 50px;
  height: 35px;
  width: 35px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-full-white {
  color: white;
  font-size: 30px;
}
</style>
