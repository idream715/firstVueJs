<template>
  <v-form v-model="valid">
    <v-container>
      <v-card>
        <v-card-title class="d-flex justify-center display-2 mt-5 blue--text" >
          LOGIN
        </v-card-title>
        <v-row class="ma-6">
          <v-col
            cols="12"
            >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            >
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              :counter="10"
              :rules="passwordRules"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-end"
            >
            <v-btn class="mt-3" @click="login" color="success">
              submit
            </v-btn>
          </v-col>

        </v-row>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => v.length <= 10 || 'password must be valid',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      login(){
        this.$store.dispatch('login', {email:this.email , password:this.password})
      }
    },
  }
</script>