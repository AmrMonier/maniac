<template>
  <div class="msgs">
    <ul class="msgs-list" v-chat-scroll="{always: true, smooth: true}" id="msg-list">
        <li class="msg left-align" v-for="msg in msgs" :key="msg.id" :id="msg.id">
            <span class="teal-text">{{msg.sender}}</span>
            <span class="grey-text text-darken-3 msg-cont">{{msg.content}}</span>
            <span class="grey-text time">{{msg.time}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import db from "@/firebase/init"
export default {
    name: 'Messages',
    props: ['msgs', 'last'],
    data(){
        return {
        }
    }
}
</script>

<style scoped lang="scss">
.msgs{
    height: 60vh;
    overflow-y: scroll;
    .msgs-list{
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        .msg{
            max-width: 85%;
            span{
                font-size: 1.3rem;
                display: block;
            }
            .msg-cont{
                font-size: 1.1rem;
                padding-left: 1rem;
            }
            .time{
                font-size: 0.8rem;
            }
        }
    }
}
</style>