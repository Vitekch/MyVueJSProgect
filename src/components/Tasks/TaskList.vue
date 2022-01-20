<template>
  <v-card class="tasks">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
      class="header"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>To Do List</v-app-bar-title>

      <template v-slot:extension>
        <div class="input-field">
        <v-text-field
        v-model.trim="newTaskText"
        label="Outlined"
        outlined
        dense
        :error="isError"
        @focus="isError = false"
        :details="null"
      ></v-text-field>
      <v-btn
        color="#00897B"
        height="40"
        class="ml-1"
        @click="addTask"
      >
        Add
      </v-btn>
      </div>
      </template>
    </v-app-bar>
    <v-progress-linear
      color="#00897B"
      class="mb-2"
      :indeterminate="isLoading"
      reverse
    ></v-progress-linear>
    <v-container class="tasks-list">
      <v-scale-transition group hide-on-leave>
      <TaskItem v-for="task in tasks" :id="task.id" :text="task.text" :isDone="task.isDone" :isFavorite="task.isFavorite" :key="task.id"></TaskItem>
      </v-scale-transition>
    <v-divider
      class="ma-2"
    >
    </v-divider>
      <v-scale-transition group hide-on-leave>
      <TaskItem v-for="task in doneTasks" :id="task.id" :text="task.text" :isDone="task.isDone" :isFavorite="task.isFavorite" :key="task.id"></TaskItem>
      </v-scale-transition>
    </v-container>
    <v-card-actions class="pb-0">
      <v-tabs
        v-model="favorites"
        color="#00897B"
      >
        <v-tab>All</v-tab>
        <v-tab>Favorites</v-tab>
      </v-tabs>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import TaskItem from './TaskItem.vue';
export default Vue.extend({
  name: 'TaskList',
  data(){
    return{
      newTaskText:'',
      favorites: 0,
      isError: false,
    }
  },
  components: { TaskItem },
  created(){
    this.$store.dispatch('getTasks');
  },
  computed: {
    tasks () {
      if(this.favorites === 1)
        return this.$store.state.tasks.filter(el => !el.isDone && el.isFavorite)
      else
        return this.$store.state.tasks.filter(el => !el.isDone)
    },
    doneTasks () {
      if(this.favorites === 1)
        return this.$store.state.tasks.filter(el => el.isDone && el.isFavorite)
      else
        return this.$store.state.tasks.filter(el => el.isDone)
    },
    isLoading(){
      return this.$store.state.isLoading;
    }
  },
  methods:{
    addTask(){
      if(this.newTaskText.length > 0){
        const newTask: any = {
          text: this.newTaskText,
          isDone: false,
          isFavorite: false
        };
        this.$store.dispatch('addTask', newTask).then(()=>{this.newTaskText = ''});
      }
      else
        this.isError = true;
    }
  }
})
</script>

<style scoped lang="scss">
  .tasks{
    width: 25%;
    &-list{
      max-height: 500px;
      overflow: auto;
      &::-webkit-scrollbar{
        width: 8px;
        background-color: gainsboro;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb{
        border: 2px solid gainsboro;
        border-radius: 4px;
        background-color: #6A76AB;
      }
    }
  }
  .header{
    ::v-deep{
      .v-toolbar__content{
        display: flex !important;
        align-items: center !important;
      }
      .v-app-bar-title__content{
            width: auto !important;
      }
    }
  }
  .input-field{
    height: 50px !important;
    display: flex;
    align-content: flex-start !important;
    width: 100%;
    justify-content: space-between;
  }
</style>
