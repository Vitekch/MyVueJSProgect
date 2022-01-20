<template>
<v-card class="d-flex align-center justify-space-around mb-2">
  <v-checkbox
    class="ma-2 pa-0"
    hide-details
    color="var(--color-green)"
    :input-value="isDone"
        value
    @change="switchDone"
  ></v-checkbox>
  <div :class="{'text': true, 'text-decoration-line-through': isDone}">
  {{ text }}
  </div>
  <v-btn
    class="ma-2"
    icon
    color="yellow darken-2"
    @click="switchFavorite"
  >
    <v-icon dark>
      {{ isFavorite ? 'mdi-star' : 'mdi-star-outline' }}
    </v-icon>
  </v-btn>
  <v-btn
    class="ma-2"
    icon
    color="red lighten-2"
    @click="deleteTask"
  >
    <v-icon dark>
      mdi-delete
    </v-icon>
  </v-btn>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TasksList',

  props: ['id', 'text', 'isDone', 'isFavorite'],
  methods: {
    switchDone(){
      this.$store.dispatch('switchDone',{ id: this.id, status: !this.isDone });
    },
    switchFavorite(){
      this.$store.dispatch('switchFavorite',{ id: this.id, status: !this.isDone });
    },
    deleteTask(){
      this.$store.dispatch('deleteTask', this.id);
    }
  },
})
</script>

<style lang="scss" scoped>
  .text {
    width: 80%;
    text-align: left;
  }
</style>
