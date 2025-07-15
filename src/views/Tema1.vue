<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación financiera

    p Antes de entrar a explicar lo que representan los indicadores presentes en la evaluación financiera, es importante dar un contexto.
    p.mb-5 La evaluación financiera es un proceso crítico para las organizaciones, pues les permite conocer su situación económica real, medir su desempeño y orientar decisiones estratégicas, basadas en información objetiva. Este proceso va más allá del simple análisis de cifras contables, implica la interpretación de variables que reflejan la eficiencia, rentabilidad y capacidad de generación de valor de una empresa.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Como propone Ortiz (2011), un análisis financiero riguroso debe integrar indicadores financieros y de gestión. Esta integración permite interpretar de forma precisa el comportamiento económico y operativo de la organización, proporcionando una visión sistémica del negocio. Al respecto, se tiene en cuenta lo siguiente en cada indicador:
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Indicadores financieros 
              p.mb-0 Revelan la salud económica mediante cifras de liquidez, rentabilidad y endeudamiento.
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Indicadores de gestión
              p.mb-0 Permiten evaluar el desempeño operativo interno en términos de eficiencia, productividad y calidad. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La combinación de ambos enfoques proporciona una visión integral de la organización, permitiendo detectar fortalezas, debilidades y riesgos potenciales.
    
    p.mb-5 Los informes financieros, como resultado del proceso de evaluación, se convierten en una herramienta fundamental para la comunicación de los hallazgos. No se trata simplemente de presentar cifras, sino de estructurar un documento técnico que facilite la comprensión de los resultados por parte de los diferentes públicos interesados: gerentes, socios, inversionistas y entes de control. Un informe bien elaborado debe incluir no solo los resultados obtenidos, sino también un análisis crítico de los mismos, la identificación de tendencias, la evaluación de riesgos y la formulación de recomendaciones estratégicas. Así, el informe financiero se transforma en un insumo vital para la planeación empresarial y la rendición de cuentas.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos="fade-right")
        .BG02.px-lg-5.py-4
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2
              p.mb-0 Sin una evaluación financiera sistemática, las organizaciones se exponen a decisiones erróneas, riesgos operativos y financieros, así como a una falta de sostenibilidad en el largo plazo. La evaluación no solo diagnostica, sino que orienta y fortalece la planeación estratégica, garantizando la viabilidad y el crecimiento de la empresa en mercados cada vez más dinámicos y exigentes.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img04.svg' alt="Imagen decorativa")
      .col-lg-10
        p.mb-5 Los indicadores de gestión, por su parte, desempeñan un papel crucial en la medición del desempeño operativo de la empresa. Coral & Gudiño (2014), destacan que estos indicadores permiten monitorear variables críticas, como: 
        .BG01.p-4(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
            .col-lg-6
               ul.lista-ul--color
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | La eficiencia en el uso de recursos.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | La eficacia en el cumplimiento de objetivos.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | La productividad de las operaciones.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | La calidad de los productos o servicios ofrecidos.
    
    p Su medición sistemática, permite identificar desviaciones respecto a las metas establecidas, promover la mejora continua y fortalecer los sistemas de control interno. El uso de indicadores de gestión bien diseñados, es indispensable para garantizar que las estrategias corporativas se traduzcan en resultados operativos concretos y medibles.
    p.mb-5 Dentro de los indicadores de gestión, los KPI (Key Performance Indicators) ocupan un lugar destacado. Estos indicadores clave, permiten focalizar la atención de la organización en las variables que realmente impactan el logro de sus objetivos estratégicos. Por ejemplo, un KPI en las áreas:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Comercial
              p.mb-0 Podría ser el porcentaje de cumplimiento de la meta de ventas.
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Producción
              p.mb-0 Podría ser el nivel de desperdicio de materiales.
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
      .col-lg-7.mb-4(data-aos="fade-left")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Según García (2009), la correcta selección y seguimiento de los KPI proporciona a la empresa una ventaja competitiva al permitir una gestión basada en datos y no en percepciones subjetivas. Además, facilita la rendición de cuentas y promueve una cultura organizacional orientada al logro. 
            p.mb-0 En paralelo, los indicadores financieros ofrecen información crucial sobre la situación económica de la empresa. A partir del análisis del balance general, el estado de resultados y el flujo de efectivo, es posible calcular indicadores de liquidez, rentabilidad, endeudamiento y actividad. Estos indicadores deben ser interpretados en contexto, comparándolos con los resultados históricos, los presupuestos establecidos y los referentes del sector. De esta manera, se puede evaluar si la empresa es capaz de cumplir sus obligaciones, generar utilidades sostenibles y utilizar eficientemente sus activos. 
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          p.mb-0 El análisis aislado de los indicadores, carece de sentido si no se integra en un marco de comparación y análisis cualitativo que explique las causas detrás de los números.
    
    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p La generación de informes financieros exige, por tanto, un enfoque integral que cruce los resultados financieros con los operativos. No basta con reportar que la rentabilidad ha disminuido; es necesario investigar si esa caída se debe a un aumento en los costos, a una reducción en las ventas o a ineficiencias operativas detectadas a través de los indicadores de gestión. En este sentido, García (2009), resalta que un buen informe debe incluir tanto análisis cuantitativo como cualitativo, utilizando herramientas como gráficos, tablas comparativas y comentarios explicativos que faciliten la interpretación de los resultados. La narrativa del informe debe ser clara, estructurada y orientada a facilitar la toma de decisiones estratégicas.
        p.mb-0 Un aspecto clave en la elaboración del informe financiero, es su adecuación a las políticas internas de la organización y a las normativas contables externas, como las Normas Internacionales de Información Financiera (NIIF). Coral & Gudiño (2014), sostienen que el cumplimiento de estos marcos normativos asegura la coherencia, transparencia y comparabilidad de la información financiera, lo cual es fundamental para la credibilidad de la empresa ante sus diferentes grupos de interés. Además, adaptar el lenguaje, el nivel de detalle y el formato del informe al tipo de público al que va dirigido —directivos, socios, entidades financieras o entes de control— maximiza su impacto y facilita su comprensión.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
