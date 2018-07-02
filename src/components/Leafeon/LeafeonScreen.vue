<template>
  <main class="LeafeonScreen">
    <h2 class="title">{{ title }}</h2>
    <h3 v-if="isSubtitled" class="subtitle">{{ subtitle }}</h3>

    <slot />
  </main>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        default: null
      }
    },
    computed: {
      isSubtitled () {
        return typeof this.subtitle !== 'string' || this.subtitle.trim();
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/colors'
  @import '~@/assets/styles/typography'

  .LeafeonScreen
    padding-top: 100px
    padding-bottom: @padding-top
    background-color: #FFFFFF

    > .title
      typography: 'Nexa-Bold'
      font-size: 40px
      margin-bottom: 60px

    > .subtitle
      typography: 'Aristotelica'
      font-size: 30px
      margin-bottom: 30px
</style>
