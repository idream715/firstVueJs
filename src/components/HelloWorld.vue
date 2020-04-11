<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div class="hello">
          <h2>ค้นหาศูนย์แต่ละจังหวัด</h2>
          <p>ชื่อของคุณ : {{ msg }}</p>
          <input v-model="msg" placeholder="ชื่อจริง">
          <p>จังหวัด :{{selected}}</p>
          <select v-model="selected" >
            <option value="">กรุณาเลือกจังหวัด</option>
            <option v-for="province in provinces " :key="province" :value="province">{{province}}</option>
          </select>
          
          <br>
          <br>
          <table v-if="isShow">
            <tr>
              <th>ลำดับ</th>
              <th>ศูนย์</th>
              <th>หัวหน้าศูนย์</th>
              <th>ดูข้อมูล</th>
            </tr>
            <tr v-for="(el, i) in selectedP" :key="i">
              <td>{{i+1}}</td>
              <td>{{el.addressName}}</td>
              <td>{{rederName("พระ",el.holderName)}}</td>
              <button @click="clickedSelected(el)">Select</button>
              <!-- <button @click="clickedSendId(el.id)">Select</button> -->
            </tr>
          </table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
   
    data() {
      return {
        isShow: true,
        msg: "",
        selected: ""
      }
    },
    methods: {
      submit(){
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
      },
      clickedSelected(selected){
        this.$store.dispatch('setLastMemBySelected', {input: this.msg,  selected: selected})
        this.$router.push('/result')
      },
      clickedSendId(id){
        this.$router.push(`/result/${id}`)
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
