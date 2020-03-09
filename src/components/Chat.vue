<template>
  <div class="chat container">
      <h3 class="teal-text center-align">Maniac Chat</h3>
      <div class="card">
          <div class="card-content">
              <Messages :msgs="msgs" :last="last"/>
          </div>
          <div class="card-action">
              <ChatForm :name="name"/>
          </div>
      </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Messages from "@/components/messages"
import ChatForm from "@/components/ChatForm"
import  moment from 'moment'
export default {
    name: 'Caht',
    components:{
        Messages, ChatForm
    },
    props: ['name'],
    data(){
        return {
            msg: null,
            time: new Date,
            msgs: [],
            last: null
        }
    },
    beforeCreate(){
        db.collection('msgs').onSnapshot(snap => {
            snap.docChanges().forEach(change => {
                let doc = change.doc
                if(change.type == 'added'){
                    this.msgs.push({
                        id: doc.id,
                        sender: doc.data().sender,
                        content: doc.data().content,
                        time: moment(doc.data().time).fromNow()
                    })
                    this.last = doc.id
                }
            })
        })
    }
}
</script>

<style scoped lang="scss">
.chat{
    max-width: 90%;
}
</style>