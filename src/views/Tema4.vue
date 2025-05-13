<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elaboración de informes financieros
    
    p.mb-5 Teniendo claro todo lo que tiene que ver con los indicadores financieros y de gestión, el proceso final es la elaboración de este tipo de informes y por ello, se explica este aspecto en detalle.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La elaboración de informes financieros es un proceso estructurado que permite presentar de forma clara y ordenada los resultados del análisis financiero de una organización. Estos informes son herramientas fundamentales para comunicar la situación económica y el desempeño empresarial ante diferentes públicos, como la alta dirección, socios, inversionistas, entidades financieras o entes de control. Su correcta elaboración asegura que la información contable y de gestión se traduzca en conocimiento útil para la toma de decisiones estratégicas.
    
    p Un informe financiero debe tener una estructura coherente que facilite su comprensión. Generalmente, incluye una introducción que contextualiza el período analizado, un cuerpo central con los resultados y análisis de los indicadores clave, así como una sección de conclusiones y recomendaciones. También es importante incorporar gráficos, tablas y comparaciones que ayuden a visualizar la información de forma más intuitiva. La claridad en la redacción y la precisión en los datos, son fundamentales para garantizar la confiabilidad del documento.
    p.mb-5 La redacción técnica de un informe financiero exige rigor y objetividad. Además, debe tener en cuenta lo siguiente: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.BG01.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img02.svg', alt="Imagen decorativa")
        h4.text-center Precisión
        p.mb-0 Los términos utilizados deben ser precisos, evitando ambigüedades o interpretaciones subjetivas. 
      .col-md.tarjeta.BG05.p-5(data-aos="flip-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img03.svg', alt="Imagen decorativa")
        h4.text-center Público
        p.mb-0 Es necesario explicar los indicadores utilizados, las fórmulas aplicadas y los criterios de análisis, especialmente si el informe será leído por personas que no son expertas en finanzas.
      .col-md.tarjeta.BG01.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img04.svg', alt="Imagen decorativa")
        h4.text-center Resultados
        p.mb-0 Esta transparencia mejora la utilidad del informe y fortalece la confianza en los resultados presentados.
      .col-md.tarjeta.BG05.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img05.svg', alt="Imagen decorativa")
        h4.text-center Normativas
        p.mb-0 La elaboración de estos informes, también debe estar alineada con las normativas contables vigentes y las políticas internas de la organización. 

    p Cumplir con estos lineamientos asegura la estandarización de los reportes, facilita auditorías internas o externas y garantiza la comparabilidad entre diferentes periodos o unidades de negocio. Asimismo, permite presentar los resultados de manera profesional y formal ante terceros interesados.
    p.mb-5 Un buen informe financiero, no solo comunica cifras, sino que construye una narrativa estratégica basada en datos. Su elaboración debe ser cuidadosa, técnica y orientada a facilitar la toma de decisiones en todos los niveles de la organización. Cuando se presenta de manera clara, comprensible y adaptada al público objetivo, el informe financiero se convierte en una poderosa herramienta de gestión empresarial.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Estructura de un informe financiero
      
    p La estructura de un informe financiero debe responder a criterios de claridad, lógica y funcionalidad, para facilitar la comprensión de los resultados por parte de los diferentes usuarios del informe. Una buena estructura permite organizar la información de forma coherente, destacando los hallazgos más relevantes del análisis y orientando la lectura hacia conclusiones útiles para la toma de decisiones. La estandarización en la forma de presentar los informes, también contribuye a mantener la uniformidad en la comunicación financiera de la organización.
    p.mb-5 En términos generales, un informe financiero está compuesto por cinco secciones principales:  

    LineaTiempoE.color-acento-contenido.mb-5(data-aos="zoom-out")
      .row.justify-content-center(titulo="01")
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img06.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4 Introducción
          p.mb-0 Debe indicar el objetivo del informe, el período evaluado y el alcance del análisis. Esto prepara al lector para entender el propósito del documento y delimita su contenido. 
      .row.justify-content-center(titulo="02")
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img07.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4 Contexto
          p.mb-0 Ofrece una breve descripción de la situación interna y externa que afecta a la empresa, como movimientos del mercado, cambios regulatorios o eventos significativos ocurridos durante el periodo.
      .row.justify-content-center(titulo="03")
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img08.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4 Análisis financiero
          p.mb-0 Es el núcleo del informe. Aquí se presentan e interpretan los indicadores clave agrupados por categorías: liquidez, rentabilidad, endeudamiento y actividad. También se pueden incluir análisis de tendencias, comparaciones con años anteriores, y gráficos que ayuden a visualizar la evolución de las variables financieras. Es fundamental explicar cada resultado de forma sencilla, señalando sus implicaciones para la empresa y relacionándolos, si es necesario, con indicadores de gestión.
      .row.justify-content-center(titulo="04")
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img09.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4 Conclusiones y recomendaciones
          p.mb-0 Deben sintetizar los principales hallazgos del análisis e identificar acciones sugeridas. Esta parte del informe, agrega valor al traducir los datos en decisiones o propuestas, por lo que debe ser clara, concisa y enfocada en las prioridades de la organización. Si bien no es una sección extensa, tiene un peso estratégico, pues orienta a los directivos sobre los pasos a seguir con base en los resultados obtenidos.
      .row.justify-content-center(titulo="05")
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img10.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4 Anexos
          p.mb-0 Contienen los soportes técnicos del análisis: tablas de cálculo, fórmulas utilizadas, notas aclaratorias, y cualquier información adicional que respalde las conclusiones. Esta sección garantiza la transparencia del informe y facilita futuras verificaciones o auditorías. 

    p.mb-5 Tener una estructura definida es solo el primer paso; es necesario cuidar la redacción y la presentación de los resultados, de manera que el contenido sea comprensible, persuasivo y adaptado a cada audiencia

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Redacción técnica y presentación de resultados

    .BGM03.px-md-5.px-4.mb-5
      p.mb-5 La redacción técnica de un informe financiero, es fundamental para garantizar que la información sea clara, precisa y comprensible por su audiencia objetivo. A diferencia de otros tipos de escritura, la redacción financiera debe estar basada en hechos, evitar juicios subjetivos y usar un lenguaje técnico adecuado. La elección de términos debe ser exacta y estandarizada, especialmente cuando se trata de indicadores, conceptos contables o referencias normativas. Esto asegura que el mensaje sea interpretado correctamente por quienes lo reciben.   
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          p Uno de los principales objetivos de la redacción técnica, es comunicar los resultados de forma que puedan ser utilizados para tomar decisiones. Por ello, es recomendable emplear un estilo directo, con frases cortas y evitar ambigüedades o tecnicismos innecesarios, cuando el informe va dirigido a públicos no especializados. Si se hace necesario incluir términos técnicos, estos deben ir acompañados de una breve explicación o nota aclaratoria para facilitar su comprensión.
          p.mb-0 En la presentación de resultados, es clave resaltar los hallazgos más relevantes del análisis financiero. Esto implica no solo mostrar los indicadores, sino también interpretarlos de manera adecuada y señalar qué significan para la empresa. Por ejemplo, no basta con decir que el índice de rentabilidad aumentó, sino que se debe explicar: 
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img11.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10.d-lg-flex.d-none(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img12.svg', alt="Imagen decorativa")
          .tarjeta.BG01.p-3(x="8.5%" y="33%" numero="+")
            p.mb-0 ¿Qué factores lo impulsaron?
          .tarjeta.BG01.p-3(x="67%" y="16.5%" numero="+")
            p.mb-0 ¿Cuáles implicaciones tiene?
          .tarjeta.BG01.p-3(x="92.5%" y="33%" numero="+")
            p.mb-0 ¿Cómo se compara con ejercicios anteriores o con el promedio del sector?
      .col-10.d-lg-none.d-flex.mb-5
        figure
          img(src='@/assets/curso/tema4/img13.svg' alt="Imagen decorativa")

    p.mb-5 El uso de recursos visuales como gráficos, tablas y diagramas es un complemento eficaz para apoyar la redacción técnica. Estos elementos permiten presentar información compleja de forma más accesible, facilitar comparaciones y destacar tendencias. Sin embargo, deben usarse con moderación, acompañados de títulos y leyendas claras, y siempre contextualizados en el texto para evitar interpretaciones aisladas o erróneas.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Finalmente, una buena presentación de resultados, también considera el orden lógico de la información y la adaptación del contenido al público destinatario. No es lo mismo un informe para la junta directiva, que uno dirigido a una entidad financiera o un socio estratégico. Adaptar el lenguaje, el nivel de detalle y el enfoque a cada audiencia, aumenta la efectividad del informe como herramienta de comunicación, gestión y control financiero.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Adaptación a normativas internas y externas
    
    p La elaboración de informes financieros, no solo exige claridad y precisión en el análisis de datos, sino también el cumplimiento de las normativas que regulan la presentación de la información contable y financiera. Estas normas pueden ser internas, como los manuales de políticas contables y procedimientos de la empresa o externas, como las Normas Internacionales de Información Financiera (NIIF), regulaciones tributarias y requerimientos de entes de control o vigilancia. Adaptarse a estas normativas garantiza la validez legal, la transparencia y la comparabilidad de los informes.
    p.mb-5 A continuación, la explicación de cada norma: 

    .tarjeta.BGIMG01.p-lg-5.p-4.mb-5
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Normas internas
            p.mb-0 Establecen los lineamientos propios de cada organización en cuanto a la forma, periodicidad, nivel de detalle y responsables de la elaboración de informes financieros. Estas directrices buscan estandarizar los procesos contables y asegurar que todos los reportes respondan a los mismos criterios, lo cual facilita la consolidación de la información y la toma de decisiones a nivel directivo. Cumplir con estas políticas refuerza el control interno y mejora la eficiencia operativa.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img14.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Normas externas
            p Son aquellas impuestas por organismos nacionales o internacionales, como las NIIF, la Superintendencia de Sociedades, la DIAN o entes financieros. Estas regulaciones establecen criterios específicos sobre el reconocimiento, medición, presentación y revelación de la información financiera. Adaptar los informes a estas normas, es obligatorio en muchos casos y garantiza la confiabilidad y uniformidad de los estados financieros frente a terceros.
            p.mb-0 Además, ajustarse a normativas externas permite que los informes sean comparables con los de otras empresas del mismo sector, lo cual es fundamental para procesos de evaluación financiera, acceso a financiación, participación en licitaciones o atracción de inversionistas. También es importante cuando se trata de presentar informes a entidades públicas, cooperantes internacionales o en procesos de auditoría.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img15.jpg' alt="Imagen decorativa")
    
    p.mb-5 La adaptación a normativas internas y externas no es una tarea opcional, sino una exigencia esencial en la elaboración de informes financieros. Cumplir con estos marcos normativos asegura la coherencia, legalidad y utilidad de los reportes, refuerza la confianza de los usuarios de la información y contribuye a una gestión financiera más ordenada, transparente y alineada con los estándares del entorno empresarial.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Presentación de informes a diferentes públicos
    
    p La presentación de informes financieros debe adaptarse al perfil del público al que van dirigidos, ya que cada grupo de interés tiene objetivos, niveles de conocimiento y necesidades de información diferentes. Un informe bien elaborado no es solo el resultado de un análisis técnico, sino también de una adecuada comunicación. Por ello, es clave que el contenido, el lenguaje, el nivel de detalle y el formato del informe varíen según el destinatario, para asegurar que el mensaje sea comprendido y útil en la toma de decisiones.
    p.mb-5 A continuación, se relaciona lo que tiene que ver con cada tipo público, cuando se presenta el informe: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img16.svg', alt="Imagen decorativa")
        h4.text-center Gerencia
        p.mb-0 Cuando el informe está dirigido a este público, se espera que tenga un enfoque estratégico, resaltando los indicadores clave que afectan la operación y rentabilidad del negocio. La gerencia necesita información que le permita tomar decisiones tácticas en el corto y mediano plazo, como ajustes en presupuestos, reorientación de recursos o redefinición de metas. En este caso, se recomienda incluir análisis comparativos, proyecciones financieras, escenarios y recomendaciones claras para la acción.
      .col-md.tarjeta.color-secundario.p-5(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img17.svg', alt="Imagen decorativa")
        h4.text-center Socios o inversionistas
        p.mb-0 El informe debe centrarse en aspectos como la rentabilidad, el crecimiento, la sostenibilidad del negocio y el retorno de su inversión. Estos públicos suelen estar interesados en la estabilidad financiera, el nivel de endeudamiento, la generación de utilidades y las perspectivas de crecimiento. Es importante que la información sea clara, transparente y confiable, incluyendo gráficos y resúmenes ejecutivos que faciliten la comprensión de los resultados y transmitan confianza en la gestión empresarial.
      .col-md.tarjeta.BG06.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img18.svg', alt="Imagen decorativa")
        h4.text-center Entes de control
        p.mb-0 Dichos entes son la DIAN, la Superintendencia de Sociedades o entidades reguladoras. Ante ellos, la presentación del informe debe ajustarse estrictamente a las normativas legales y contables. Estos informes deben ser exhaustivos, con información detallada, respaldos documentales y estructuras predefinidas, según los requerimientos normativos. El cumplimiento de plazos, formatos y contenido técnico es fundamental para evitar sanciones, observaciones o la pérdida de beneficios fiscales o contractuales.

    p.mb-5 En conclusión, un mismo análisis financiero, puede tener múltiples formas de presentación, según el público al que va dirigido. Esta adaptabilidad, convierte al informe financiero en una herramienta poderosa de comunicación y gestión dentro de cualquier organización.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Uso de herramientas tecnológicas para la visualización y presentación de datos 
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema4/img19.png', alt="Imagen decorativa")
    
    p.mb-5 El uso de herramientas tecnológicas es fundamental en la elaboración y presentación de informes financieros, ya que permite procesar grandes volúmenes de datos, generar análisis precisos y presentar la información de forma visual y comprensible. Herramientas como Excel y PowerPoint, no solo facilitan el trabajo del analista financiero, sino que también mejoran la calidad de los reportes, permitiendo que los resultados sean interpretados de manera rápida y efectiva por los diferentes públicos destinatarios. Cada una de estas herramientas, tiene las siguientes implicaciones:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img20.svg', alt="Imagen decorativa")
        h4.text-center Excel
        p.mb-0 Es una de las herramientas más utilizadas para el análisis financiero, ya que permite organizar datos, aplicar fórmulas y funciones financieras, generar tablas dinámicas y construir modelos de análisis automatizados. Su flexibilidad y capacidad para manejar bases de datos, lo convierten en un aliado ideal para calcular indicadores financieros, realizar proyecciones, comparar periodos y simular escenarios. Además, permite crear gráficos dinámicos que facilitan la interpretación visual de las cifras.
      .col-md.tarjeta.color-secundario.p-5(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema4/img21.svg', alt="Imagen decorativa")
        h4.text-center PowerPoint
        p.mb-0 Es clave en la etapa de presentación de resultados, especialmente cuando se deben exponer los informes ante juntas directivas, socios o inversionistas. Esta herramienta permite estructurar una narrativa visual del análisis financiero, utilizando diapositivas claras, con gráficos, tablas y esquemas que resuman los principales hallazgos del informe. Una buena presentación en PowerPoint contribuye a que la información financiera, no solo sea técnica, sino también comprensible y persuasiva.

    .BGM03.px-md-5.px-4.mb-5
      p.mb-5 Además de Excel y PowerPoint, existen otras herramientas tecnológicas que pueden complementar la presentación de informes, como Google Sheets, Power BI o Canva. Sin embargo, Excel y PowerPoint siguen siendo las más accesibles, ampliamente conocidas y suficientes para cubrir las necesidades básicas y medianas de visualización en la mayoría de las organizaciones. Su dominio por parte del personal financiero es una competencia clave en el contexto actual.
      .row.justify-content-center
        .col-lg-3.col-7.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img22.svg' alt="Imagen decorativa")
        .col-lg-7(data-aos="fade-left")
          p Basado en lo anterior, Ortiz (2011), señala que el apoyo en herramientas tecnológicas no solo optimiza el proceso de elaboración de informes, sino que mejora significativamente la calidad de la comunicación financiera, haciendo que los resultados sean más accesibles y persuasivos para todos los interesados.
          p.mb-0 En resumen, incorporar herramientas tecnológicas en la visualización y presentación de informes financieros, eleva la calidad del análisis, reduce los errores, optimiza el tiempo de elaboración y mejora la comunicación de los resultados. Dominar estas herramientas, permite que el informe financiero sea no solo un documento técnico, sino una poderosa herramienta de gestión, decisión y comunicación estratégica dentro de la empresa.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #E5E9FE; border-radius: 5px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Buenas prácticas en la comunicación de resultados financieros
    
    p Una buena comunicación de los resultados financieros no se limita a mostrar cifras, sino que implica transmitir mensajes claros, relevantes y accionables para quienes toman decisiones dentro y fuera de la organización. Las buenas prácticas en esta área, aseguran que el informe financiero cumpla su propósito: informar de manera efectiva, generar confianza y facilitar el análisis por parte de distintos públicos, desde la alta dirección hasta los entes de control. La clave está en presentar información precisa, con un enfoque estratégico y un lenguaje accesible.
    p.mb-5 Para finalizar y poder aplicar de manera acertada este buen accionar, se detalla una serie de buenas prácticas: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
          div(titulo="Adaptar el mensaje al público objetivo")
            p No todos los usuarios del informe financiero tienen el mismo nivel de conocimiento técnico, por lo que es importante ajustar el nivel de detalle, el vocabulario y la presentación; ya que el receptor puede ser un directivo, un socio, un auditor o un área operativa. Esto permite que el mensaje sea comprendido e interpretado adecuadamente por cada audiencia.
          div(titulo="Coherencia en los datos y en la estructura del informe")
            p Todos los indicadores, gráficos y conclusiones deben estar alineados entre sí, evitando contradicciones o interpretaciones confusas. Esto implica verificar que los datos utilizados provengan de fuentes confiables, estén actualizados y correspondan con los estados financieros oficiales. Además, mantener una estructura clara y uniforme, facilita la navegación por el documento y mejora la experiencia del lector.
          div(titulo="Visualización adecuada de los resultados ")
            p Utilizar gráficos, tablas, colores y resaltados estratégicos, ayuda a destacar la información más relevante y a facilitar la comprensión de tendencias o variaciones. Sin embargo, estos recursos deben usarse con moderación y siempre acompañarse de una breve interpretación que guíe al lector en su análisis. Un buen gráfico no debe reemplazar al texto, sino reforzarlo.
          div(titulo="Transparencia y objetividad en la presentación ")
            p Son esenciales para mantener la credibilidad del informe. Esto implica no ocultar resultados negativos, reconocer las debilidades detectadas y explicar las causas de las variaciones importantes, sean positivas o negativas. La honestidad en la presentación de resultados, fortalece la cultura organizacional y mejora la toma de decisiones basada en hechos reales.
          div(titulo="Conclusiones claras y recomendaciones prácticas")
            p Es recomendable cerrar el informe con esta sección, la cual oriente las acciones futuras. Esta parte debe destacar los hallazgos más relevantes y proponer medidas de mejora o seguimiento. Cuando el lector identifica qué hacer con la información recibida, el informe cumple verdaderamente su función como herramienta de gestión financiera.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img23.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema4',
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
