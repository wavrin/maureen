<template>
  <v-app>
    <v-toolbar class="header">
      <v-toolbar-title>{{ $static.metaData.siteName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="nav__link" to="/">Home</v-btn>
        <!--<v-btn class="nav__link" to="/about">About</v-btn>-->
        <v-btn class="nav__link" to="/donate">Donate</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <slot/>
    </v-container>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
</style>
