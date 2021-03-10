<template>
  <div class="share-socials" >
    <h-button 
      variant="link" 
      :isCircle="true"
      class="share-socials__link"
      icon="icon-brand-twitter" 
      iconSize="large"
      @click="shareSocial('goodshareTwitter')"
    >
      <vue-goodshare-twitter
        ref="goodshareTwitter"
        class="share-socials__goodshare"
        title_social="Twitter"
        :page_url="shareUrl"
        :page_title="pageTitle"
      />
    </h-button>
    <h-button 
      variant="link" 
      :isCircle="true"
      class="share-socials__link"
      icon="icon-brand-facebook" 
      iconSize="large"
      @click="shareSocial('goodshareFacebook')"
    >
      <vue-goodshare-facebook
        ref="goodshareFacebook"
        class="share-socials__goodshare"
        :title_social="pageTitle"
        :page_url="shareUrl"
        :page_title="pageTitle"
        :page-description="pageDescription"
        :hashtag="hashtag"
        :quote="pageDescription"
      />
    </h-button>
    <h-button 
      variant="link" 
      :isCircle="true"
      class="share-socials__link"
      icon="icon-brand-linkedin" 
      iconSize="large"
      @click="shareSocial('goodshareLinkedin')"
    >
      <vue-goodshare-linkedin
        ref="goodshareLinkedin"
        class="share-socials__goodshare"
        title_social="LinkedIn"
        :page_url="shareUrl"
        :page_title="pageTitle"
        :page-description="pageDescription"
      />
    </h-button>
    <h-button 
      variant="link" 
      :isCircle="true"
      class="share-socials__link"
      icon="icon-brand-whatsapp" 
      iconSize="large"
      @click="shareSocial('goodshareWhatsapp')"
    >
      <vue-goodshare-whatsapp
        ref="goodshareWhatsapp"
        class="share-socials__goodshare"
        title_social="Whatsapp"
        :page_url="shareUrl"
      />
    </h-button>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    pageDescription: {
      type: String,
      required: true
    },
    hashtag: {
      type: String,
      required: false,
      default: 'HealthKarma'
    },
    quote: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    shareUrl() {
      return 'https://blog.healthkarma.org' + this.$route.fullPath;
    }
  },
  methods: {
    shareSocial(socialRef) {
      this.$refs[socialRef].showShareWindow();
    }
  }
}
</script>

<style lang="scss">
.share-socials {
  display: flex;
  align-items: center;
  &__link {
    padding: $spacing_xs !important;
    margin-right: $spacing_xs !important;
    text-decoration: none !important;
  }
  &__goodshare {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 0.1px;
    height: 0.1px;
    overflow: hidden;
    opacity: 0;
  }
}
</style>