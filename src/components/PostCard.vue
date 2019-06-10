<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <g-link class="post-card__link" :to="post.path">
      <div class="post-card__content">
        <h2 class="post-card__title" v-html="post.title"/>
        <p class="post-card__description" v-html="post.description"/>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.post-card__link {
  text-decoration: none;
  color: currentColor !important;
}

.post-card__title {
  text-align: left;
}

.post-card__description {
  text-align: left;
}
</style>