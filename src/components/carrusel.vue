<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-item
        v-for="(item, index) of datos"
        :key="index"
        :ref="'carrusel-item-' + index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  name: 'Carrusel',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="sass"></style>
