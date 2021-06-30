export default {
  global: {
    componenteFormativo: 'Identidad corporativa',
    descripcionCurso:
      'Es común que se confundan la identidad y la imagen corporativa o se piense que son lo mismo, pero en realidad existen diferencias entre ambas y es muy importante tenerlas claras. La imagen, a diferencia de la identidad, no se puede captar a través de los sentidos, es más bien un factor emocional; es la percepción que se tiene de una empresa, producto o servicio y que hace que el mercado desee o no acercarse a esa marca.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      } /*
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/,
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La identidad corporativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Antecedentes de la identidad corporativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto de Identidad corporativa',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Concepto de imagen corporativa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Identidad visual',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Construcción de la identidad corporativa',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo de software de diseño vectorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Software de diseño vectorial en el mercado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Manejo de Illustrator',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manual de identidad corporativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura básica de un manual de identidad corporativa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medios de entrega y difusión',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      /*
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  referencias: [
    {
      referencia: 'Adobe. (2010). Manual de Identidad Corporativa. Adobe.',
    },
    {
      referencia: 'Adobe Illustrator. (2015). Guía ACA Illustrator SPA. Adobe.',
    },
    {
      referencia:
        'Alcaldía de Medellín. (2020). Libro de Marca Municipio de Medellín.',
      link: 'https://n9.cl/y5j7',
    },
    {
      referencia:
        'Animal Planet. (2008). International Off-Air Brand Guidelines.',
      link: 'https://cutt.ly/byVP1Sd',
    },
    {
      referencia: 'Arguello, J. (2015). Identidad e Imagen Corporativa.',
    },
    {
      referencia:
        'Castañeda, W. (2005). Color. Editorial Universidad de Caldas Artes y Humanidades.',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'Dell. (2011). Dell Brand Identity Standards. Version 4.5. Dell.',
    },
    {
      referencia: 'Fender. (2015). The Fender Brand.',
      link: 'https://cutt.ly/syVA783',
    },
    {
      referencia: 'Fernández, R. (2009). Segmentación de mercados.',
      link: 'https://cutt.ly/wyIsCNm',
    },
    {
      referencia:
        'FIFA. (2018). Guidelines for the use of FIFA’s Official Marks.',
      link: 'https://cutt.ly/NyVPL44',
    },
    {
      referencia: 'Foursquare. (2011). Brand Book.',
      link: 'https://cutt.ly/IyVAGX6',
    },
    {
      referencia:
        'García, E., Lalueza, F. y Estanyol, E. (2016). ¿Cómo Elaborar un Plan de Comunicación Corporativa? Editorial UOC.',
    },
    {
      referencia: 'Instagram. (2020). Instagram Brand Resources.',
      link: 'https://cutt.ly/6yVPVz7',
    },
    {
      referencia: 'Labarta, F. (2014). Guía para Crear Mensajes y Contenidos.',
    },
    {
      referencia:
        'Lenovo. (2016). Lenovo WW Visual Identity Guidelines V1.8. Lenovo.',
    },
    {
      referencia: 'Llopis, E. (2015). Crear la Marca Global. ESIC Editorial.',
    },
    {
      referencia:
        'López, A. M. (2014). Curso de Diseño Gráfico. Ediciones Anaya multimedia.',
    },
    {
      referencia:
        'Orozko. M. (s. f.). 13 Manuales de Marca para Inspirarte. Sirope. Consultado el 04 de junio de 2020.',
      link: 'https://cutt.ly/9yVPfck',
    },
    {
      referencia:
        'Pepsi. (2012). Live for Now. Brand Guidelines. Work in Progress.',
      link: 'https://cutt.ly/kyVP6gZ',
    },
    {
      referencia: 'Pinterest. (2015). Pinterest Brand Guidelines for Partners.',
      link: 'https://cutt.ly/xyVALOi',
    },
    {
      referencia:
        'Reimers Design. (s. f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020.',
      link: 'https://cutt.ly/VyDzeWh',
    },
    {
      referencia: 'Sánchez, G. (2020). Glosario Gráfico. ',
      link: 'https://cutt.ly/WyVO5FW',
    },
    {
      referencia: 'Twitter. (2020). Brand Guidelines.',
      link: 'https://cutt.ly/byVAuhe',
    },
    {
      referencia: 'Unicef. (2008). Brand Tool Kit. Unicef.',
    },
    {
      referencia:
        'Usabilitypost. (2019). A Guide to Choosing Colors for Your Brand.',
      link: 'https://cutt.ly/EyVPzjx',
    },
    {
      referencia:
        'Velilla, J. (2010). Branding, Tendencias y Retos en la Comunicación de Marca. Editorial UOC.',
    },
  ],
  glosario: [
    {
      termino: 'Carátula',
      significado:
        'Diseño editorial. Tapa o cara principal de una publicación. La funda de un disco o la cubierta de un libro. Interior: reverso o cara posterior de la tapa o carátula.',
    },
    {
      termino: 'Color',
      significado:
        'Característica propia o adquirida de una superficie, mediante la cual, al incidir los rayos de luz blanca sobre ella, adquiere esta una apariencia visual determinada.',
    },
    {
      termino: 'Eslogan (Slogan)',
      significado:
        'Término de origen inglés utilizado para recordar una marca o un producto, por medio de una frase de fácil memorización, en los mensajes publicitarios.',
    },
    {
      termino: 'Identidad corporativa',
      significado:
        'El conjunto de características específicas y personales de una entidad, las cuales crean una forma perceptible y memorizable de sí misma y la diferencian de las demás entidades.',
    },
    {
      termino: 'Logotipo',
      significado:
        'Diseño en el cual las letras componentes del escrito encuentran uniones especiales o formas particulares más características. Marca en la cual la palabra funciona como imagen (Veraldi- Scherman, 2004).',
    },
    {
      termino: 'Manual de Identidad Corporativa',
      significado:
        'Conjunto de normas que regulan el uso y aplicación de la identidad corporativa en el plano del diseño.',
    },
    {
      termino: 'Símbolo',
      significado:
        'En la identidad visual, el símbolo es un grafismo distintivo que posee tres clases de funciones: simbólica, identificadora y estética. Se llama símbolo porque: “es un signo convencional, que está en el lugar de otra cosa no presente, a la cual representa”. Esta “cosa no presente” es el propio grupo y cada una de las entidades que lo integran.',
    },
    {
      termino: 'Tipografía',
      significado:
        'Representación gráfica del lenguaje. Disciplina que rige el diseño de caracteres unificados por propiedades visuales uniformes. Estudia las diferentes categorías de letras, las familias, los recursos, su legibilidad.',
    },
  ],
  complementario: [
    {
      texto: 'Arias, M. (2020). Formato modelo brief de primer contacto.',
      tipo: 'Documento Word',
      descarga: '/downloads/Formato modelo brief de primer contacto.doc',
    },
    {
      texto: 'Arias, M. (2020). Modelo brief de primer contacto.',
      tipo: 'Documento PDF ',
      descarga: '/downloads/Modelo brief de primer contacto.pdf',
    },
    {
      texto: 'Arias, M. (2020). Formato modelo brief de campaña táctica.',
      tipo: 'Documento Word',
      descarga: '/downloads/Formato modelo brief de campaña táctica.doc',
    },
    {
      texto: 'Arias, M. (2020). Modelo brief de campaña táctica.',
      tipo: 'Documento PDF',
      descarga: '/downloads/Modelo brief de campaña táctica.pdf',
    },
    {
      texto: 'Fernández, R. (2009). Segmentación de mercados.',
      tipo: 'Libro digital',
      link: 'https://cutt.ly/wyIsCNm',
    },
    {
      texto: 'Adobe Illustrator. (2015). Guía ACA Illustrator SPA.',
      tipo: 'Documento PDF',
      descarga: '/downloads/Guia ACA Illustrator SPA.pdf',
    },
    {
      texto: 'Orozko, M. (s. f.). 13 Manuales de Marca para Inspirarte.',
      tipo: 'Página web',
      link: 'https://cutt.ly/9yVOv6Q',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
