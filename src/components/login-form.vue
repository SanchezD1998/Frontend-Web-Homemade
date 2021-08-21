<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-title class="text-center display-2 orange--text text--accent-3 mx-6">Iniciar Sesion</v-card-title>
                    <v-card-text class="mt-12">
                      <v-form @submit="handleLogin" v-model="isValid">
                        <v-text-field
                            label="Correo electronico"
                            v-model="user.email"
                            :rules="[v => !!v || 'Se requiere correo electronico']"
                            required
                            prepend-icon="mdi-email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Contraseña"
                            prepend-icon="mdi-lock"
                            v-model="user.password"
                            type="password"
                            autocomplete="off"
                            :rules="[v => !!v || 'Se requiere contraseña']"
                            required
                        >
                        </v-text-field>
                        <div v-if="message">
                          {{message}}
                        </div>
                        <v-card-actions>
                          <v-btn class="mx-9" rounded color="orange accent-3" :disabled="loading" type="submit" >
                            <v-progress-circular indeterminate color="orange accent-3"
                                                 v-if="loading"></v-progress-circular>
                            Iniciar Sesion</v-btn>
                        </v-card-actions>
                      </v-form>
                    </v-card-text>

                  </v-col>
                  <v-col cols="11" md="4" class="orange accent-3">
                    <v-card-text class="black--text mt-12">
                      <h1 class="text-center display-1">Bienvenido a Homemade</h1>
                      <h5 class="text-center">Ingrese sus datos personales y comience a viajar con nosotros</h5>
                      <v-card-actions>
                        <v-btn class="mx-13" rounded outlined="" dark>
                          <router-link to="/register">
                            Registrarse
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
  </v-main>
</template>

<script>
import User from "@/models/user";

export default {
  name: "login",
  data() {
    return {
      user: new User('', '', '', '', '', ''),
      loading: false,
      message: '',
      isValid: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleLogin: function () {
      this.loading = true;
      console.log('Starting Login handling');
      if (!this.isValid) {
        console.log('Invalid');
        this.loading = false;
        return;
      }
      if (this.user.email && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
            (user) => {
              console.log('Logged In');
              console.log(user);
              this.$router.push('/');
            },
            error => {
              console.log('Error');
              this.loading = false;
              this.message = (error.response && error.response.data)
                  || error.message || error.toString();
            }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
