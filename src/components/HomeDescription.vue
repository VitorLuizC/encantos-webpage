<template>
  <article :class="['HomeDescription', '-' + color]">
    <h3 class="title">{{ title }}</h3>
    <p v-html="description" class="description"></p>
  </article>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true,
        validator: (color) => [
          'light',
          'contrast-1',
          'contrast-2',
          'contrast-3'
        ]
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/typography'
  @import '~@/assets/styles/colors'

  .HomeDescription
    display: flex
    align-items: flex-start
    flex-direction: column
    justify-content: center
    width: 100%
    height: 324px
    padding-left: 130px
    padding-right: @padding-left

    > .title
      margin-bottom: 35px
      typography: 'Nexa-Bold'
      font-size: 40px

    > .description
      typography: 'Aristotelica'
      font-size: 30px

    &.-light
      background-color: #FFFFFF

    &.-light > .title
    &.-light > .description
      color: $colorTypographyDark

    &.-contrast-1
      background-color: #6A9E2E

    &.-contrast-1 > .title
    &.-contrast-1 > .description
      color: $colorTypographyLight

    &.-contrast-2
      background-color: #F1871A

    &.-contrast-2 > .title
    &.-contrast-2 > .description
      color: $colorTypographyLight

    &.-contrast-3
      background-color: #4A772D

    &.-contrast-3 > .title
    &.-contrast-3 > .description
      color: $colorTypographyLight
</style>
