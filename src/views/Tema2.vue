<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Manejo de software de diseño vectorial
    .bloque-texto-a.p-4.mb-5.color-primario.g2
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mx-auto
          img(src='@/assets/curso/t2/f1.svg',alt='Persona diseñando')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Para el desarrollo de una marca es necesario el manejo de software de diseño vectorial. En la web, hay muchas alternativas para el diseño de logos; sin embargo, no es recomendable acudir a íconos o gráficos estándar para generar la representatividad de una empresa, lo ideal es crear la identidad desde cero y tener en cuenta todos los parámetros relacionados con el diseño de marca, expuestos en el tema 1 de este componente formativo.
    #t_2_1.titulo-segundo
      h2 2.1 Software de diseño vectorial en el mercado
    p.mb-5 En el mercado hay varios tipos de software de diseño vectorial, los cuales se pueden utilizar para crear la marca y la identidad corporativa de una empresa, producto o servicio:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    Separador
    #t_2_1.titulo-segundo
      h2 2.2 Manejo de Illustrator
    h3 Espacio de trabajo
    p.mb-5 El área de trabajo de Illustrator abarca todo lo que se ve cuando se abre por primera vez o se crea un documento: el panel de herramientas, la ventana de documento, la mesa de trabajo y los paneles. Se puede personalizar y guardar el espacio de trabajo para adaptarse al estilo de trabajo.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    h3 Crear un nuevo documento
    p.mb-5 Se pueden crear documentos de Illustrator con un nuevo perfil de documento o de una plantilla para crear uno en blanco.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    h3 Panel de herramientas
    p.mb-5 Utilice las herramientas de este panel para crear, seleccionar y manipular objetos en Illustrator. Algunas de ellas tienen opciones que aparecen al hacer doble clic en la herramienta. Aquí se incluyen las que le permiten usar texto y seleccionar, pintar, dibujar, muestrear, editar y mover imágenes. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    h3 Manejo de texto
    p.mb-5 La herramienta Texto permite realizar dos tipos: el primero es el cuadro de texto para textos largos, el cual se debe realizar haciendo clic sostenido y arrastrando el mouse hasta hacer un marco del tamaño deseado.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    h3 Dibujo de formas básicas
    p.mb-5 En Illustrator se pueden crear formas básicas y modificarlas de acuerdo con las necesidades que se tengan de diseño. El panel de formas básicas incluye varias muy útiles: cuadrado, elipse, estrella y polígono, entre las más importantes.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    h3 Buscatrazos
    p.mb-5 Es un panel básico para desarrollo gráfico, es útil para crear formas a partir de la combinación, intersección y manipulación de objetos. El panel de buscatrazos está junto al panel Alinear y transformar. Se activa desde Ventana y luego Buscatrazos.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    h3 Guardado de archivos
    p.mb-5 Una vez los archivos han sido realizados deben ser guardados en diferentes formatos. El archivo fuente deberá hacerse desde el inicio e ir salvando todos los cambios importantes que se hagan. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
















</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped></style>
