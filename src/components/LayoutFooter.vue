<template>
  <footer class="LayoutFooter">
    <div class="address">
      <p class="row">Avenida Massao Watanabe, 73/79 - Jd. Santa Cruz</p>
      <p class="row">CEP: 02672-000 - São Paulo - SP</p>
      <p class="row">Tel: (11) 3424-6994</p>
    </div>
    <div class="media-links">
      <h3 class="label">Siga-nos</h3>
      <div class="links">
        <a class="link">
          <img class="image" src="~@/assets/icons/Facebook.png" alt="Facebook" />
        </a>
        <a class="link">
          <img class="image" src="~@/assets/icons/Instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="stylus">
  @import '~@/assets/styles/typography'
  @import '~@/assets/styles/colors'

  $center
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

  .LayoutFooter
    display: flex
    justify-content: space-between
    height: 165px
    background-color: #F1F1F1

    > .address
      @extends $center
      margin-left: 140px
      padding-top: 40px
      padding-bottom: @padding-top

      > .row
        typography: 'Nexa-Light'
        font-size: 23px

    > .media-links
      @extends $center
      align-items: flex-end
      margin-right: 80px
      padding-top: 20px
      padding-bottom: 40px

      > .links
        display: flex

      > .links > .link
        display: block
        width: 50px
        height: @width

      > .links > .link > .image
        max-width: 100%
        max-height: @max-width

      > .links > .link + .link
        margin-left: 20px

      > .label
        typography: 'Nexa-Bold'
        font-size: 23px
        text-align: right
</style>
