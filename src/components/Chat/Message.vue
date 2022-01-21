<template>
    <div
        style="width:100%"
        :style="{'text-align': amI ? 'right' : 'left' }"
    >
    <div
        class="ma-1 pa-1 message"
        :class="{'justify-self-left': !amI, 'align-end': amI}"
        outlined
    >
      <v-spacer></v-spacer>
      <template v-if="!amI">
        <v-chip
            class="name-label"
            dark :color="userColor"
            small>{{ user }}
        </v-chip>
        <div class="mx-4">{{ message }}</div>
      </template>
      <template v-else>
        <v-chip
            class="name-label"
            dark :color="userColor"
            small>{{ user }}
        </v-chip>
        <div class="mx-4">{{ message }}</div>
      </template>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: [ 'user', 'message', 'amI', 'userColor' ],
})
</script>

<style>
    .message{
        max-width:50%;
        border: 1px solid gainsboro;
        display: inline-flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow-wrap: anywhere;
        border-radius: 12px;
    }
    .name-label{
        width: fit-content !important;
    }
</style>