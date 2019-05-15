<template>
  <Layout>
    <v-container fluid>
      <v-layout justify-space-around>
        <v-flex>
          <div class="title">
            <g-image alt="Maureen's Readers" src="~/maureen.png" width="375"/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.</p>
  </Layout>
</template>

<script>
export default {
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
</style>
