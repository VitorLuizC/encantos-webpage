<template>
  <leafeon-screen
    class="CoursesScreen"
    title="Cursos"
    subtitle="Nossos cursos com dias e horários. Entre em contato para mais informações."
  >
    <div class="courses">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="course"
      >
        <img
          class="image"
          :src="course.image"
          :alt="'Curso de ' + course.title"
        />
        <h3 class="title">{{ course.title }}</h3>
        <p class="information">
          <img class="icon" src="~@/assets/icons/Calendar.png" />
          <span class="content">{{ course.date }}</span>
        </p>
        <p class="information">
          <img class="icon" src="~@/assets/icons/Watch.png" />
          <span class="content" v-html="course.hour"></span>
        </p>
      </div>
    </div>
  </leafeon-screen>
</template>

<script>
  import LeafeonButton from '@/components/Leafeon/LeafeonButton';
  import LeafeonScreen from '@/components/Leafeon/LeafeonScreen';

  const courses = [
    {
      image: require('@/assets/images/Course-1.png'),
      title: 'Violão',
      date: 'Sábado',
      hour: 'Iniciante: 17h00<br>' +
            'Intermediário: 18h00<br>' +
            'Avançado: 19h00'
    },
    {
      image: require('@/assets/images/Course-2.png'),
      title: 'Coral',
      date: 'Segunda',
      hour: '15h00'
    },
    {
      image: require('@/assets/images/Course-3.png'),
      title: 'Cordas',
      date: 'Segunda e quarta',
      hour: '19h00'
    },
    {
      image: require('@/assets/images/Course-4.png'),
      title: 'Ballet',
      date: 'Sábado',
      hour: '1º ano: 09h45'
    },
    {
      image: require('@/assets/images/Course-5.png'),
      title: 'Teatro',
      date: 'Sexta',
      hour: '19h00'
    },
    {
      image: require('@/assets/images/Course-6.png'),
      title: 'Piano',
      date: 'Sábado',
      hour: '12h30'
    },
  ];

  export default {
    components: { LeafeonButton, LeafeonScreen },
    data () {
      return {
        courses
      };
    }
  };
</script>

<style lang="stylus">
  @import '~@/assets/styles/colors'
  @import '~@/assets/styles/typography'

  .CoursesScreen
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center

    > .courses
      display: flex
      flex-wrap: wrap
      align-items: center
      width: 760px

      > .course:nth-child(3n + 2)
      > .course:nth-child(3n + 3)
        margin-left: 50px

      > .course:nth-child(6n + 4)
      > .course:nth-child(6n + 5)
      > .course:nth-child(6n + 6)
        margin-top: 30px

      > .course
        width: 215px
        height: 270px
        border-radius: 30px
        box-shadow: 0 3px 6px rgba(#000000, .16)

        > .image
          width: 100%
          height: 140px
          margin-bottom: 10px

        > .title
          typography: 'Aristotelica'
          font-size: 30px
          margin-left: 40px
          line-height: 1

        > .information + .information
          margin-top: 10px

        > .information
          display: flex
          align-items: flex-start
          margin-left: 30px

          > .icon
            width: 20px
            height: auto

          > .content
            typography: 'Nexa-Light'
            font-size: 15px
            margin-left: 10px
            line-height: 1
            align-self: center
</style>
