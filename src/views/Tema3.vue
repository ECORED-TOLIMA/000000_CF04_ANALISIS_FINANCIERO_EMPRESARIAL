<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis integral de la situación financiera
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")

    p Consiste en evaluar de manera conjunta los distintos aspectos económicos y operativos de una organización, para obtener una visión global y precisa de su desempeño. A diferencia del análisis aislado de indicadores, esta visión holística permite entender cómo interactúan los diferentes factores financieros y de gestión, y cómo inciden en la estabilidad, rentabilidad y sostenibilidad del negocio.
    p.mb-5 Este tipo de análisis combina la lectura entre:

    .row.justify-content-center.mb-5
      .col-lg-10.d-lg-flex.d-none(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img02.svg', alt="Imagen decorativa")
          .tarjeta.BG01.p-3(x="19%" y="27%" numero="+")
            p.mb-0 Como liquidez, rentabilidad y endeudamiento.
          .tarjeta.BG01.p-3(x="78.5%" y="23%" numero="+")
            p.mb-0 Como eficiencia, productividad y calidad.
      .col.d-lg-none.d-flex.mb-5
        figure
          img(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")

    p Al cruzar esta información, es posible identificar relaciones causa-efecto entre los resultados operativos y las cifras contables. Por ejemplo, una baja rentabilidad puede estar relacionada con una alta rotación de personal, problemas de calidad en el producto o ineficiencias en la cadena de suministro.
    p.mb-5 Realizar un análisis integral permite detectar oportunidades de mejora que no serían evidentes en un análisis parcial. Además, fortalece la capacidad de anticiparse a riesgos y construir estrategias más sólidas, ya que se basa en una lectura más completa de la realidad empresarial. Este enfoque es especialmente útil en procesos de diagnóstico financiero, planificación estratégica o toma de decisiones gerenciales.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En resumen, el análisis integral de la situación financiera, convierte la información dispersa en un sistema de indicadores conectados entre sí, facilitando una evaluación coherente, profunda y orientada a la acción. Es una herramienta poderosa para directivos y analistas que necesitan entender no solo qué está ocurriendo en la empresa, sino por qué está ocurriendo y qué se puede hacer para mejorar los resultados.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Valoración cruzada de los indicadores financieros y de gestión
    
    .BGM03.px-md-5.px-4.mb-5
      p.mb-5 La valoración cruzada de indicadores financieros y de gestión, es una metodología de análisis que consiste en interrelacionar diferentes tipos de indicadores para obtener una comprensión más profunda del desempeño empresarial. Este enfoque permite identificar no solo los resultados finales, sino también las causas internas que los generan, relacionando aspectos operativos con variables contables. De esta manera, se logra una lectura más estratégica y completa de la realidad organizacional.

      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          p Por ejemplo:
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check.tcp
              | Un análisis financiero puede mostrar una disminución en el margen de utilidad, lo que inicialmente parecería un problema puramente contable.
            li(style="margin-bottom: 2px")
              i.fas.fa-check.tcp
              | Sin embargo, al cruzar esta información con indicadores de gestión, podría evidenciarse que esta disminución está relacionada con un aumento en los tiempos de producción o una mayor tasa de devoluciones por defectos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check.tcp
              | Esto demuestra que un problema de rentabilidad puede tener su origen en la eficiencia operativa o la calidad del producto.

    p.mb-5 Este tipo de valoración cruzada, también permite validar la coherencia entre lo que muestran los estados financieros y lo que realmente está sucediendo en la operación diaria. Si un indicador de liquidez muestra estabilidad, pero los indicadores de gestión revelan atrasos en procesos o aumento de quejas de clientes, podría existir un riesgo latente que aún no se refleja en las cifras financieras. Por eso, el cruce de indicadores actúa como una alerta temprana ante desequilibrios estructurales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p.mb-0 Además, la combinación de indicadores, ayuda a priorizar acciones y recursos. Una empresa con bajo índice de rotación de inventarios y altos costos operativos, puede identificar que su rentabilidad está siendo afectada por una gestión ineficiente de existencias. Al reconocer esta relación, la organización puede intervenir directamente en la causa del problema, optimizando procesos logísticos antes de implementar estrategias más costosas como financiamiento externo o reducción de personal.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img05.svg' alt="Imagen decorativa")

    p La valoración cruzada también fortalece los informes financieros, ya que permite acompañar los análisis cuantitativos con explicaciones cualitativas más completas. Esta integración mejora la calidad de la información que se presenta a los directivos, inversionistas y demás partes interesadas, facilitando la toma de decisiones con base en datos contextualizados y no en cifras aisladas. Así, los informes dejan de ser meramente informativos para convertirse en herramientas de gestión.
    p.mb-5 En definitiva, cruzar los indicadores financieros y de gestión, aporta valor agregado al análisis empresarial, al permitir establecer conexiones entre los resultados económicos y los procesos internos. Esta práctica: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
            .col-lg-8
              ul.lista-ul--color
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | Promueve una visión sistémica de la organización.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | Fomenta la cultura de la medición.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-check.tcp
                  | Fortalece la capacidad analítica de los equipos responsables del control financiero y operativo.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Relación con la toma de decisiones organizacionales
      
    p.mb-5 La información obtenida, a partir de los indicadores financieros y de gestión, es fundamental para la toma de decisiones organizacionales, ya que proporciona una base objetiva para evaluar el estado actual de la empresa y proyectar acciones futuras. Cuando los datos son analizados de manera adecuada y oportuna, permiten detectar oportunidades, anticipar riesgos y definir estrategias alineadas con los objetivos empresariales. De esta forma, los indicadores se convierten en aliados clave del liderazgo corporativo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img07.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La toma de decisiones en las organizaciones, implica elegir entre diferentes alternativas, con el fin de optimizar recursos, aumentar la rentabilidad o mejorar la eficiencia. Para lograrlo, es necesario contar con información confiable que revele tanto los resultados financieros como el comportamiento operativo. Por ejemplo, una decisión de inversión en maquinaria no solo debe basarse en la disponibilidad de recursos (liquidez), sino también en indicadores de productividad, tiempo de ciclo o capacidad instalada.

    p.mb-5 Los indicadores también cumplen un rol estratégico en la planeación. A través del análisis histórico y comparativo, la empresa puede tener en cuentas las siguientes acciones: 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img08.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Metas
              p.mb-0 Establecer metas realistas y medibles.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Presupuestos
              p.mb-0 Diseñar presupuestos ajustados a su realidad financiera.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img10.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Recursos
              p.mb-0 Asignar recursos a las áreas con mayor potencial de impacto. 
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img11.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Seguimiento
              p.mb-0 Hacer seguimiento a la ejecución de los planes y realizar ajustes cuando los resultados no son los esperados.
    
    .BGM03.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
          p Otra ventaja importante es que los indicadores facilitan la toma de decisiones descentralizadas. Al contar con información clara y estructurada, los líderes de cada área pueden tomar decisiones más acertadas y alineadas con la estrategia general. Esto fortalece la autonomía, acelera los tiempos de respuesta y mejora la eficiencia en la gestión operativa. La transparencia en los datos también promueve la rendición de cuentas y la cultura de resultados.
          p.mb-0 La conexión entre los indicadores y la toma de decisiones organizacionales es directa y determinante. Cuando una empresa basa sus decisiones en datos confiables y bien interpretados, aumenta sus probabilidades de éxito, mejora su capacidad de adaptación al entorno y optimiza el uso de sus recursos. Por ello, la gestión basada en indicadores no es solo una técnica contable, sino una filosofía de gestión orientada a resultados.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img12.png' alt="Imagen decorativa")
      
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 El análisis integral de los resultados financieros y operativos debe plasmarse en un informe estructurado, que no solo comunique cifras, sino que genere conocimiento útil para la toma de decisiones. De allí la importancia de dominar la elaboración de informes financieros claros, técnicos y estratégicos.

</template>

<script>
export default {
  name: 'Tema3',
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
