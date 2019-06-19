<template>
  <v-app>
    <v-toolbar class="header">
      <v-toolbar-title>
        <g-link class="nav__link" to="/">{{ $static.metaData.siteName }}</g-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="nav__link" to="/" flat>Home</v-btn>
        <v-btn class="nav__link" to="/updates" flat>Updates</v-btn>
        <v-btn class="nav__link" to="/about" flat>About</v-btn>
        <v-btn class="nav__link" to="/donate" flat>Donate</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <g-link class="nav__link" to="/">
            <v-list-tile>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
          </g-link>
          <g-link class="nav__link" to="/updates">
            <v-list-tile>
              <v-list-tile-title>Updates</v-list-tile-title>
            </v-list-tile>
          </g-link>
          <g-link class="nav__link" to="/about">
            <v-list-tile>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile>
          </g-link>
          <g-link class="nav__link" to="/donate">
            <v-list-tile>
              <v-list-tile-title>Donate</v-list-tile-title>
            </v-list-tile>
          </g-link>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-container>
      <slot/>
    </v-container>

    <footer class="footer">
      <span class="footer__copyright">
        © {{ new Date().getFullYear() }} Maureen's Readers, a US 501 (c)(3) charity. EIN: 83-3010984 | contact@maureensreaders.org | Site by
        <a
          href="https://elmcreek.io"
        >Elm Creek</a>
      </span>
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
.nav__link {
  text-decoration: none;
  color: currentColor !important;
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
