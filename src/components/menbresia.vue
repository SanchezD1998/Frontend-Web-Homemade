<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col  class="mx-auto my-12" cols="2">
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
                  src="https://thumbs.dreamstime.com/t/mujer-casera-novata-del-cocinero-en-la-cocina-roja-del-delantal-en-casa-que-celebra-cocinar-el-griter%C3%ADo-de-la-cacerola-y-del-62985199.jpg"
              ></v-img>

              <v-card-title>Homemade Standar</v-card-title>

              <v-card-text>
                <h1>Precio</h1>

                <h2>s/00.00</h2>

              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Beneficios</v-card-title>

              <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-chip>2 publicaciones de recetas al mes</v-chip>

                  <v-chip>sin destaque de recestas</v-chip>


                </v-chip-group>
              </v-card-text>

              <v-card-actions>

              </v-card-actions>

            </v-card>
          </v-sheet>
        </v-col>

        <v-col  class="mx-auto my-12" cols="2">
          <v-sheet  rounded="lg">

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
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >

                  <router-link to="/hoomechef/menbresia/add">
                    <span class="mr-2">Obtener</span>
                  </router-link>

                </v-btn>
              </v-card-actions>

            </v-card>


          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "menbresia",
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>

</style>
