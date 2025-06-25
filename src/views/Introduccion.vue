<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p La generación de informes financieros es una actividad clave dentro del proceso de análisis financiero empresarial, ya que permite presentar de forma clara, técnica y estructurada, los resultados obtenidos, a partir de indicadores de gestión y financieros. Es así, que este componente formativo, busca fortalecer las competencias necesarias para interpretar la información financiera y transformarla en insumos útiles para la toma de decisiones.
        p Durante el desarrollo del componente, el aprendiz identificará los diferentes tipos de informes financieros, su estructura, criterios técnicos de redacción y herramientas tecnológicas que facilitan su presentación. Asimismo, aplicará buenas prácticas de comunicación financiera y adaptará los informes a distintos públicos y normativas vigentes, contribuyendo a una gestión organizacional transparente, estratégica y basada en resultados.
        p.mb-0 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img01.png' alt="Imagen decorativa")
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/k7Cd9Bdrgck?si=GjHEYMuT5ttXXTR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
