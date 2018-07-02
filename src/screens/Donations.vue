<template>
  <leafeon-screen class="DonationsScreen" title="Como ajudar">
    <div class="cards">
      <div class="card">
        <img class="image" src="~@/assets/icons/People.png" alt="Doações" />
        <h3 class="title">Trabalho voluntário</h3>
        <p class="description">Trabalho voluntário inclui todas as idades e tem como foco indivíduos que ensinem música e arte.</p>
        <leafeon-button class="button">participe</leafeon-button>
      </div>

      <div class="card">
        <img class="image" src="~@/assets/icons/Donate.png" alt="Doações" />
        <h3 class="title">Doações</h3>
        <p class="description">Torne-se sócio ou faça uma doação identificada e contribua para que mais pessoas tenham o acesso a arte e cultura.</p>
        <leafeon-button class="button">doe</leafeon-button>
      </div>

      <div class="card">
        <img class="image" src="~@/assets/icons/Hanger.png" alt="Doações" />
        <h3 class="title">Bazar</h3>
        <p class="description">Aceitamos roupas e sapatos em bom estado para serem vendidos e arrecadar dinheiro para o projeto.</p>
        <leafeon-button class="button">sobre</leafeon-button>
      </div>
    </div>
  </leafeon-screen>
</template>

<script>
  import LeafeonButton from '@/components/Leafeon/LeafeonButton';
  import LeafeonScreen from '@/components/Leafeon/LeafeonScreen';

  export default {
    components: { LeafeonButton, LeafeonScreen }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/colors'
  @import '~@/assets/styles/typography'

  .DonationsScreen
    padding-top: 100px
    padding-bottom: @padding-top

    > .title
      margin-bottom: 90px
      typography: 'Nexa-Bold'
      font-size: 50px
      text-align: center

    > .cards
      display: flex
      align-items: center
      justify-content: center
      width: 100%

      > .card:nth-child(3n + 1)
        margin-right: -60px

      > .card:nth-child(3n + 3)
        margin-left: -60px

      > .card:nth-child(3n + 1)
      > .card:nth-child(3n + 3)
        transform: scale(.9)
        background-color: #AD6215
        z-index: 0

      > .card:nth-child(3n + 2)
        z-index: 1

      > .card
        display: flex
        align-items: center
        flex-direction: column
        width: 360px
        height: 560px
        background-color: #F1871A
        border-radius: 60px

        > .image
          height: 100px
          margin-top: 60px

        > .title
          typography: 'Nexa-Bold'
          margin-top: 10px
          font-size: 35px
          color: $colorTypographyLight

        > .description
          typography: 'Nexa-Light'
          margin-top: 25px
          font-size: 22px
          color: $colorTypographyLight
          width: 260px
          text-align: center

        > .button
          margin-top: auto
          margin-bottom: 50px
</style>
