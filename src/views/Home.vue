<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <h2>ค้นหาศูนย์แต่ละจังหวัด</h2>
    <h2>{{lastMember}}</h2>

    <p>ชื่อของคุณ : {{ msgHome }}</p>

    <input v-model="msgHome" placeholder="ชื่อจริง">
    <HelloWorld @lastMem="lastMem" :msg="msgHome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      msgHome:"",
      lastMember:""
    }
  },
  methods:{
    lastMem(val){
      this.lastMember = val
    }
  }
}
</script>
