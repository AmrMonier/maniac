<template>
  <div class="chat-form">
    <form @submit.prevent='sendMsg'>
        <input type="text" v-model="msg" @keydown.enter="sendMsg" placeholder="Enter your Message...">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init"
export default {
    name: 'ChatForm',
    props: ['name'],
    data(){
        return {
            msg: null,
            feedback: null
        }
    },
    methods:{
        sendMsg(){
            if (this.msg) {
                db.collection('msgs').add({
                sender: this.name,
                content: this.msg,
                time: Date.now()
            }).catch(err => {
                window.alert(err)
            })
            this.msg = null
            this.feedback = null
            } else {
                this.feedback = 'Can\'t send empty message'
            }
        }
    }
    
}
</script>

<style>

</style>