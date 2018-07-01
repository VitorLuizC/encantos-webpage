<template>
  <section class="HomeScreen">
    <home-description
      color="light"
      title="Sobre nós"
      description="Idealizado por Anísio Olimpio da Silva e Celeste Pereira da Silva,o Instituto Cultural Encantos foi desenvolvido a partir da visão que o ensino da arte podem transformar o ser humano em todo o entorno social. Oferecendo desde 2010 cursos com propostas artísticas."
    />
    <home-description
      color="contrast-1"
      title="Missão"
      description="Contribuir para o desenvolvimento dos cidadãos pertencentes a famílias moradoras da zona norte de São Paulo, que se encontram em situação de vulnerabilidade social, através da arte, cultura, desenvolvimento social e educacional."
    />
    <home-description
      color="contrast-2"
      title="Visão"
      description="Ser reconhecida como  uma Instituição de referência e excelência, para promoção da arte e cultura por meio de educação musical, contribuindo com o desenvolvimento de habilidades e competências, utilizadas como ferramentas para integração e inclusão social."
    />
    <home-description
      color="contrast-3"
      title="Valores"
      description="-Pertencimento<br />-Expressividade<br />-Fraternidade"
    />
  </section>
</template>

<script>
  import HomeDescription from '@/components/HomeDescription';

  export default {
    components: { HomeDescription }
  };
</script>
