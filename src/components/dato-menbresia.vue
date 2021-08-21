<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                  height="250"
                  src="https://image.freepik.com/foto-gratis/chef-profesional-cocina-preparando-comida_23-2147863751.jpg"
              ></v-img>

              <v-card-title>Homemade Premiun</v-card-title>

              <v-card-text>
                <h1>Precio</h1>
                <h2>s/24.99</h2>


              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Beneficios</v-card-title>

              <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-chip>Sin limites de recetas por mes</v-chip>

                  <v-chip>Destaca todas tus recetas</v-chip>

                </v-chip-group>
              </v-card-text>

              <v-card-actions>
              </v-card-actions>

            </v-card>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">


            <v-card>
              <v-card-title>Pago de menbresia Homemade</v-card-title>
              <v-card-text>
                <v-form v-model="isValid">
                  <h4>Numero de tarjeta</h4>
                  <v-text-field
                      v-model="numeroTarjeta"
                      :rules="dateRules"
                      error-count="2"
                      required>
                  </v-text-field>
                  <h4>CVV</h4>
                  <v-text-field
                      v-model="cvv"
                      :rules="dateRules"
                      type="password"
                      error-count="2"
                      required>
                  </v-text-field>
                  <h4>Dirreccion</h4>
                  <v-text-field
                      v-model="direccion"
                      :rules="dateRules"
                      error-count="2"
                      required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn v-on:click="greet" color="primary" :disabled="!isValid">
                  Pagar</v-btn>
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
  name: "dato-menbresia",
  data: () => ({
    loading: false,
    selection: 1,
    direccion: null,
    numeroTarjeta: null,
    cvv: true,
    isValidPasword: true,
    isValidEmail: true,
    dateuser: null,
    lastname: null,
    dateRules: [
      v => !!v || 'Name is required',
    ],

  }),
  methods: {

    greet: function () {
      // `this` inside methods points to the Vue instance
      alert('Se A Guardado correctamente  !')

      // `event` is the native DOM event

    },

    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },

    putMebresia() {
      const editPerfil  =  {
        "name": "Diego",
        "lastName": "Sanchez",
        "dateOfBirth": "2020-10-31T03:00:18.000+00:00",
        "email": "diego98@hotmail.com",
        "password": "4321",
        "profilePicture": "",
        "connected": false,
        "certificate": "",
        "gender": "masculino"
      };
      axios.put('https://homemadegg.herokuapp.com/api/userChefs/1', editPerfil).catch(e=>{
        this.errors.push(e);
      });
    },



  },

}
</script>

<style scoped>

</style>
