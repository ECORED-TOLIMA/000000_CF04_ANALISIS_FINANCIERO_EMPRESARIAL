export default {
  global: {
    componenteFormativo: 'Evaluación y generación de informes financieros',
    descripcionCurso:
      'Este componente desarrolla competencias para analizar, estructurar y presentar informes financieros, integrando indicadores de gestión. El aprendiz aprenderá a interpretar resultados, generar reportes técnicos y comunicar hallazgos según normativas y públicos específicos, fortaleciendo la toma de decisiones estratégicas dentro de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación financiera',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores de gestión y los KPI financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Indicadores financieros',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis integral de la situación financiera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elaboración de informes financieros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Uso de herramientas tecnológicas para la visualización y presentación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Buenas prácticas en la comunicación de resultados financieros',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Evaluación financiera',
      referencia:
        'Nava Rosillón, M. A. (2009). Análisis financiero: una herramienta clave para una gestión financiera eficiente. <em>Revista Venezolana de Gerencia</em>, 14, 48, 606-628.',
      tipo: 'Artículo ',
      link: 'https://www.redalyc.org/pdf/290/29012059009.pdf',
    },
    {
      tema: '4. Elaboración de informes financieros',
      referencia:
        'Microsoft. (2023). <em>Introducing Microsoft 365 Copilot with Outlook, PowerPoint, Excel, and OneNote</em>. [Video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=ebls5x-gb0s',
    },
  ],
  glosario: [
    {
      termino: 'Análisis comparativo',
      significado:
        'método de evaluación que consiste en comparar resultados financieros entre periodos, frente al presupuesto o frente a otras empresas del sector.',
    },
    {
      termino: 'Indicador financiero',
      significado:
        'relación numérica derivada de los estados financieros que permite analizar aspectos clave como liquidez, rentabilidad, endeudamiento y eficiencia operativa.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'herramienta que mide el desempeño de los procesos internos de la organización, en términos de eficiencia, eficacia, productividad y calidad.',
    },
    {
      termino: 'Informe financiero',
      significado:
        'documento técnico que presenta de forma estructurada y comprensible los resultados del análisis financiero de una organización.',
    },
    {
      termino: 'KPI (Key Performance Indicator)',
      significado:
        'indicador clave de desempeño que refleja el grado de cumplimiento de los objetivos estratégicos y operativos de una empresa.',
    },
    {
      termino: 'Normatividad contable',
      significado:
        'conjunto de reglas internas o externas que regulan la elaboración, presentación y validación de los informes financieros en una organización.',
    },
    {
      termino: 'Valoración cruzada',
      significado:
        'técnica que relaciona indicadores financieros con indicadores de gestión para identificar causas y efectos en el desempeño empresarial.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'representación gráfica o tabular de información financiera que facilita su comprensión, análisis y presentación ante diferentes públicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coral Delgado, L. C. & Gudiño Dávila, E. L. (2014). Contabilidad universitaria. (7ª Edición). Bogotá, Colombia: Editorial. Mc Graw Hill.',
    },
    {
      referencia:
        'Díaz, H. (2006). Contabilidad general. (2ª Edición). México DF, México: Editorial. Pearson Prentice Hall.',
    },
    {
      referencia:
        'García, O. L. (2009). Administración financiera: Fundamentos y aplicaciones. (4ª Edición). Bogotá, Colombia: Editorial. Desconocida.',
    },
    {
      referencia: 'Microsoft. (s.f.). Funciones financieras de Excel.',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2011). Análisis financiero aplicado y principios de administración financiera. (14ª Edición). Bogotá, Colombia: Editorial. Universidad Externado de Colombia.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
