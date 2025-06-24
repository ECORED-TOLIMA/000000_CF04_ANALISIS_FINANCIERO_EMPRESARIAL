<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo desarrolla en el aprendiz competencias clave para analizar, estructurar y presentar informes financieros, integrando indicadores de gestión y financieros. A través de un enfoque técnico y estratégico, se busca que el aprendiz interprete resultados económicos, construya reportes con base en normativas internas y externas, además que comunique hallazgos de manera efectiva, adaptándolos a distintos públicos organizacionales.
    p Los contenidos incluyen el estudio de indicadores de eficiencia, rentabilidad, endeudamiento y actividad, así como su valoración cruzada con indicadores de gestión. Se profundiza en la redacción técnica, la presentación visual de datos, mediante herramientas como Excel y PowerPoint y en la importancia de ajustar los informes a normativas contables vigentes. El enfoque práctico se fortalece mediante actividades como análisis comparativo, simulaciones y diseño de informes aplicados.
    p.mb-5 Finalmente, el componente enfatiza la utilidad del informe financiero como una herramienta de toma de decisiones. Se promueve una comunicación clara, coherente y transparente de los resultados, considerando las expectativas de gerencia, socios e instituciones de control. Esta formación proporciona al aprendiz una base sólida para contribuir a la sostenibilidad y mejora continua de la organización mediante una gestión financiera basada en evidencia.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Evaluación y generación de informes financieros, se da a conocer cómo por medio de la evaluación financiera, se aplican indicadores de gestión y financieros; para luego realizar un análisis de la situación presentada y finalizar con la elaboración del informe financiero que se realiza, de acuerdo al tipo de público al que se desea llegar.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
