<template>
  <v-container>
    <h2 class="display-2 pa-10">ลงทะเบียนปฏิบัติธรรมศูนย์สาขาภายในประเทศ</h2>
    <v-alert
      dense
      outlined
      type="error"
      :value="alertInput"
      close-text="Close Alert"
      transition="scale-transition"
    >
      กรุณากรอก <strong>ชื่อของคุณ</strong> 
    </v-alert>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <!-- <v-icon>keyboard_arrow_up</v-icon> -->
      <v-icon>/\</v-icon>
    </v-btn>
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
                <div class="text--primary">หัวหน้าศูนย์  <br>{{el.holderName}}<br>
                </div>
              </v-card-text>
          <v-card-actions>
            <v-btn 
            @click="clickedSelected(el)"
            text color="primary accent-4">select</v-btn>
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
        alertInput: false,
        msg: "",
        selected: "",
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 20 || 'Name must be less than 10 characters',
        ],
        provinceRules: [
          v => !!v || 'province is required',
        ],
        fab: false
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
        if(this.msg){
          this.$store.dispatch('setLastMemBySelected', {input: this.msg,  selected: selected})
          this.$router.push('/result')
        }else{
          this.alertInput = !this.alertInput
          
          this.$vuetify.goTo(0)
        }
      },
      clickedSendId(id){
        this.$router.push(`/result/${id}`)
      },
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        this.fab = top > 20
      },
      toTop () {
        this.$vuetify.goTo(0)
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
