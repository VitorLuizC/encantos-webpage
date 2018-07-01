<template>
  <router-link
    :to="link"
    class="LayoutBannerImage"
    :style="{ 'background-image': `url(${image})` }"
  >
    <p class="description">{{ description }}</p>
  </router-link>
</template>

<script>

  export default {
    props: {
      link: {
        type: [ String, Object ],
        required: true
      },
      image: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/typography'
  @import '~@/assets/styles/colors'

  .LayoutBannerImage
    display: flex
    align-items: center
    justify-content: center
    width: 100vw
    height: 435px
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    text-decoration: none

    > .description
      width: 280px
      padding: 10px
      border: 8px solid #FFFFFF
      typography: 'Nexa-Light'
      text-align: center
      font-size: 35pt
      color: $colorTypographyLight
</style>
