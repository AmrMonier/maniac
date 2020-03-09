<template>
  <div class="welcome container">
    <h1 class="header teal-text">Maniac Real Time Chat</h1>
    <div class="card">
      <div class="card-title">
        Welcome
      </div>
      <div class="card-content center-align">
        <form @submit.prevent="enterChat">
          <input type="text" placeholder="Enter your name..." v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button type="submit" class="teal btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if (this.name) {
        this.feedback = null
        this.$router.push({name: 'chat', params: {name: this.name}})     

      } else {
        this.feedback = 'You need to enter your name to chat'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    font-weight: 400;
    font-size: 2rem;
  }
  .welcome{
    .card{
      padding: 1rem;
    }
    margin-top: 2rem;
    max-width: 60%;
    .btn{
      margin: 0.5rem auto
    }
  }
</style>
