<template lang="pug">
  .carrusel-tarjetas
    .carrusel-tarjetas__flecha-izq
      i.fas.fa-angle-left(@click="clickIzquierda()")
    .carrusel-tarjetas__contenido.text-center
      ScrollTarjetas(:selectedId="'scrolltarjeta'+seleccionado").align-items-start
        #scrolltarjeta1.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f17.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Un círculo representa ciclo, comunidad y enfoque. También pueden dar la impresión de inestabilidad y movimiento.
        #scrolltarjeta2.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f18.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Agregar un círculo al centro puede equilibrar ópticamente. Se observa el efecto visual de estabilidad que produce racionalidad y equilibrio, que puede estar indicado para una sociedad financiera o una banca.
        #scrolltarjeta3.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f19.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Los occidentales acostumbran a imaginar el movimiento de izquierda a derecha, como ocurre con la caligrafía de esta región. Si se une la flecha al círculo, se producirá inmediatamente la sensación de movimiento. Este símbolo representa movimiento y proyección.
        #scrolltarjeta4.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f20.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Eliminando la flecha y trasladando el círculo blanco a arriba y a la izquierda, se transforma en una esfera que rueda velozmente. El mensaje que transmite es de movimiento y velocidad.
        #scrolltarjeta5.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f21.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Al desplazar el círculo blanco a la derecha, el efecto visual cambia, ahora transmite estatismo, pues en esta posición el círculo blanco da la impresión de haber llegado a un punto del que difícilmente puede ascender. Este símbolo representa pesadez.
        #scrolltarjeta6.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f22.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small El cuadrado en su forma básica da la sensación de firmeza, debido a su apoyo amplio sobre la base; da la impresión de encierro, rigidez y poca flexibilidad.
        #scrolltarjeta7.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f23.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Desplazando el cuadrado de forma que se apoye sobre un solo vértice, cambia la percepción; en esta posición da la sensación de inestabilidad, lo que transmite incertidumbre.
        #scrolltarjeta8.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f24.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Inclinado a la derecha connota la subida de una pendiente con dificultad y con un gran peso de por medio.
        #scrolltarjeta9.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f25.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Inclinado hacia la izquierda, se percibe como un objeto que cae deliberadamente, representando desorden e imprecisión.
        #scrolltarjeta10.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f26.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small El triángulo es una figura con un alto contenido místico; en su forma básica, un triángulo equilátero representa estabilidad y proyección divina y crecimiento exponencial.
        #scrolltarjeta11.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f27.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Esta forma indica proyección, ascenso y estabilidad.
        #scrolltarjeta12.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f28.svg' alt="Icono relacionado").p-4
          // h4 
          p.text-small Esta forma indica retroceso. No es muy recomendable para culturas occidentales.
        #scrolltarjeta13.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f29.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Esta forma connota caída rápida y de por sí, la punta es amenazante y agresiva.
        #scrolltarjeta14.contenedor.col-lg-3.col-md-4.col-12
          img(src='@/assets/curso/t1/f30.svg' alt="Icono relacionado").p-4
          // h4
          p.text-small Un vértice de un triángulo que toca un círculo se interpreta como un elemento que al tocar a otro lo llena de energía.
    .carrusel-tarjetas__flecha-der
      i.fas.fa-angle-right(@click="clickDerecha()")
</template>
<script>
import ScrollTarjetas from './ScrollTarjetas.vue'
export default {
  name: 'Carrusel',
  components: { ScrollTarjetas },
  data: () => ({
    seleccionado: 1,
  }),
  methods: {
    clickDerecha() {
      const anchoPantalla = window.innerWidth
      var x = anchoPantalla
      if (x >= 1200 && this.seleccionado < 11) {
        this.seleccionado += 1
      } else if (x >= 992 && x < 1200 && this.seleccionado < 12) {
        this.seleccionado += 1
      } else if (x >= 768 && x < 992 && this.seleccionado < 12) {
        this.seleccionado += 1
      } else if (x >= 576 && x < 768 && this.seleccionado < 12) {
        this.seleccionado += 1
      } else if (x < 576 && this.seleccionado < 14) {
        this.seleccionado += 1
      }
    },
    clickIzquierda() {
      if (this.seleccionado > 1) {
        this.seleccionado -= 1
      }
    },
  },
}
</script>
<style lang="sass">
.carrusel-tarjetas
  display: flex
  &__flecha-izq,&__flecha-der
    flex-shrink: 1
    i
      font-size: 3rem
  &__contenido
    flex-grow: 1

.carrusel-tarjetas
  display: flex
  &__flecha-izq,&__flecha-der
    width: 5%
    i
      transform-origin: center
      margin-top: 200px
      cursor: pointer
      transition: .5s
      font-size: 3rem
      color: $color-primario
      &:hover
        transform: scale(1.5)
  &__contenido
    width: 90%
</style>
