<template>
    <v-main class="grey lighten-2">
        <v-container class="grey lighten-3">
            <v-img height="200px" src="https://www.delperu.org/wp-content/uploads/2020/01/papa-rellena-de-carne_800x533.jpg"></v-img>
            <v-row>
                <v-col cols>
                    <v-row class="mb-10">
                        <v-col>
                            <h1>{{recipes[0].nameRecipe}}</h1>
                        </v-col>
                        <v-col cols="2">
                            <v-btn color="green accent-2" @click="assignRecipe(1, 4)">
                                <router-link to="/homechef/menu">
                                    <span>Agregar a mi Menu</span>
                                </router-link>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row></v-row>
                    <v-row>
                        <v-col cols="2" class="ml-8">
                            <h2>Ingredientes:</h2>
                                <v-simple-table dense class="blue-grey lighten-4">
                                    <template v-slot:default>
                                        <thead>
                                        <tr>
                                            <th class="text-left">
                                                Nombre
                                            </th>
                                            <th class="text-left">
                                                Cantidad
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr
                                                v-for="item in ingredients"
                                                :key="item.name"
                                        >
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.quantity }}</td>
                                        </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                        </v-col>
                        <v-col cols="1"></v-col>
                        <v-col>
                            <h2 class="text-lg-center">Como prepararlo:</h2>
                            <v-row>
                                <v-col>
                                    <v-timeline
                                            align-top
                                            :dense="$vuetify.breakpoint.smAndDown"
                                    >
                                        <v-timeline-item
                                                v-for="(step, i) in recipeSteps"
                                                :key="i"
                                                :color="color1"
                                                :icon="icon"
                                                :icon-color="iconColor"

                                                fill-dot
                                        >
                                            <v-card
                                                    :color="color2"
                                                    dark
                                            >
                                                <v-card-title class="black--text">
                                                    Paso #{{i+1}}
                                                </v-card-title>
                                                <v-card-text class="white text--primary">
                                                    <p>{{step.instructions}}</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-col>
                                <v-col cols="2"></v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                </v-col>
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
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "recipe",
        data: () => ({
            drawer: false,
            recipeSteps:[],
            errors: [],
            recipes: [],
            ingredients: [],
            users: [],
            loading: false,
            selection: 1,
            color1: 'green accent-2',
            color2: 'light-green accent-2',
            icon: 'mdi-book-variant',
            iconColor: 'deep-purple accent-1',
        }),

        methods: {
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
            assignRecipe(menuId, recipeId) {
                axios.post('https://homemade20201124161107.azurewebsites.net/api/menurecipe/'+menuId+'/'+recipeId, {}).catch(e=> {
                    this.errors.push(e);
                });
            }
        },

        created() {
            axios.get('https://homemade20201124161107.azurewebsites.net/api/recipesteps/recipeid?recipeId=1')
                .then(response =>{
                    this.recipeSteps = response.data;
                    console.log('data: ');
                    console.log(response.data);
                })
                .catch(e=>{
                    this.errors.push(e);
                })
            axios.get('https://homemade20201124161107.azurewebsites.net/api/recipe')
            .then(response =>{
                this.recipes = response.data;
                console.log('data: ');
                console.log(response.data);
            })
            .catch(e=>{
                this.errors.push(e);
            })
            axios.get('https://homemade20201124161107.azurewebsites.net/api/ingredient')
                .then(response =>{
                    this.ingredients = response.data;
                    console.log('data: ');
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
