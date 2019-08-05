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
        <v-btn class="nav__link" to="/support" flat>Support</v-btn>
        <v-btn flat>
          <a href="https://shop.spreadshirt.com/maureens-readers" class="nav__link">store</a>
        </v-btn>
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
          <g-link class="nav__link" to="/support">
            <v-list-tile>
              <v-list-tile-title>Support</v-list-tile-title>
            </v-list-tile>
          </g-link>

          <a href="https://shop.spreadshirt.com/maureens-readers" class="nav__link">
            <v-list-tile>
              <v-list-tile-title>Store</v-list-tile-title>
            </v-list-tile>
          </a>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-container>
      <slot />
    </v-container>
    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex md6>
          <div class="social">
                            <!-- Begin Mailchimp Signup Form -->
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
            <form action="https://maureensreaders.us3.list-manage.com/subscribe/post?u=968483c7a67a4931fc1575b74&amp;id=3b7ae74561" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Maureen's Readers Newsletter</label>
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_968483c7a67a4931fc1575b74_3b7ae74561" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                </div>
            </form>
            </div>
            <!--End mc_embed_signup-->
          </div>    
        </v-flex>
        <v-flex md6>
          <v-card
            max-width="344"
            class="mx-auto"
          >
            <v-card-title><h2>Contact Us</h2></v-card-title>
            <v-card-text>contact@maureensreaders.org</v-card-text>
            <v-card-actions>
            <a href="https://twitter.com/maureensreaders">
            <g-image src="~/twitter.png" width="40" class="image" />
          </a>
          &nbsp;
          <a href="https://www.facebook.com/maureensreaders/">
            <g-image src="~/facebook.png" width="40" class="image" /></a>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

      <v-footer class="footer">
        <span class="footer__copyright">
          © {{ new Date().getFullYear() }} Maureen's Readers, a US 501 (c)(3) charity. EIN: 83-3010984 | contact@maureensreaders.org | Site by
          <a
            href="https://elmcreek.io"
          >Elm Creek</a>
        </span>
      </v-footer>
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
