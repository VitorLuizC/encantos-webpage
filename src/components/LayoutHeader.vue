<template>
  <header class="LayoutHeader">
    <img class="logo" src="~@/assets/images/Logo.png" alt="Encantos" />
    <nav class="links">
      <layout-header-link
        v-for="item in items"
        class="link"
        :key="item.name"
        :name="item.name"
        :link="item.link"
      />
    </nav>
  </header>
</template>

<script>
  import LayoutHeaderLink from '@/components/LayoutHeaderLink';

  const items = [
    {
      link: { name: 'Home' },
      name: 'sobre'
    },
    {
      link: { name: 'Home' },
      name: 'cursos'
    },
    {
      link: { name: 'Home' },
      name: 'projetos'
    },
    {
      link: { name: 'Home' },
      name: 'voluntariado'
    },
    {
      link: { name: 'Home' },
      name: 'contato'
    }
  ];

  export default {
    components: { LayoutHeaderLink },
    data () {
      return {
        items
      };
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/typography'
  @import '~@/assets/styles/colors'

  .LayoutHeader
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    height: 160px
    border-width: 1px
    border-style: solid
    border-color: #707070
    background-color: #FFFFFF

    > .logo
      height: 115px
      margin-left: 100px

    > .links
      display: flex
      align-items: flex-start
      justify-content: flex-start
      margin-right: 160px

      > .link + .link
        margin-left: 15px

      > .link:first-child
        margin-left: 0

        > .separator
          display: none
</style>
