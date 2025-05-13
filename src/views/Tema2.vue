<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Indicadores de gestión y los KPI financieros
    
    .BGM03.px-md-5.px-4.mb-5
      p Los indicadores de gestión son herramientas clave para medir el rendimiento operativo de una organización y evaluar el cumplimiento de sus objetivos estratégicos. Coral & Gudiño (2014), explican que estos indicadores permiten cuantificar variables como la eficiencia, la eficacia, la productividad y la calidad en los procesos internos. Al utilizar estos datos de manera sistemática, las empresas pueden identificar fortalezas, debilidades y oportunidades de mejora continua en su operación diaria.
      .row.justify-content-center.align-items-center
        .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
          p Dentro de estos indicadores financieros, como se mencionó, los KPI, se destacan por su utilidad en el monitoreo del comportamiento económico de la empresa. Retomando a García (2009), los KPI financieros ofrecen una visión cuantitativa del cumplimiento de metas financieras como el control de costos, el nivel de endeudamiento, la rentabilidad sobre la inversión, entre otros. Estos indicadores se seleccionan estratégicamente para reflejar los aspectos más críticos del negocio y apoyar el proceso de toma de decisiones.
          p.mb-0 La correcta clasificación de los indicadores financieros en categorías como liquidez, rentabilidad, endeudamiento y actividad, facilita su interpretación y uso comparativo. Al respecto, Díaz (2006), enfatiza que estos indicadores no deben analizarse de forma aislada, sino en conjunto, para lograr una lectura integral de la situación financiera. Por ejemplo, una empresa puede mostrar buenos niveles de liquidez, pero si su rentabilidad es baja, podría estar desaprovechando recursos o enfrentando problemas en su modelo de negocio.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")

    p Por tanto, el uso de indicadores de gestión y KPI financieros, no solo contribuye al análisis de resultados pasados, sino que también permite proyectar escenarios futuros, establecer alertas tempranas y definir metas alcanzables. Como lo señala Ortiz (2011), su verdadero valor está en la capacidad que tienen para guiar decisiones informadas, basadas en evidencia y alineadas con la estrategia organizacional. En este contexto, su integración en los informes financieros resulta indispensable para una evaluación profunda del desempeño empresarial.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Indicadores de gestión
    
    p.mb-5 Son herramientas fundamentales, tanto cuantitativas como cualitativas, que permiten medir el desempeño de una organización en relación con sus objetivos estratégicos, tácticos y operativos. A través de estos indicadores, las empresas pueden monitorear y evaluar la eficacia de sus procesos internos, la eficiencia en la utilización de los recursos y la calidad de los resultados obtenidos. Los indicadores actúan como señales de alerta que orientan sobre el cumplimiento de las metas y permiten identificar de manera oportuna las desviaciones que pueden comprometer el logro de los objetivos organizacionales.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img02.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El propósito principal de los indicadores de gestión, es facilitar la toma de decisiones informadas, basadas en datos objetivos y actualizados, en lugar de percepciones subjetivas. Un buen sistema de indicadores, permite a los directivos y responsables de áreas, realizar un seguimiento permanente de los avances, detectar oportunidades de mejora, implementar acciones correctivas de manera anticipada y, en general, fortalecer la gestión organizacional. Asimismo, su aplicación contribuye a fomentar una cultura de resultados dentro de la organización, donde el desempeño de cada área y de cada colaborador se mide de acuerdo con parámetros claros y consensuados.
    
    p.mb-5 Para que los indicadores de gestión sean efectivos, deben cumplir con ciertas características básicas: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema2/img03.svg', alt="Imagen decorativa")
        .px-lg-5.px-4
          h4.text-center Ser específicos
          p.mb-0 Deben medir un aspecto claramente definido y relevante para la operación. 
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema2/img04.svg', alt="Imagen decorativa")
        .px-lg-5.px-4
          h4.text-center Ser medibles 
          p.mb-0 De manera objetiva y alcanzables dentro de los recursos y capacidades de la organización, relevantes en el contexto de los objetivos estratégicos y con un marco temporal definido que permita evaluar la evolución en el tiempo. 

    p Esta estructura garantiza que los indicadores no solo reflejen la situación actual, sino que también sirvan como base para la planificación futura y la mejora continua.
    p.mb-5 El diseño adecuado de los indicadores, debe abarcar todas las áreas críticas de la organización: producción, ventas, atención al cliente, gestión del talento humano, finanzas, entre otras. Por ejemplo, en las siguientes áreas puede realizarse lo siguiente: 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Comercial
              p.mb-0 El porcentaje de cumplimiento de las metas de ventas.
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Producción
              p.mb-0 El nivel de eficiencia en el uso de insumos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 A través del monitoreo sistemático de estos indicadores, es posible identificar desviaciones respecto a los estándares esperados, corregir fallos en los procesos y ajustar planes de acción en tiempo real, optimizando así el desempeño global de la organización.

    p.mb-5 Los indicadores de gestión, cumplen un rol esencial en la rendición de cuentas, al proporcionar información objetiva y verificable sobre los resultados alcanzados en comparación con los planes establecidos. Además, funcionan como herramientas de motivación y reconocimiento para los equipos de trabajo, al visibilizar los logros individuales y colectivos, reforzando el sentido de pertenencia y compromiso hacia la organización. Una gestión basada en indicadores, no solo mejora los resultados operativos, sino que también: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
            .col-lg-8
              ul.lista-ul--color
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-arrow-alt-circle-right.tcp
                  | Fortalece el liderazgo interno.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-arrow-alt-circle-right.tcp
                  | Promueve la transparencia organizacional.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-arrow-alt-circle-right.tcp
                  | Consolida una cultura orientada a la excelencia y a la mejora continua.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Tipos y clasificación
    
    p.mb-5 Los indicadores de gestión se clasifican según el tipo de resultado que permiten evaluar dentro de los procesos organizacionales. Entre los más utilizados se encuentran los indicadores de eficiencia, eficacia, productividad y calidad. Esta clasificación permite abordar el análisis desde distintas perspectivas, lo que facilita una visión integral del desempeño empresarial y una toma de decisiones más acertada. A continuación, se relaciona lo que tiene que ver con cada uno:

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Indicadores de eficiencia") 
            p Miden la relación entre los recursos utilizados y los resultados obtenidos. Su objetivo es evaluar si la organización está haciendo un uso adecuado de sus recursos como tiempo, dinero, personal o materiales para generar un determinado resultado. 
            .tarjeta.tarjeta--blanca.p-4.mb-2
              p Por ejemplo, un indicador de eficiencia podría ser el costo por unidad producida o el tiempo promedio de atención al cliente.
              p.mb-0 Un buen nivel de eficiencia implica lograr los resultados con el menor consumo posible de recursos.
            imagen
              img(src='@/assets/curso/tema2/img08.jpg' alt="Imagen decorativa")
          div(numero="2" titulo="Indicadores de eficacia") 
            p Se enfocan en el grado de cumplimiento de los objetivos propuestos. A diferencia de la eficiencia, no consideran el uso de recursos, sino si se logró o no lo que se esperaba. 
            .tarjeta.tarjeta--blanca.p-4.mb-2
              p Un ejemplo de este tipo de indicador, sería el porcentaje de cumplimiento del plan de ventas o el número de proyectos finalizados dentro del plazo estipulado. 
              p.mb-0 La eficacia apunta directamente a los resultados, sin importar cómo se alcanzaron.
            imagen
              img(src='@/assets/curso/tema2/img09.jpg' alt="Imagen decorativa")
          div(numero="3" titulo="Indicadores de productividad") 
            p Combinan elementos de eficiencia y eficacia, al medir la cantidad de productos o servicios generados en relación con los recursos utilizados.
            .tarjeta.tarjeta--blanca.p-4.mb-2
              p Por ejemplo, la cantidad de unidades producidas en una planta, con relación a las horas-hombre.
              p.mb-0 Son muy útiles para evaluar el rendimiento de áreas operativas. 
            imagen
              img(src='@/assets/curso/tema2/img10.jpg' alt="Imagen decorativa")
          div(numero="4" titulo="Indicadores de calidad") 
            p Se centran en la satisfacción del cliente y en el cumplimiento de estándares establecidos. 
            .tarjeta.tarjeta--blanca.p-4.mb-2
              p Un ejemplo de ello, podría ser la cantidad de productos fabricados, de los cuales alguna cierta cantidad presentaría defectos.
              p.mb-0 Evalúan aspectos como el número de errores, devoluciones o quejas y son fundamentales para garantizar procesos sostenibles y alineados con las expectativas del mercado.
            imagen
              img(src='@/assets/curso/tema2/img11.jpg' alt="Imagen decorativa")
            
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Aplicación en la evaluación del desempeño empresarial
    
    p La aplicación de los indicadores de gestión en la evaluación del desempeño empresarial, permite obtener una visión clara, objetiva y estructurada del funcionamiento interno de la organización. Estos indicadores actúan como herramientas de control y seguimiento, facilitando la identificación de avances, retrocesos o desviaciones frente a las metas establecidas. Al utilizarlos de manera sistemática, las empresas pueden medir no solo el cumplimiento de sus planes, sino también la efectividad de sus estrategias operativas y administrativas.
    p.mb-5 En la práctica, los indicadores de eficiencia, eficacia, productividad y calidad, permiten hacer un diagnóstico del rendimiento de las diferentes áreas de la organización. Por ejemplo: 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img12.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Área de producción
              p.mb-0 Se pueden analizar tiempos de ciclo, niveles de desperdicio o unidades producidas por hora.
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img13.svg' alt="Imagen decorativa")
          .tarjeta.BG01
            .p-4
              h4 Área comercial
              p.mb-0 Se pueden observar tasas de conversión, cumplimiento de metas de ventas o niveles de satisfacción del cliente. 

    p Esta aplicación sectorizada, permite detectar puntos críticos y establecer acciones correctivas o de mejora específicas.
    p.mb-5 Adicionalmente, los indicadores: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .BG02.px-lg-5.px-4.py-4
          .row.justify-content-center.align-items-center
            .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
              ul.lista-ul--color
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-arrow-alt-circle-right.tcp
                  | Permiten establecer comparaciones entre periodos, sedes, equipos o incluso con referentes del sector, lo que enriquece el análisis del desempeño. 
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-arrow-alt-circle-right.tcp
                  | Esta visión comparativa facilita la toma de decisiones estratégicas, como reasignación de recursos, cambios en procesos, ajustes en el modelo de negocio o rediseño de objetivos. 
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-arrow-alt-circle-right.tcp
                  | De esta manera, los indicadores se convierten en una guía para mejorar la competitividad y sostenibilidad de la empresa.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img14.svg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2.mb-4(data-aos="fade-right")
        p Otro beneficio importante de su aplicación, es que fomentan la cultura de la medición y la gestión basada en resultados. Cuando los colaboradores conocen los indicadores con los que serán evaluados y comprenden cómo se calculan, es más fácil alinear los esfuerzos individuales y colectivos con los objetivos de la organización. Esto también fortalece la transparencia y la rendición de cuentas dentro del ambiente laboral.
        p.mb-0 Igualmente, la aplicación de estos indicadores, es fundamental para dirigir la organización con base en información real y actualizada. Más allá de ser simples métricas, estos indicadores permiten tomar decisiones oportunas, impulsar mejoras continuas y garantizar que los recursos se utilicen de manera eficiente para alcanzar los resultados esperados. Son, en esencia, el puente entre la planeación estratégica y la ejecución operativa.
      .col-lg-5.col-10.order-lg-2.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img15.png' alt="Imagen decorativa")
      .col-lg-10.order-3
        .cajon.color-secundario.p-4
          p.mb-0 Una vez analizado el papel de los indicadores de gestión en el control operativo y la evaluación del desempeño interno, es fundamental incorporar los indicadores financieros para obtener una visión más amplia y objetiva del estado económico de la organización.
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Indicadores financieros

    figure.mb-5
      img(src='@/assets/curso/tema2/img16.png' alt="Imagen decorativa")
    
    p Son herramientas analíticas fundamentales que permiten evaluar la situación económica y el desempeño financiero de una organización en distintos momentos del tiempo. A través del análisis de las relaciones entre cuentas específicas de los estados financieros, estos indicadores ofrecen una visión clara sobre aspectos como la liquidez, la rentabilidad, el endeudamiento y la actividad. Su correcta interpretación resulta indispensable para la toma de decisiones estratégicas, ya que permiten diagnosticar la estabilidad económica de la empresa y anticipar posibles riesgos o áreas de oportunidad.
    p.mb-5 Cada indicador financiero, proporciona información específica que, cuando se interpreta adecuadamente, permite comprender diferentes dimensiones del negocio. Por ejemplo: 

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center Indicadores de liquidez
          p.text-center.mb-0 Miden la capacidad de la empresa para cumplir sus obligaciones de corto plazo.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center Indicadores de rentabilidad
          p.text-center.mb-0 Evalúan la eficiencia en la generación de utilidades.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center Indicadores de endeudamiento
          p.text-center.mb-0 Analizan el nivel de apalancamiento financiero.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-terciario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center Indicadores de actividad
          p.text-center.mb-0 Permiten conocer qué tan eficientemente se utilizan los activos para generar ingresos.

    p Esta clasificación facilita una lectura integral del estado financiero y operativo de la organización.
    p.mb-5 Estos indicadores se calculan principalmente, a partir de datos extraídos del balance general, el estado de resultados y el flujo de efectivo. Al respecto: 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img17.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.BG04.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.tcab.fa-2x.me-3
                i.fas.fa-caret-down.tcab.fa-2x.me-3
              h4.mb-0 El balance general
            p.text-center.mb-0 Proporciona información sobre los activos, pasivos y patrimonio. 
      .col-xl-4.col-lg-6.col-sm-8.col-10.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img18.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.BG04.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.tcab.fa-2x.me-3
                i.fas.fa-caret-down.tcab.fa-2x.me-3
              h4.mb-0 El estado de resultados
            p.text-center.mb-0 Mide el desempeño económico, a través de los ingresos, costos y utilidades.
      .col-xl-4.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img19.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.BG04.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.tcab.fa-2x.me-3
                i.fas.fa-caret-down.tcab.fa-2x.me-3
              h4.mb-0 El flujo de efectivo
            p.text-center.mb-0 Muestra los movimientos reales de dinero. 

    p.mb-5 Utilizar estos tres estados contables, garantiza que los indicadores financieros reflejen fielmente la realidad económica de la empresa, permitiendo un análisis más riguroso y fundamentado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2.mb-4(data-aos="fade-right")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-0 La aplicación adecuada de los indicadores financieros, no solo permite evaluar la situación actual de la empresa, sino que también facilita el monitoreo del cumplimiento de metas presupuestales y la efectividad de los planes estratégicos. A través de su análisis periódico, es posible identificar tendencias positivas que deben fortalecerse, así como señales de alerta que requieren atención inmediata. Esta capacidad de anticipación resulta esencial para la toma de decisiones ágiles en un entorno empresarial cada vez más dinámico y competitivo.
      .col-lg-3.col-6.order-lg-2.order-1.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img20.svg' alt="Imagen decorativa")
      .col-lg-10.order-3
        p Adicionalmente, los indicadores financieros cumplen un rol central en la evaluación comparativa o #[em benchmarking]. Esta práctica consiste en comparar los resultados de la empresa con sus propios registros históricos, con las metas presupuestadas o con otras organizaciones del mismo sector económico. La comparación permite no solo medir la evolución de la empresa a lo largo del tiempo, sino también identificar su posición competitiva en el mercado. Gracias a este enfoque, se facilita el diseño de estrategias correctivas o preventivas que permitan cerrar brechas de desempeño y mejorar la ventaja competitiva.
        .cajon.color-primario.p-4
          p.mb-0 En síntesis, los indicadores financieros transforman datos contables en conocimiento estratégico para la gestión empresarial. Su análisis técnico y cuantitativo permite fundamentar decisiones en áreas como la inversión, el financiamiento, la operación y la distribución de utilidades. Además, su seguimiento constante es clave para asegurar la sostenibilidad financiera, fortalecer la transparencia ante los grupos de interés y garantizar la competitividad de la organización en mercados cada vez más exigentes y cambiantes.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Clasificación
    
    p Los indicadores financieros se agrupan en distintas categorías según el aspecto del desempeño financiero que permiten analizar. Esta clasificación facilita su interpretación y aplicación en el diagnóstico empresarial. Las categorías más comunes como se mencionó previamente, son: indicadores de liquidez, endeudamiento, rentabilidad y actividad. Cada una de ellas ofrece una perspectiva específica sobre el estado financiero de la organización y permite tomar decisiones informadas en torno a su sostenibilidad y eficiencia operativa.
    p.mb-5 A continuación, se explica más a fondo cada una:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img21.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
          div(titulo="Indicadores de liquidez")
            p Permiten conocer la capacidad de una empresa para cumplir con sus obligaciones de corto plazo; es decir, si cuenta con los recursos suficientes para pagar sus deudas en el tiempo estipulado. 
            p.mb-0 Entre los ejemplos más utilizados se encuentran la razón corriente (activo corriente / pasivo corriente) y la prueba ácida (activo corriente menos inventarios / pasivo corriente). Estos indicadores son clave para los acreedores, ya que revelan el nivel de solvencia inmediata de la empresa.
          div(titulo="Indicadores de endeudamiento")
            p Miden el nivel de obligaciones financieras que posee la empresa frente a sus activos o a su patrimonio. Ayudan a determinar qué tan apalancada está la organización y si su estructura financiera es sólida. 
            p.mb-0 Algunos de los ejemplos más comunes son el nivel de endeudamiento total (pasivo total / activo total) y la deuda sobre patrimonio (pasivo total / patrimonio). Una empresa con alto endeudamiento puede enfrentar mayores riesgos financieros, especialmente en escenarios de baja liquidez o alta tasa de interés.
          div(titulo="Indicadores de rentabilidad")
            p Permiten analizar qué tan eficiente es la empresa en la generación de utilidades, a partir de sus ventas, activos o patrimonio. Estos indicadores son muy valorados por los inversionistas y socios, ya que revelan si el negocio está generando valor económico. 
            p.mb-0 Ejemplos representativos son el margen neto (utilidad neta / ventas), el retorno sobre activos (ROA) y el retorno sobre patrimonio (ROE). Una rentabilidad creciente suele ser señal de una gestión eficiente y un modelo de negocio saludable.
          div(titulo="Indicadores de actividad o rotación")
            p Reflejan la eficiencia con la que la empresa utiliza sus activos para generar ingresos. Evalúan la frecuencia con la que se renuevan inventarios, se cobran las cuentas por cobrar o se pagan las cuentas por pagar. 
            p.mb-0 Ejemplos incluyen la rotación de cartera (ventas / cuentas por cobrar promedio), la rotación de inventarios (costo de ventas / inventario promedio) y la rotación de activos totales (ventas / activos totales).

    .BGM03.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p Cada uno de estos indicadores debe interpretarse dentro de un contexto específico, considerando la naturaleza del negocio, el comportamiento del sector y las políticas internas de la organización. Por ejemplo, un índice de liquidez bajo no siempre implica un problema si la empresa tiene ingresos constantes y controlados; o una alta rotación de inventario puede ser deseable en empresas con productos perecederos, pero no en industrias con ciclos de producción largos.
          p Además, es fundamental complementar el análisis de los indicadores con una evaluación cualitativa de la gestión empresarial. Factores como la calidad del equipo gerencial, la estrategia competitiva, el clima económico y la evolución del mercado también influyen en la interpretación de los resultados financieros. Por eso, el análisis de indicadores debe integrarse dentro de un enfoque más amplio de evaluación organizacional.
          p.mb-0 En resumen, clasificar y aplicar correctamente los indicadores financieros permite a las empresas tener una visión clara y segmentada de su situación. Esta información es indispensable para planear, controlar y tomar decisiones estratégicas que apunten a la sostenibilidad y crecimiento del negocio. Un análisis riguroso y constante de estas métricas se traduce en una gestión financiera proactiva, orientada a generar valor y mitigar riesgos.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img22.svg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Interpretación de resultados y análisis comparativo
    
    p.mb-5 La interpretación de los resultados financieros, consiste en analizar el significado detrás de los valores obtenidos en los indicadores, más allá de su simple cálculo. Este proceso implica entender qué revelan las cifras sobre la situación económica de la empresa y cómo impactan en su desempeño global. Interpretar adecuadamente los resultados permite tomar decisiones informadas, identificar fortalezas, anticipar riesgos y formular estrategias de mejora.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img23.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Una parte esencial de esta interpretación es contextualizar cada indicador. Por ejemplo, una razón de endeudamiento del 70 % puede ser razonable en una industria intensiva en capital, pero preocupante en una empresa de servicios. Por ello, los valores obtenidos deben analizarse en función del sector económico, el tamaño de la empresa, el comportamiento histórico y las expectativas del mercado. Además, es importante considerar las políticas internas de la organización y los objetivos definidos en su planeación financiera.
          br
          br
          | El análisis comparativo complementa la interpretación, ya que permite evaluar los resultados actuales frente a distintos referentes. Al respecto, se tienen en cuenta los siguientes enfoques: 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema2/img27.svg", alt="Imagen decorativa").img230
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/img24.svg", alt="Imagen decorativa").img100
            .col
              .h4 Comparación interanual
              p.mb-0 Uno de los enfoques más comunes es la comparación interanual, que permite observar tendencias, identificar variaciones relevantes y evaluar la evolución financiera de la empresa en el tiempo. 
        .crd.crd--avatarHorizontal.BGB05.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/img25.svg", alt="Imagen decorativa").img100
            .col
              .h4 Benchmarking
              p.mb-0 También se puede realizar un benchmarking, comparando los indicadores con los de empresas similares del mismo sector, lo que permite establecer parámetros de desempeño competitivo.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/img26.svg", alt="Imagen decorativa").img100
            .col
              .h4 Metas presupuestadas o proyecciones financieras
              p.mb-0 Este es otro tipo de comparación útil realizado, ya que este análisis permite evaluar si la empresa está cumpliendo con sus objetivos, si existen desviaciones y cuáles son sus posibles causas.

    p En este contexto, la interpretación de resultados no solo sirve para comprender el pasado y el presente financiero, sino también para proyectar escenarios futuros y ajustar el rumbo estratégico.
    p.mb-5 Interpretar los resultados y realizar un análisis comparativo no es un ejercicio estático, sino una herramienta dinámica que facilita la gestión financiera. Más allá de calcular ratios, se trata de transformar los datos en información útil y significativa, que sirva de base para la toma de decisiones, el control de gestión y la mejora continua del desempeño organizacional.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.BG05.px-lg-5.py-4
          .row.justify-content-center
            .col-lg-2.col-3.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img28.svg' alt="Imagen decorativa")
            .col-lg-10.col-9(data-aos="fade-left")
              p.mb-0 Tanto los indicadores de gestión como los financieros, proporcionan información valiosa por separado; sin embargo, su verdadero poder analítico se alcanza al integrarlos en un enfoque de análisis integral, que permita identificar causas, efectos y relaciones entre los distintos aspectos del desempeño organizacional.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
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
