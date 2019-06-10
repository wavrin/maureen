<template>
  <Layout>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="title">
            <g-image alt="Maureen's Readers" src="~/maureen.png" width="375"/>
          </div>
          <div class="posts">
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<page-query>
{
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        description
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";
export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: "Updates"
  }
};
</script>

<style>
</style>