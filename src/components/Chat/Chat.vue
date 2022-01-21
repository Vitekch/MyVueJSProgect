<template>
    <v-card width="50%">
        <v-app-bar
            dark
            shrink-on-scroll
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(100,100,100,.6), rgba(100,100,100,.6)"
                    style="filter: blur(2px); transform: scale(1.2)"
                ></v-img>
            </template>
            <v-app-bar-title>Simple Chat</v-app-bar-title>
            <template v-slot:extension>
                <div class="input-field">
                    <v-text-field
                        v-model.lazy="name"
                        :disabled="isAuth"
                        label="Username"
                        outlined
                        dense
                        :error="isLoginError"
                        @focus="isLoginError = false"
                        hide-details
                    ></v-text-field>
                    <v-btn
                        color="var(--color-green)"
                        height="40"
                        class="ml-1"
                        @click="login"
                        :disabled="isAuth"
                        ref="loginBnt"
                    >
                        Login
                    </v-btn>
                    <v-btn
                        color="deep-orange lighten-1"
                        height="40"
                        class="ml-1"
                        @click="logout"
                        :disabled="!isAuth"
                        ref="logoutBtn"
                    >
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-app-bar>


        <v-card class="ma-2 messages-list" outlined elevation="0" v-if="isAuth" ref="chatView">
            <Message v-for="(message, idx) in messages" :user="message.user" :message="message.message" :amI="message.user===name" :userColor="message.userColor" :key="idx"></Message>
        </v-card>
        <v-form v-if="isAuth" @submit.prevent>
            <v-container fluid>
                <v-row>
                    <v-col cols="8">
                        <v-text-field v-model="message" label="Message" outlined dense hide-details color="var(--color-green)">
                        </v-text-field>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn type="submit" color="var(--color-green)" dark @click="sendMessage">
                            Send
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Message from "./Message.vue"


export default Vue.extend({
    data(){
        return{
            ws: new WebSocket("ws://localhost:8081"),
            name: '',
            isAuth: false,
            message: '',
            isLoginError: false,
            messages: [],
            userColor: '',
        }
    },
    components: { Message },
    methods: {
        sendMessage(){
            if(this.name && this.message){
                this.ws.send(`{"user": "${this.name}", "message": "${this.message}", "userColor": "${this.userColor}"}`);
                this.message = '';
            }
        },
        login(){
            if(this.name){
                this.ws.onmessage = ({data}) => {
                    console.log(data)
                    data.text().then(data => {
                        const message = JSON.parse(data);
                        this.messages.push(message);
                    })
                    setTimeout(()=>{
                        const chatView = this.$refs.chatView?.$el as HTMLElement;
                        console.log(chatView)
                        chatView.scroll(0,chatView.scrollHeight);
                    },100)
                }
                const getRand = (max:number) =>{
                   return Math.floor(Math.random() * max + 100);
                }
                this.userColor = `rgba(${getRand(120)},${getRand(120)},${getRand(120)}, 1)`;
                this.isAuth= true;
                this.ws.send(`{"user": "${this.name}", "message": "Joined to chat! 🤪", "userColor": "${this.userColor}"}`);
            }
        },
        logout(){
            this.messages.length = 0;
            this.ws.send(`{"user": "${this.name}", "message": "Has gone... 😵", "userColor": "${this.userColor}"}`);
            this.ws.onmessage = ({data}) => {
                return false;
            }
            this.name = '';
            this.isAuth = false;
        }
    }
})
</script>

<style lang="scss">
    .messages{
    &-list{
      height: 300px;
      overflow: auto;
      &::-webkit-scrollbar{
        width: 8px;
        background-color: gainsboro;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb{
        border: 2px solid gainsboro;
        border-radius: 4px;
        background-color: var(--color-green);
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