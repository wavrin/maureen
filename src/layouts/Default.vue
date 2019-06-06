<template>
  <v-app>
    <v-toolbar class="header">
      <v-toolbar-title>{{ $static.metaData.siteName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="nav__link" to="/">Home</v-btn>
        <v-btn class="nav__link" to="/about">About</v-btn>
        <v-btn class="nav__link" to="/donate">Donate</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <slot/>
    </v-container>
    <footer class="footer">
      <span
        class="footer__copyright"
      >© {{ new Date().getFullYear() }} Maureen's Readers, a US 501 (c)(3) charity. EIN: 83-3010984</span>
    </footer>
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
.v-toolbar__title {
  font-family: "Satisfy", cursive;
  color: #f41e84;
}

p {
  font-family: Lato;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
