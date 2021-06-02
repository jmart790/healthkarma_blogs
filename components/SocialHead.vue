<template>
  <span v-if="false" />
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: this.url,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.title,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.description,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.image,
          },
          // {property: "article:published_time", content: this.blog.created_at,},
          // {property: "article:modified_time", content: this.blog.updated_at,},
          // {property: "article:tag", content: this.blog.tags ? this.blog.tags.toString() : "",},
          {
            hid: "twitter:url",
            name: "twitter:url",
            content: this.url,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.title
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.description
          },
          // image must be an absolute path
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.image
          },
        ],
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: this.url,
          },
        ],
      }
    }
  }
}
</script>
