<template>
    <v-container>
        <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="6">
                <h2 class="mb-4">Agregar una receta:</h2>
                <v-card class="mb-9">
                    <v-card-title>Nombre de la Receta</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValidName">
                            <h4>Escriba un nombre para su receta</h4>
                            <v-text-field
                                    v-model="recipeName"
                                    :rules="textRules"
                                    required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-on:click="greet" :disabled="!isValidName" color="primary" @click="postRecipe(recipeName)">Guardar</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mb-9">
                    <v-card-title>Ingredientes de la receta</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValidIngredient">
                            <h4 class="mb-10">Indique los ingredientes de la receta uno por uno</h4>
                            <p>Nombre</p>
                            <v-text-field
                                v-model="ingredient"
                                :rules="textRules"
                                required>
                            </v-text-field>
                            <p>Cantidad</p>
                            <v-text-field
                                v-model="ingredientQuantity"
                                :rules="textRules"
                                required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-on:click="greet" :disabled="!isValidIngredient" color="primary" @click="postIngredient(ingredient, ingredientQuantity)">Agregar</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mb-9">
                    <v-card-title>Agregar Pasos</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValidStep">
                            <h4>Escriba los pasos de la receta</h4>
                            <v-text-field
                                    v-model="recipeStep"
                                    :rules="textRules"
                                    required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-on:click="greet" :disabled="!isValidStep" color="primary" @click="postStep(recipeStep)">Agregar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-col>
            <v-btn class="green accent-2">
                <router-link to="/">
                    <span>Regresar a mi perfil</span>
                </router-link>
            </v-btn>
        </v-col>
    </v-container>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "create-recipe",
        data: () => ({
            loading: false,
            selection: 1,
            recipeSteps:[],
            ingredients:[],
            isValidName: true,
            isValidIngredient: true,
            isValidStep: true,
            textRules: [
                v => !!v || 'This filed cannot be empty',
            ],
        }),
        created() {

        },
        methods: {

            greet: function () {

                alert('Se Ha Guardado correctamente  !')

            },

            postRecipe(recipeName){
                const newRecipe = {
                    "nameRecipe": recipeName,
                    "instructions": "string",
                };
                axios.post('https://homemade20201124161107.azurewebsites.net/api/recipe/userchefid?userchefId=100', newRecipe).catch(e=> {
                    this.errors.push(e);
                });
            },

            postIngredient(ingredient, ingredientQuantity){
                const newIngredient = {
                    "name": ingredient,
                    "quantity": ingredientQuantity
                };
                axios.post('https://homemade20201124161107.azurewebsites.net/api/ingredient/3', newIngredient).catch(e=> {
                    this.errors.push(e);
                });
            },

            postStep(recipeStep){
                const newStep = {
                    "instructions": recipeStep,
                };
                axios.post('https://homemade20201124161107.azurewebsites.net/api/recipesteps/recipeid?recipeId=3', newStep).catch(e=> {
                    this.errors.push(e);
                });
            },
        }
    }
</script>

<style scoped>

</style>
