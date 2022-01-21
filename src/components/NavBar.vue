<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        dark
      >


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
          <router-link to="/chat" class="text-decoration-none nav-link">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-chat</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Chat</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    props: [ 'drawer' ]
})
</script>

<style>

</style>