<template>
  <Layout>
    <div class="content">
      <h1>Donate</h1>
      <p>There are two ways to donate.</p>

      <h2>Online through paypal</h2>
      <br>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="54PEL2U2DHAKE">
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        >
        <img alt border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>

      <br>
      <h2>Mail a check:</h2>Maureen's Readers
      <br>8385 Balsam Ln N
      <br>Maple Grove, MN 55369
      <br>
      <br>
      <p>
        As a 501 (c)(3) charity, donations
        <br>to Maureen's Readers are tax deductable gifts.
        <br>Maureen's Readers tax code is 83-3010984. If
        <br>you are mailing a check and would like a
        <br>receipt, please provide contact information.
      </p>
      <a href="https://smile.amazon.com/ch/83-3010984">
        <g-image src="~/amazon.png" width="400" class="image" />
      </a>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Donate"
  }
};
</script>

<style>
.content {
  padding: 12px;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
</style>
