import "~/static/segment.js"
export default {

  /**
   * Helper function to identify user
   * @param payload
   */
  identifyUser(payload = {}) {
    let userId = JSON.parse(localStorage.getItem("user"));
    if (userId) {
      window.analytics.identify(userId.user_id, payload);
    }
  },

  /**
   * Track blog post viewed
   */
  blogPostViewed(articleInformation) {
    window.analytics.track("Blog Post Viewed", {
      article_title: articleInformation.blog_title,
      article_category: articleInformation.tags,
    })
  },

  /**
   * Track shared blog post
   */
  blogPostShared(articleInformation) {
    let shareOption = articleInformation.replace('goodshare','');
    window.analytics.track("Blog Post Shared", {
      article_share_option: shareOption,
    })
  },

}
