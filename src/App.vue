<template>
  <section class="container">
    <layout-header />
    <layout-banner />
    <router-view />
    <layout-footer class="footer" />
  </section>
</template>

<script>
  import LayoutHeader from '@/components/LayoutHeader';
  import LayoutBanner from '@/components/LayoutBanner';
  import LayoutFooter from '@/components/LayoutFooter';

  export default {
    components: { LayoutHeader, LayoutBanner, LayoutFooter }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/typography'

  @font-face
    font-family: 'Nexa'
    src: url('~@/assets/fonts/Nexa-Light.woff') format('woff'),
         url('~@/assets/fonts/Nexa-Light.woff2') format('woff2')
    font-weight: 300

  @font-face
    font-family: 'Nexa'
    src: url('~@/assets/fonts/Nexa-Bold.woff') format('woff'),
         url('~@/assets/fonts/Nexa-Bold.woff2') format('woff2')
    font-weight: 700

  @font-face
    font-family: 'Aristotelica Display'
    src: url('~@/assets/fonts/AristotelicaDisplay-Extralight.woff') format('woff'),
         url('~@/assets/fonts/AristotelicaDisplay-Extralight.woff2') format('woff2')
    font-weight: 200

  *
  *::after
  *::before
    box-sizing: border-box
    margin: 0
    padding: 0

  html
    font-size: 62.5%

  html
  body
    height: 100%
    typography: 'Aristotelica'

  .container
    display: flex
    flex-direction: column
    min-height: 100%

    > .footer
      margin-top: auto
</style>
