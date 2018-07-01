<template>
  <router-link
    :to="link"
    class="LayoutNavigationLink"
    active-class="-is-active"
    exact-active-class="-is-active"
    tag="span"
    exact
  >
    <span class="separator"></span>
    <a class="name">{{ name }}</a>
  </router-link>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      link: {
        type: [String, Object],
        required: true
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/typography'
  @import '~@/assets/styles/colors'

  .LayoutNavigationLink
    display: flex

    & > .separator
      display: block
      width: 1px
      height: 22pt
      border-left: 1px solid #000000
      padding-right: 15px

    & > .name
      display: block
      typography: 'Aristotelica'
      font-size: 22pt
      text-decoration: none
      color: $colorTypographyDark
</style>
