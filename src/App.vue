<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/learning">Learn</router-link>
    </div>
    <!-- work1 -->
    <!-- <h1>your name is:{{message}}</h1>
    <input v-model="message" placeholder="nick name">
    <button @click="show">click</button>
    <button v-on:click="greet()">alert</button>
    <button v-on:click="reverseMessage">reverse</button>
    <h1 v-if="isShow">Hello {{message}}!</h1>
    <br>
    <hr> -->

    <!-- work2 -->
    <h2>ค้นหาศูนย์แต่ละจังหวัด</h2>

    <input v-model="fullname" placeholder="ชื่อ - นามสกุล">
    <input v-model="name" placeholder="ชื่อจริง">

    <input v-model="surname" placeholder="นามสกุล">

    <p>จังหวัด :{{selected}}</p>
    <select v-model="selected" >
      <option value="">กรุณาเลือกจังหวัด</option>
      <option v-for="province in provinces " :key="province" :value="province">{{province}}</option>
    </select>

    <button @click="show">submit</button>

    <br>
    <br>
    <table v-if="isShow">
      <tr>
        <th>ลำดับ</th>
        <th>ศูนย์</th>
        <th>หัวหน้าศูนย์</th>
      </tr>
      <tr v-for="(el, i) in slectecd" :key="i">
        <td>{{i+1}}</td>
        <td>{{el.addressName}}</td>
        <td>{{rederName(el.holderName)}}</td>
      </tr>
    </table>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        surname: "",
        isShow: false,
        selected: "",
        msg: '',
      }
    },
    watch: {
    },
    created () {

    },
    mounted () {

    },
    destroyed () {

    },
    methods: {
      // reversename: function () {
      //   return  this.name = this.name.split('').reverse().join('')
      // },
      // greet: function () {
      //   return alert('Hello ' + this.name + '!')
      // },
      show(){
        this.isShow = !this.isShow //toggle

        return this.$store.dispatch('setProvinceBySelected', this.selected)
      },
      rederName(input){
        let changeName = `พระ${this.name} ${input.split(" ").slice(1).join(' ')}`
        return changeName
      }
    },
    computed:{
      addresses () {
        return this.$store.getters.getAddress
      },
      provinces(){
        return this.$store.getters.getProvince
      },
      slectecd(){
        return this.$store.getters.getProvinceSelected
      },
      fullname: {
        get() {
          return `${this.name} ${this.surname}` 
        },
        set (val) {
          let splitfullname = val.split(" ")
          this.name = splitfullname[0]
          this.surname = splitfullname[splitfullname.length - 1]
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
