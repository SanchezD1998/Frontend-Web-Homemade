<template>
  <v-app>
    <v-app-bar app color="orange" flat>
      <v-container class="py-0 fill-height">
        <div v-if="currentUser">
          <router-link to="/">
            <v-img
                v-bind:src="currentUser.picture"
                class="rounded-circle mr-4"
                max-height="45"
                max-width="45"
            ></v-img>
          </router-link>
        </div>
        <v-toolbar-title class="text-h4">Homemade</v-toolbar-title>

        <v-divider
            class="mx-5"
            vertical
        ></v-divider>

        <v-btn
            depressed
            rounded
            target="_blank"
            text>
          <router-link to="/homechef/search-receta">
            <span class="mr-2">Buscar</span>
          </router-link>

        </v-btn>

        <div v-if="currentUser">
          <v-divider
              class="mx-5"
              vertical
          ></v-divider>

          <v-btn
              depressed
              rounded
              target="_blank"
              text>
            <router-link to="/homechef/menu">
              <span class="mr-2">Mi Menu</span>
            </router-link>

          </v-btn>
        </div>

        <div v-if="currentUser">

          <v-divider
              class="mx-5"
              vertical
          ></v-divider>

          <v-btn
              depressed
              rounded
              target="_blank"
              text
          >
            <router-link to="/perfil">
              <span class="mr-2">Mis Recetas</span>
            </router-link>

          </v-btn>
        </div>


        <div v-if="currentUser">

          <v-divider
              class="mx-5"
              vertical
          ></v-divider>

          <v-btn
              depressed
              rounded
              target="_blank"
              text
          >
            <router-link to="/hoomechef/menbresia">
              <span class="mr-2">Menbresia</span>
            </router-link>

          </v-btn>

        </div>

        <div v-if="currentUser">

          <v-divider
              class="mx-5"
              vertical
          ></v-divider>

          <v-btn
              depressed
              rounded
              target="_blank"
              text
          >
            <router-link to="/">
              <span class="mr-2">Perfil</span>
            </router-link>

          </v-btn>

        </div>

        <v-divider
            class="mx-5"
            vertical
        ></v-divider>


        <div v-if="currentUser">
          <v-btn
              depressed
              rounded
              target="_blank"
              text @click.prevent="logout"
          >Cerrar Sesion
          </v-btn>
        </div>
        <div v-else>
          <v-btn
              depressed
              rounded
              target="_blank"
          >
            <router-link to="/login">
              <span class="mr-2">Iniciar Sesion</span>
            </router-link>

          </v-btn>
        </div>

        <v-spacer></v-spacer>


      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  components: {
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  data: () => ({
    //
  }),
};
</script>
