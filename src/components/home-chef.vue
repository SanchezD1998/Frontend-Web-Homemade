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
                  'Date: 2020-05-03T00:00:00'
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

            <v-btn class="mt-10 ml-8 green accent-2">
                <router-link to="/homechef/recipe/add">
                    <span>Agregar una receta</span>
                </router-link>
            </v-btn>
        </v-col>

        <v-col>
          <div v-if="recipes.length === 0">
            <v-img height="200px" src="https://thumbs.dreamstime.com/b/haga-frente-la-expresi%C3%B3n-del-%C3%A2%E2%82%AC-hombre-cocinero-triste-cansada-109384473.jpg"></v-img>
            <h2> No cuentas con ninguna receta creada :-(</h2>
            <h2> No esperece mas y crea una receta</h2>
          </div>
          <div v-else>
            <v-sheet min-height="70vh" rounded="lg">
              <div v-for="recipe in recipes" :key="recipe.nameRecipe" >
                <v-card class="my-0" >
                  <v-img height="200px" v-bind:src="recipe.img" ></v-img>
                  <v-card-title>{{ recipe.nameRecipe }}</v-card-title>
                  <v-card-subtitle>{{ recipe.instructions }}</v-card-subtitle>
                  <v-card-actions>
                    <v-btn color="orange lighten-2" v-bind:href="recipe.url" text>
                      <router-link to="/homechef/recipe">
                        <span>Ver Mas</span>
                      </router-link>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-sheet>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'



export default {
  name: "home-chef",
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
    drawer: false,
    recipes:null,
    empty: true,
    users:[],
    errors: [],
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },

  created() {
    axios.get('https://homemade20201124161107.azurewebsites.net/api/recipe/id?id=' + this.currentUser.id)
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
  }
}
</script>

<style scoped>

</style>
