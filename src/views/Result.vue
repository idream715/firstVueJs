<template>
    <div class="Result">
      

        <v-card class="mx-auto my-12" max-width="1000">
            <div class="row">
                <div class="col-md-5 pl-6">
                    <v-img height="100%" src="../assets/6001032.jpg"></v-img>
                </div>    
                <div class="col-md-7"> 
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                        <v-img
                            class="elevation-6"
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-img>
                        </v-list-item-avatar>
                        <v-card-title>{{userName}}</v-card-title>
                    </v-list-item>  

                    <v-card-title class="font-weight-bold">ติดต่อ</v-card-title>
                    
                    <v-card-text class="subtitle-1 font-weight-medium">
                       
                        <div>ชื่อหัวหน้าศูนย์ : {{name}}</div>
                        <div>ฉายา : {{lastName}}</div>
                        <div>Tel. : 0{{lastMem.telephone}}</div>
                    </v-card-text>
                    
                    <v-card-title class="font-weight-bold">ที่อยู่</v-card-title>

                    <v-card-text class="subtitle-1 font-weight-medium">
                        <div>ศูนย์ : {{lastMem.addressName}}</div>
                        <div>ตำบล : {{lastMem.addressLv4}}</div>
                        <div>อำเภอ : {{lastMem.addressLv3}}</div>
                        <div>จังหวัด : {{lastMem.addressLv2}}</div>
                        <div>ภาค : {{lastMem.addressLv1}}</div>
                        <div>รหัสไปรษณีย์ : {{lastMem.postCode}}</div>
                        <div>จำนวนพระ : {{lastMem.numberOfMonk}} รูป</div>
                        <div> </div>
                    </v-card-text>

                    <v-divider class="mx-4 my-4"></v-divider>

                    <!-- <v-row>
                        <v-col cols="12" lg="6">
                        <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="dateFormatted"
                                label="Date"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                prepend-icon="event"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
                        <p>Date in ISO format: <strong>{{ date }}</strong></p>
                        </v-col>
                
                        <v-col cols="12" lg="6">
                        <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="computedDateFormatted"
                                label="Date (read only text field)"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                prepend-icon="event"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                        <p>Date in ISO format: <strong>{{ date }}</strong></p>
                        </v-col>
                    </v-row>  -->
                
                    <v-card-text>
                        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                            <v-chip>5:30PM</v-chip>
                            <v-chip>7:30PM</v-chip>
                            <v-chip>8:00PM</v-chip>
                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <!-- <v-btn class="ma-2" color="primary" dark>
                            ยืนยัน
                        </v-btn> -->
                        <v-dialog v-model="dialog" width="500">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark v-on="on">ยืนยัน</v-btn>
                            </template>
                    
                            <v-card>
                                <v-card-title class="headline grey lighten-2" primary-title>อนุโมทนาบุญกับการปฎิบัติธรรมในครั้งนี้ </v-card-title>
                                <v-card-text>สาธุ</v-card-text>

                                <v-divider></v-divider>
                        
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog = false">ยอมรับ</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>

                </div>
            </div>
        </v-card>

    </div>
</template>

<script>

export default {
    data(){
    // data: vm => ({
    //   date: new Date().toISOString().substr(0, 10),
    //   dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    //   menu1: false,
    //   menu2: false,
    // }),
       return{
           dialog:false,
       }
    },

    methods:{
    //     formatDate (date) {
    //     if (!date) return null

    //     const [year, month, day] = date.split('-')
    //     return `${month}/${day}/${year}`
    //   },
    //   parseDate (date) {
    //     if (!date) return null

    //     const [month, day, year] = date.split('/')
    //     return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    //   },
    },

    computed:{
        userName(){
            return this.$store.getters.getInput
        },
        name(){
            return this.$store.getters.getName
        },
        lastName(){
            return this.$store.getters.getLastName
        },
        lastMem(){
            return this.$store.getters.getLastMem
        },
        // computedDateFormatted () {
        // return this.formatDate(this.vm.date)
        // }
    },

    // watch: {
    //     date (val) {
    //     this.dateFormatted = this.formatDate(this.vm.date)
    //   },
    // },
}
</script>

<style scoped>
img {
    width : 200px;
    float : center;
}
</style>