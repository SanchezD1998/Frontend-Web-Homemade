<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-sheet rounded="lg">
                    <v-card :loading="loading" class="mx-auto my-auto" max-width="374">
                        <template slot="progress">
                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                        </template>
                        <v-img height="250"
                               src="https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/107697646_1063570910706020_6049356131090790239_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeElQJo0XMR59x1fWdDj4MHVhBRN2sNJSP2EFE3aw0lI_QgZw6_XxVcq_ynfVGuQcPxodxUpVNBNu-4VqBBAXEEW&_nc_ohc=i-oqCeMNN1oAX--4BkU&_nc_ht=scontent.flim18-1.fna&oh=d57aed443b5f97a858f228b8fbf3de64&oe=5FCEF49A"
                        ></v-img>
                        <div v-for="user in users" :key="user.name">
                            <v-card-title>{{user.name + ' ' + user.lastname}}</v-card-title>
                        </div>
                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                                <div class="grey--text ml-4">
                                    4.5 (413)
                                </div>
                            </v-row>
                            <div v-for="user in users" :key="user.name" class="my-4 subtitle-1">
                                {{ 'Date: ' + user.date}}
                            </div>
                            <div v-for="user in users" :key="user.name" >
                                {{ 'Email de contacto: ' + user.email}}
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
                                <router-link to="/">
                                    <span class="mr-2">Revisa su perfil</span>
                                </router-link>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="6">
                <v-container v-for="(Menu, i) in menu"
                                :key="i">
                    <v-row>
                        <v-col cols="5" v-for="(recipe, i) in menuRecipes"
                               :key="i">
                            <v-card>
                                <v-img v-bind:src="recipe.img"></v-img>
                                <v-card-title>{{recipe.nameRecipe}}</v-card-title>
                                <v-card-subtitle>{{recipe.instructions}}</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                            icon
                                            @click="show = !show"
                                    >
                                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-btn
                                                        color="orange darken-2"
                                                        text
                                            >
                                                <router-link to="/homechef/recipe">
                                                    <span>
                                                        Ver Receta
                                                    </span>
                                                </router-link>
                                            </v-btn>
                                            <v-btn
                                                        color="red lighten-2"
                                                        text
                                                        @click="unassignRecipe(Menu.id, recipe.id)"
                                                >
                                                Eliminar de mi menu
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "menu",
        computed: {
            currentUser() {
                console.log(this.$store.state.auth.user);
                return this.$store.state.auth.user;
            },
        },
        data: () => ({
            menu:[],
            menuRecipes:[],
            show:false,
        }),
        methods: {
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
            unassignRecipe(menuId, recipeId) {
                axios.delete('https://homemade20201124161107.azurewebsites.net/api/menurecipe/'+menuId+'/'+recipeId, {}).catch(e=> {
                    this.errors.push(e);
                });
            }
        },
        created() {
            axios.get('https://homemade20201124161107.azurewebsites.net/api/menu/101')
                .then(response =>{
                    this.menu = response.data;
                    console.log('data: ');
                    console.log(response.data);
                })
                .catch(e=>{
                    this.errors.push(e);
                })
            axios.get('https://homemade20201124161107.azurewebsites.net/api/menurecipe/1')
                .then(response =>{
                    this.menuRecipes = response.data;
                    console.log('data: ');
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
