<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-card :loading="loading" class="mx-auto my-auto" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
              <v-img height="250" v-bind:src="currentUser.picture">
              </v-img>
              <v-card-title>{{currentUser.name + ' ' + currentUser.lastname}}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                  <div class="grey--text ml-4">
                    4.5 (4)
                  </div>
                </v-row>
                <div>
                  'Date: 2000-05-03T00:00:00'
                </div>
                <div>
                  {{ 'Email de contacto: ' + currentUser.email}}
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title>Ultimas recetas subidas</v-card-title>
              <v-card-text>
                <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>

                  <div v-for="recipe in recipes" :key="recipe.nameRecipe">
                    <v-chip>{{recipe.nameRecipe}}</v-chip>
                  </div>


                </v-chip-group>
              </v-card-text>

              <v-card-actions>

                <v-btn
                    color="red"
                    text

                >
                  <router-link to="/hoomechef/edit">
                    <span class="mr-2">Editar perfil</span>
                  </router-link>

                  <v-icon left>
                    mdi-pencil
                  </v-icon>

                </v-btn>
              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">

            <v-card>
              <v-card-title>Cambio de contraseña</v-card-title>
              <v-card-text>
                <v-form v-model="isValidPasword">
                  <h4>Escriba su nuevo contraseña</h4>
                  <v-text-field
                      label="Password"
                      v-model="password"
                      type="password"
                      :rules="passwordRules"
                      error-count="5"
                      required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :disabled="!isValidPasword" @click="putContraseña(password)">Guardar</v-btn>
              </v-card-actions>
            </v-card>

            <v-card>
              <v-card-title>Cambio de email</v-card-title>
              <v-card-text>
                <v-form v-model="isValidEmail">
                  <h4>Escriba su nuevo email</h4>
                  <v-text-field
                      label="Email"
                      v-model="email"
                      :rules="emailRules"
                      error-count="2"
                      required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn v-on:click="greet" color="primary" :disabled="!isValidEmail" @click="putEmail(email)">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>


            <v-card>
              <v-card-title>Edicion de datos publicos</v-card-title>
              <v-card-text>
                <v-form v-model="isValid">
                  <h4>Nombre</h4>

                  <div v-for="user in users" :key="user.name">
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        error-count="2"
                        required
                    >
                    </v-text-field>
                    <h4>Apellido</h4>
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        error-count="2"
                        required>
                    </v-text-field>
                    <h4>Fecha de nacimiento</h4>
                    <v-text-field
                        label=31-08-1999
                        v-model="dateuser"
                        type="date"
                        :rules="dateRules"
                        error-count="2"
                        required>
                    </v-text-field>
                  </div>


                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn v-on:click="greet" color="primary" :disabled="!isValid" @click="putEdit(firstname, lastname, dateuser)">Guardar</v-btn>
              </v-card-actions>
            </v-card>


          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: "edit-perfil",
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    currentUserFullName() {
      return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
    email: null,
    users:[],
    recipes:[],
    password: null,
    isValid: true,
    isValidPasword: true,
    isValidEmail: true,
    firstname: null,
    dateuser: null,
    lastname: null,
    dateRules: [
      v => !!v || 'Name is required',
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 20 characters',
    ],
    emailRules:[
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    passwordRules:[
      v => !!v || 'Password is required',
      v => (v && v.length >= 5) || 'Password must have at least 5 characters',
      v => /(?=.*[A-Z])/.test(v) || 'Password must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@#$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }),
  created() {
    axios.get('https://homemade20201124161107.azurewebsites.net/api/recipe')
        .then(response =>{
          this.recipes = response.data;
          console.log(response.data);
        })
        .catch(e=>{
          this.errors.push(e);
        })
    axios.get('https://homemade20201124161107.azurewebsites.net/api/userchef')
        .then(response =>{
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e=>{
          this.errors.push(e);
        })
  },

  methods: {

    greet: function () {

      alert('Se A Guardado correctamente  !')

    },

    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },

    putContraseña(password) {
      const editPerfil  =  {
        "name": "Aaron",
        "lastname": "Alva Caffo",
        "password": password,
        "email": "aaron_caffo@hotmail.com",
        "picture": "",
        "date": "2000-05-03T00:00:00",
        "gender": false,
        "certificate": ""
      };
      axios.put('https://homemade20201124161107.azurewebsites.net/api/userchef/id?id=100', editPerfil).catch(e=>{
        this.errors.push(e);
      });
    },

    putEmail(email) {
      const editPerfil  =  {
        "name": "Aaron",
        "lastname": "Alva Caffo",
        "password": "12345",
        "email": email,
        "picture": "",
        "date": "2000-05-03T00:00:00",
        "gender": false,
        "certificate": ""
      };
      axios.put('https://homemade20201124161107.azurewebsites.net/api/userchef/id?id=100', editPerfil).catch(e=>{
        this.errors.push(e);
      });
    },

    putEdit(firstname, lastname, dateuser) {
      const editPerfil  =  {
        "name": firstname,
        "lastname": lastname,
        "password": "12345",
        "email": "aaron_caffo@hotmail.com",
        "picture": "",
        "date": dateuser,
        "gender": false,
        "certificate": ""
      };
      axios.put('https://homemade20201124161107.azurewebsites.net/api/userchef/id?id=100', editPerfil).catch(e=>{
        this.errors.push(e);
      });
    },




  },

}
</script>

<style scoped>

</style>
