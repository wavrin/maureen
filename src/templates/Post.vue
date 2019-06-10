<template>
  <Layout>
    <g-link class="logo" to="/">
      <span class="logo__text">&larr; Updates</span>
    </g-link>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>

      <PostMeta :post="$page.post"/>
    </div>

    <div class="post content-box">
      <div class="post__content" v-html="$page.post.content"/>

      <div class="post__footer">
        <PostTags :post="$page.post"/>
      </div>
      <br>
      <div class="comments">
        <vue-disqus shortname="maureensreaders" :identifier="$page.post.title"></vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    description
    content
  }
}
</page-query>

<style>
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;
}
</style>