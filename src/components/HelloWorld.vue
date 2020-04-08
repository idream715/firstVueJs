<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- work1 -->
      <!-- <h1>your name is:{{message}}</h1>
      <input v-model="message" placeholder="nick name">
      <button @click="submit">click</button>
      <button v-on:click="greet()">alert</button>
      <button v-on:click="reverseMessage">reverse</button>
      <h1 v-if="isShow">Hello {{message}}!</h1>
      <br>
      <hr> -->

    <!-- work2 -->
    <p>จังหวัด :{{selected}}</p>
    <select v-model="selected" >
      <option value="">กรุณาเลือกจังหวัด</option>
      <option v-for="province in provinces " :key="province" :value="province">{{province}}</option>
    </select>
    <button @click="submit">submit</button>
    
    <!-- <button @click="$emit('lastMem', rederName('พระ',lastMem))">select</button> -->

    <br>
    <br>
    <table v-if="isShow">
      <tr>
        <th>ลำดับ</th>
        <th>ศูนย์</th>
        <th>หัวหน้าศูนย์</th>
      </tr>
      <tr v-for="(el, i) in selectedP" :key="i">
        <td>{{i+1}}</td>
        <td>{{el.addressName}}</td>
        <td>{{rederName("พระ",el.holderName)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
      return {
        isShow: true,
        selected: ""
      }
    },
    methods: {
      // reverseMessage: function () {
        //   return  this.message = this.message.split('').reverse().join('')
        // },
        // greet: function () {
        //   return alert('Hello ' + this.message + '!')
        // },
      submit(){
        // this.isShow = !this.isShow 
        // this.$store.dispatch('setProvinceBySelected', this.selected)
        if(this.selected){
          this.$store.dispatch('setLastMemBySelected', {input: this.msg,  selected: this.lastMem})
          this.$router.push('/result')
        }else{
          alert("กรุณากรอกเลือกจังหวัด")
        }
      },
      rederName(prefix,input){
        if(this.msg){
          return `${prefix}${this.msg} ${input.split(" ").slice(1).join(' ')}`
        }else{
          return input
        }
      }
    },
    computed:{
      addresses(){
        return this.$store.getters.getAddress
      },
      provinces(){
        return this.$store.getters.getProvince
      },
      selectedP(){
        return this.addresses.filter(address => address.addressLv2 === this.selected)
      },
      lastMem() {
        return this.selectedP[this.selectedP.length - 1];
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
