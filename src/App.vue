<template>
<v-app>
  <NavBar :drawer="drawer"></NavBar>
  <v-app-bar app dark dense>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
  </v-app-bar>
  <v-main>
    <v-container class="main">
      <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './components/NavBar.vue';
export default Vue.extend({
  name: 'App',
  data(){
    return{
      drawer: false
    }
  },
  components: { NavBar }
})
</script>

<style lang="scss">

:root{
  --color-green: #00897B;
  --color-purpure: #6A76AB;
}

.main{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-content: center;
}

.nav-link{
    .v-list-item__title{
        font-family:'Courier New', Courier, monospace !important;
    }
}

#app {
  font-family:'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
