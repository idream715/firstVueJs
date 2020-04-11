<template>
    <div class="Result">
        <div class="row">
            <img alt="proflie" src="../assets/6001032.jpg">
            <h4>ชื่อ : {{name}}</h4>
            <h4>ฉายา : {{lastName}}</h4>
            <h4>ศูนย์ : {{lastMem.addressName}}</h4>
            <h4>จังหวัด : {{lastMem.addressLv2}}</h4>
            <h4>ผลการเลือกของคุณ{{userName}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
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
        }
    }
}
</script>

<style scoped>
img {
    width : 200px;
    float : center;
}
</style>