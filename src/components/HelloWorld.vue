<template>
  <v-container>
          <h2 class="display-2 pa-10">ลงทะเบียนปฏิบัติธรรมศูนย์สาขาภายในประเทศ</h2>
    <v-row class="text-center">
           <v-col cols="12" sm="6">
              <v-text-field  
                v-model="msg"  
                label="ชื่อของคุณ"  
                :rules="nameRules" 
                :counter="20" 
                required >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select 
                v-model="selected" 
                :items="provinces" 
                label="กรุณาเลือกจังหวัด"  
                :rules="provinceRules" 
                required>
              </v-select> 
            </v-col>
           <br>
    </v-row>
    <v-row>
      <v-card class="mx-auto ma-4 pa-4 col-12"  max-width="344" v-for="(el, i) in selectedP" :key="i" >
              <v-card-text >
                <v-col cols="12">
                  <div height="300" class="display-1 text--primary">{{el.addressName}} </div>
                </v-col>
                <div class="text--primary">หัวหน้าศูนย์  <br> {{rederName("พระ",el.holderName)}}<br>
                </div>
              </v-card-text>
          <v-card-actions>
            <v-btn 
            @click="clickedSelected(el)"
            text color="primary accent-4" >select</v-btn>
          </v-card-actions>
      </v-card>
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
        selected: "",
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 20 || 'Name must be less than 10 characters',
        ],
        provinceRules: [
          v => !!v || 'province is required',
        ],
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
