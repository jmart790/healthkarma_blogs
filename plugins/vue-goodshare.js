import Vue from 'vue';
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareLinkedIn from "vue-goodshare/src/providers/LinkedIn.vue";
import VueGoodshareWhatsApp from "vue-goodshare/src/providers/WhatsApp.vue";
import VueGoodshareSMS from "vue-goodshare/src/providers/SMS.vue";
import VueGoodshareEmail from "vue-goodshare/src/providers/Email.vue";

Vue.component ("vue-goodshare-facebook", VueGoodshareFacebook);
Vue.component ("vue-goodshare-twitter", VueGoodshareTwitter);
Vue.component ("vue-goodshare-linkedin", VueGoodshareLinkedIn);
Vue.component ("vue-goodshare-whatsapp", VueGoodshareWhatsApp);
Vue.component ("vue-goodshare-sms", VueGoodshareSMS);
Vue.component ("vue-goodshare-email", VueGoodshareEmail);