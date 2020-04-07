<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msgFromHello }}</h1>
    <HelloWorld :msgHello="msgHome" @sendingUp="received"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    msgHome: 'Sending From Home.vue',
    msgFromHello: '',
  }),
  components: {
    HelloWorld
  },
  methods: {
    received (e) {
      this.msgFromHello = e
    }
  }
}
</script>
