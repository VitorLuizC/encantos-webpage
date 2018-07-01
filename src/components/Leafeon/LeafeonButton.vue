<template>
  <component
    v-bind="$attrs"
    v-on="$listeners"
    :class="classes"
    :is="to ? 'router-link' : 'button'"
    :to="to ? to : null"
  >
    <span class="content">
      <slot />
    </span>
  </component>
</template>

<script>
  export default {
    props: {
      to: {
        type: [ String, Object ],
        default: null
      }
    },
    computed: {
      classes () {
        return [
          'LeafeonButton', {
            '-is-link': this.to,
            '-is-button': !this.to
          }
        ];
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/colors'
  @import '~@/assets/styles/typography'

  .LeafeonButton
    min-width: 125px
    min-height: 56px
    padding-left: 15px
    padding-right: @padding-left
    background-color: #FFFFFF
    background-image: none
    border-width: 1px
    border-style: solid
    border-color: #707070
    border-radius: 22px
    outline: none
    cursor: pointer

    &.-is-link
      text-decoration: none
      line-height: 56px

    > .content
      typography: 'Aristotelica'
      font-size: 25px
</style>
