<template>
  <Layout>
    <h1>Thank you for your donation</h1>
    <br>

    <p>As a 501 (c)(3) public charity, donations to Maureen's Readers are tax deductable gifts. Maureen's Readers tax code is 83-3010984.</p>

    <br>
    <br>
    <v-container fluid>
      <v-layout justify-space-around>
        <v-flex>
          <div class="title">
            <g-image alt="Maureen's Readers" src="~/maureen.png" width="375"/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Thank you"
  }
};
</script>

<style>
.title {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
}
</style>