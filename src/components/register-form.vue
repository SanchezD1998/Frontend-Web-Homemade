<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-title class="text-center display-2 orange--text text--accent-3 mx-6">Iniciar Sesion</v-card-title>
                    <v-card-text class="mt-12">
                      <v-form v-model="isValid" @submit.prevent="handleRegister">
                        <v-text-field
                            label="Nombre"
                            v-model="user.name"
                            :rules="[v => !!v || 'Se requiere nombre']"
                            required
                            prepend-icon="mdi-account"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Apellido"
                            v-model="user.lastName"
                            :rules="[v => !!v || 'Se requiere apellido']"
                            required
                            prepend-icon="mdi-account"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Correo electronico"
                            v-model="user.email"
                            :rules="emailRules"
                            required
                            prepend-icon="mdi-email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Contraseña"
                            v-model="user.password"
                            type="password"
                            :rules="passwordRules"
                            required
                            prepend-icon="mdi-lock"
                        >
                        </v-text-field>
                        <v-text-field
                            label=31-08-1999
                            v-model="user.date"
                            type="date"
                            :rules="dateRules"
                            error-count="2"
                            required
                            prepend-icon="mdi-calendar-account">
                        </v-text-field>
                        <v-text-field
                            label="Genero"
                            v-model="user.gender"
                            :rules="[v => !!v || 'Se requiere ingresar genero']"
                            required
                            prepend-icon="mdi-gender-male-female"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn class="mx-9" rounded color="orange accent-3" :disabled="!isValid" @click="postUser()">
                          Registrarse
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col cols="11" md="4" class="orange accent-3">
                    <v-card-text class="black--text mt-12">
                      <h1 class="text-center display-1">Bienvenido a Homemade</h1>
                      <h5 class="text-center">Si ya tiene una cuenta, inicie sesion</h5>
                      <v-card-actions>
                        <v-btn class="mx-13" rounded outlined="" dark>
                          <router-link to="/login">
                            Iniciar Sesion
                          </router-link>
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import User from "@/models/user";
import axios from 'axios';

export default {
name: "register-form",
  data(){
    return{
      user: new User('', '', '', '', ''),
      submitted: false,
      successful: false,
      message: '',
      email:null,
      password:null,
      isValid:null,
      emailRules: [
        v=> !!v || 'Se requiere correo electronico',
        v=> /.+@.+/.test(v) || 'El correo electronico debe ser valido'
      ],
      passwordRules: [
        v => !!v || 'Se requiere contraseña'
      ],
      dateRules: [
        v => !!v || 'Fecha de nacimiento requerido',
      ],
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    postUser() {
      const data  =  {
        "name": this.user.name,
        "lastname": this.user.lastName,
        "password": this.user.password,
        "email": this.user.email,
        "picture": "data:image/png;base64,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",
        "date": "2020-11-03T00:00:00",
        "gender": false,
        "certificate": ""
      };
      axios.post('https://localhost:44300/api/userchef', data).catch(e=>{
        this.errors.push(e);
      });
      this.$router.push('/login');
    },
    handleRegister() {
      this.message = '';
      this.submitted = true;
      if (this.isValid) {
        this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message = (error.response && error.response.data)
                  || error.message || error.toString();
              this.successful = false;
            }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
