<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div class="hello">
          <p>จังหวัด :{{selected}}</p>
          <select v-model="selected" >
            <option value="">กรุณาเลือกจังหวัด</option>
            <option v-for="province in provinces " :key="province" :value="province">{{province}}</option>
          </select>
          <!-- <button @click="submit">submit</button> -->
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
      },
      clickedSelected(selected){
        // console.log(e.target.value)
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
