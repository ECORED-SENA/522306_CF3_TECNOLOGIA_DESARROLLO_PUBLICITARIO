<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Manual de identidad corporativa
    .row.align-items-center.mb-4
      .col-lg-8
        p El manual de identidad corporativa es un documento instructivo para la empresa. Es una guía para el manejo de comunicación del producto, servicio o empresa en relación con la marca. Es un elemento infaltable en cualquier compañía, pues garantiza el uso adecuado del logo y los demás componentes de la marca en los diferentes medios de comunicación, documentos de relación con clientes y proveedores.
        .cajon.color-primario.p-4
          p.mb-0 Tal como sucede con muchos de los documentos que se elaboran para las empresas, en el área de mercadeo y comunicación, el manual corporativo no tiene un estándar en cuanto a contenido se refiere; ya que, dependiendo de las necesidades de la empresa, el tamaño, sus canales de distribución, los medios de comunicación y el tipo de mercado que maneje, estos manuales tendrán más o menos elementos. 
      .col-lg-4
        img(src='@/assets/curso/t3/f1.svg',alt='Personas diseñando')
    p.mb-5 Cuando se diseña un manual de identidad corporativa hay que ver la empresa desde todos los frentes posibles, pues como todo manual, este debe resolver problemas básicos para casi todos los departamentos de la compañía. Por ejemplo, los contadores necesitan papelería comercial, los vendedores requieren de catálogos y cotizaciones, los administradores membretes y plantillas de presentaciones, en producción requieren uniformes, rotulación de espacios y maquinaria; por obvias razones, en mercadeo y comunicación es necesario el uso permanente de este manual. Es por eso que resulta importante tener claro qué tipo de empresa requiere el manual y qué necesidades debe satisfacer.
    .container.fcd.p-5.mb-5
      .row.align-items-center
        .col-lg-4.mx-auto
          img(src='@/assets/curso/infografias.svg',alt='Infografía')
        .col-lg-7
          #t_3_1.titulo-segundo
            h2 3.1 Estructura básica de un manual de identidad corporativa
          p A continuación, se indican las figuras retóricas más utilizadas en la publicidad, relacionando algunos ejemplos escritos y visuales que se destacan. Lo cual, es basado en el sitio web Retoricas.com (2009) y la recopilación que hace la profesora de lenguaje y comunicación Mónica San Martín:
          a.boton.me-3.indicador__container(
            :href="obtenerLink('/downloads/manual_de_identidad.pdf')"
            target="_blank"
            type="application/pdf"
            @mouseover="mostrarIndicador = false"
          )
            span Descargar
            i.fas.fa-file-download
            .indicador--click(v-if="mostrarIndicador")
    #t_3_2.titulo-segundo
      h2 3.2 Medios de entrega y de difusión
    .bloque-texto-a.p-4.mb-5.color-primario.g2-i
      .row.align-items-center
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 El manual de identidad corporativa es un instrumento de uso cotidiano en la empresa, por esta razón debe alojarse en varios medios y lo ideal es que todos los departamentos de la empresa pueden acudir a él cuando sea necesario; por ello, la mejor opción es tenerlo disponible en medios digitales, en un sitio web donde todos los empleados puedan consultarlo y descargar los recursos necesarios para el desarrollo de la comunicación. Dichos recursos son:
        .col-lg-3.mx-auto
          img(src='@/assets/curso/t3/f3.svg',alt='Personas diseñando')
    .row.align-items-center.mb-5
      .col-lg-5.mx-auto
        img(src='@/assets/curso/t3/f4.svg',alt='Mujer diseñando')
      .col-lg-5.mx-auto
        ul.lista-ul--separador.color-acento-contenido
          li 
            i.fas.fa-play
            p.mb-0 Manual completo en formato PDF.
          li 
            i.fas.fa-play
            p.mb-0 Logo en archivo fuente, preferiblemente en formato PDF para que este pueda abrirse en cualquier software vectorial.
          li 
            i.fas.fa-play
            p.mb-0 Formato de imagen JPG y PNG, esta última permite que el logo tenga fondo transparente para su fácil ubicación en diversos medios.
          li 
            i.fas.fa-play
            p.mb-0 Logo en formato Tiff para que pueda ser abierto en software de edición de mapas de bits cuando se requiera.
          li 
            i.fas.fa-play
            p.mb-0 Logo en imagen de sus versiones a color, fondos oscuros y fondos claros.
          li 
            i.fas.fa-play
            p.mb-0 Tipografías instalables en todos los sistemas operativos.
          li 
            i.fas.fa-play
            p.mb-0 Paleta de colores con valores RGB, CMYK, Hexadecimal y Pantone si es el caso.
          li 
            i.fas.fa-play
            p.mb-0 Fotografías para anuncios publicitarios y presentaciones, ya sean originales o de un stock.
          li 
            i.fas.fa-play
            p.mb-0 Archivos fuente de papelería comercial y contable.
          li 
            i.fas.fa-play
            p.mb-0 Archivos fuente de material publicitario y promocional.
    p El manual siendo un elemento muy preciado para la empresa, debe ser de primer nivel; de ahí, la importancia de desarrollar una marca que responda a las características del producto y a la personalidad del mercado objetivo, con un manejo eficaz de las estrategias de comunicación para lograr el posicionamiento de marca adecuado. 
    .cajon.color-primario.p-4
      p.mb-0 El manual de identidad debe ser la base para todas las estrategias de comunicación que la empresa realice a mediano y largo plazo, recomendando actualizaciones permanentes sin cambios radicales, para mantener una comunicación empática con las tendencias del mercado, teniendo en cuenta que el mundo de hoy es más vertiginoso y cambiante.
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped></style>
