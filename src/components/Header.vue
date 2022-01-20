<template>
    <v-app-bar
      absolute
      color="#43a047"
      dark
      dense
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>To Do List</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  name: 'Header',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    idx () {
      return this.$store.state.lastIdx
    }
  },
  methods: {
    addTask () {
      this.$store.commit('')
    }
  }
})
</script>
