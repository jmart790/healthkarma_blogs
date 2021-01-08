<template>
  <footer class="app-footer">
    <h1 class="app-footer__invite-title">Invite friends and family to Health Karma</h1>
    <p class="app-footer__invite-text">
      Help your friends and family take charge of their health care with Health Karma.
    </p>
    <form class="app-footer__invite-form">
      <h-input-group placeholder="me@example" class="app-footer__invite-input"/>
      <h-button variant="primary" class="app-footer__invite-btn">
        <span class="app-footer__invite-btn-pretext">Send</span> Invite
      </h-button>
    </form>
    <span class="app-footer__hk-logo icon-logo-hkc-full-black" />
    <div class="app-footer__app-links">
      <figure class="app-footer__product">
        <figcaption>PRODUCT</figcaption>
        <ul class="list-unstyled">
          <li>
            <a href="https://app.healthkarma.org/faq">Help</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </figure>
      <figure class="app-footer__company">
        <figcaption>COMPANY</figcaption>
        <ul class="list-unstyled">
          <li>
            <a href="https://app.healthkarma.org/about">About</a>
          </li>
          <li>
            <a href="https://app.healthkarma.org/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="https://app.healthkarma.org/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="mailto:support@healthkarma.org">Contact us</a>
          </li>
        </ul>
      </figure>
    </div>
    <hr class="app-footer__line-break">
    <ul class="app-footer__social-links" >
      <li>
        <a target="_blank" href="https://www.facebook.com/HealthKarmaApp">
          <h-button
            class="app-footer__social-link"
            isCircle
            icon="icon-brand-facebook"
            iconSize="medium"
          />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/healthkarmaapp">
          <h-button
            class="app-footer__social-link"
            isCircle
            icon="icon-brand-instagram"
            iconSize="medium"
          />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/HealthKarmaApp">
          <h-button
            class="app-footer__social-link"
            isCircle
            icon="icon-brand-twitter"
            iconSize="medium"
          />
        </a>
      </li>
    </ul>
    <span class="icon-medixall-brand app-footer__medixall-logo" />
    <p class="app-footer__copyright">
      © 2020 All rights reserved.
      <br> HealthKarma<sup>TM</sup>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.app-footer {
  display: grid;
  grid-gap: 16px;
  width: 100%;
  padding: 16px 24px;
  background: $secondary2;
  color: white;
  @media screen and (min-width: $tablet) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "invite-title    invite-title          "
      "invite-text     invite-form"
      "hk-logo         app-links"
      "social-links    app-links"
      "line-break      line-break"
      "medixall-logo   .         "
      "copyright       .         ";
  }
  @media screen and (min-width: $laptop) { 
    padding: 16px 36px;
  }

  &__invite-title {
    max-width: 20ch;
    margin-bottom: unset;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33;
    color: $secondary3;
    @media screen and (min-width: $mobile-lg) { 
      max-width: unset;
    }
    @media screen and (min-width: $tablet) { 
      grid-area: invite-title;
    }
    @media screen and (min-width: $laptop-lg) { 
      font-size: 32px;
      font-weight: 500;
      line-height: 1.5;
    }
  }
  &__invite-text {
    max-width: 282px;
    margin-bottom: unset;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.71;
    font-family: $font-primary;
    @media screen and (min-width: $mobile-lg) { 
      max-width: 40ch;
      margin-right: 24px;
    }
    @media screen and (min-width: $tablet) { 
      grid-area: invite-text;
      margin-bottom: 24px;
    }
    @media screen and (min-width: $laptop-lg) { 
      font-size: 18px;
      line-height: 1.56;
    }
  }
  &__invite-form {
    max-height: 38px;
    display: flex;
    @media screen and (min-width: $tablet) { 
      justify-content: flex-end;
      grid-area: invite-form;
    }
  }
  &__invite-input {
    width: 100%;
    margin-right: $spacing_xs;
    @media screen and (min-width: $tablet) { 
      max-width: 380px;
    }
  }
  &__invite-btn {
    min-width: unset !important;
    padding: 0 24px !important;
    @media screen and (min-width: $laptop-lg) {
      min-width: 178px !important;
    }
  }
  &__invite-btn-pretext {
    display: none;
    @media screen and (min-width: $laptop-lg) {
      display: inline;
    }
  }

  &__hk-logo {
    margin-bottom: 16px;
    font-size: 32px;
    @media screen and (min-width: $tablet) { 
      grid-area: hk-logo;
      margin-bottom: unset;
    }
  }

  
  &__app-links {
    display: flex;
    font-family: $font-primary;
    font-size: 14px;
    figure {
      margin-right: 32px;
    }
    figure, ul {
      margin-bottom: unset;
    }
    figcaption {
      margin-bottom: 12px;
      font-weight: bold;
      line-height: 1.43;
    }
    ul li {
      margin-bottom: 4px;
    }
    ul li a {
      color: $white;
      font-weight: 300;
      &:hover {
        color: $secondary3;
      }
    }
    @media screen and (min-width: $tablet) { 
      grid-area: app-links;
      justify-content: flex-end;
    }
    @media screen and (min-width: $laptop-lg) {
      margin-bottom: 16px;
    }
  }
  &__product {
    min-width: 100px;
  }

  &__line-break {
    border-bottom: solid 0.5px $white;
    margin: unset;
    opacity: .5;
    @media screen and (min-width: $tablet) { 
      grid-area: line-break;
    }
  }

  &__social-links {
    display: flex;
    margin-bottom: 8px;
    li { 
      list-style: none;
      margin-right: 16px;
    }
    @media screen and (min-width: $tablet) { 
      grid-area: social-links;
    }
  }
  &__social-link {
    border: unset !important;
    background-color: $white;
    color: $gray-darkest;
  }


  &__medixall-logo {
    font-size: 48px;
    @media screen and (min-width: $tablet) { 
      grid-area: medixall-logo;
    }
  }
  &__copyright {
    font-family: $font-primary;
    font-size: 14px;
    line-height: 1.79;
    font-weight: 300;
    @media screen and (min-width: $tablet) { 
      grid-area: copyright;
      br {
        display: none;
      }
    }
  }
}
</style>
