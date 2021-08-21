<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
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
name: "perfil-chef",
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
    recipes:[],
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
    axios.get('https://homemade20201124161107.azurewebsites.net/api/recipe/id?id='+ this.currentUser.id)
        .then(response =>{
          this.recipes = response.data;
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
