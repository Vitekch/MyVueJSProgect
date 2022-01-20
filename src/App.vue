<template>
<v-app>
<v-navigation-drawer
        app
        permanent
        expand-on-hover
        dark
      >
        <v-list>
          <router-link to="/" class="text-decoration-none title">
          <v-list-item link  class="title">
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                My Awesome App
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <router-link to="/todo" class="text-decoration-none nav-link">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ToDo List</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

  <v-main>
    <v-container class="main">
      <router-view></router-view>
    </v-container>
  </v-main>

</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
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

.title {
      color: white !important;
      border-bottom: 1px solid transparent !important;
      transition: 0.2s;
}

.title:hover {
    border-bottom: 1px solid var(--color-green) !important;;
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
