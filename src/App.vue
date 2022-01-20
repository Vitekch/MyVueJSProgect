<template>
<v-app>
  <v-container class="main">
        <router-view/>
  </v-container>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
})
</script>

<style>
.main{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-content: center;
}

#app {
  font-family:'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
