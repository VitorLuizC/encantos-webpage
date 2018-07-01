<template>
  <carousel-container
    easing="ease-out"
    navigation-enabled
    :per-page="1"
    :pagination-enabled="false"
    navigation-next-label="V"
    navigation-prev-label="V"
  >
    <carousel-item>
      <layout-banner-image
        :link="{ name: 'Home' }"
        :image="require('@/assets/images/Banner-1.png')"
        description="Venha nos conhecer"
      />
    </carousel-item>
    <carousel-item>
      <layout-banner-image
        :link="{ name: 'Volunteering' }"
        :image="require('@/assets/images/Banner-2.png')"
        description="Seja um voluntário"
      />
    </carousel-item>
    <carousel-item>
      <layout-banner-image
        :link="{ name: 'Donations' }"
        :image="require('@/assets/images/Banner-3.png')"
        description="Faça uma doação"
      />
    </carousel-item>
  </carousel-container>
</template>

<script>
  import {
    Carousel as CarouselContainer,
    Slide as CarouselItem
  } from 'vue-carousel';
  import LayoutBannerImage from '@/components/LayoutBannerImage';

  export default {
    components: { CarouselContainer, CarouselItem, LayoutBannerImage }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/typography'
  @import '~@/assets/styles/colors'

  .VueCarousel > .VueCarousel-navigation
    > .VueCarousel-navigation-button
      background-color: transparent !important
      background-image: none        !important
      typography: 'Nexa-Light'      !important
      font-size: 115pt              !important
      color: $colorTypographyLight  !important

    > .VueCarousel-navigation-prev
      left: 120px                               !important
      transform: translateY(-50%) rotate(90deg) !important

    > .VueCarousel-navigation-next
      right: 120px                               !important
      transform: translateY(-50%) rotate(270deg) !important
</style>
