<template>
  <Layout>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="title">
            <g-image alt="Maureen's Readers" src="~/maureen.png" width="375" />
          </div>
          <div class="promo">
            Promoting and developing reading in
            elementary grade students. It is not only important for kids to develop reading skills early, but
            also to develop an
            <b>interest in reading</b> early.
            <br />
            <br />
          </div>
        </v-flex>
        <g-image class="frontpage" src="~/frontpage.jpg" />

        <v-flex xs6>
          <br />
          <br />
          <h2>About</h2>
          <g-link to="/about">
            <i class="material-icons md-48">group</i>
          </g-link>
          <p>
            Learn about our organization
            <br />and its mission.
          </p>
        </v-flex>
        <v-flex xs6>
          <br />
          <br />
          <h2>Support</h2>
          <g-link to="/support">
            <i class="material-icons md-48">library_books</i>
          </g-link>
          <p>
            Learn about opportunities to
            <br />donate and contribute.
          </p>
        </v-flex>
        <v-flex xs12>
          <br />
          <br />
          <h2>Recent Updates</h2>
          <div class="posts">
            <br />
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
          </div>
          <br />
          <br />
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
    title: "Maureen's Readers"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.title {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
}

.frontpage {
  opacity: 0.5;
  width: 100%;
  height: auto;
}
.promo {
  font-family: Lato;
  font-size: 20px;
}

.material-icons.md-48 {
  font-size: 48px;
  color: #f41e84;
}

.social {
  text-align: center;
}

#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:400px;}

</style>