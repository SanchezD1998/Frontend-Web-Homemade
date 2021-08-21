<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <br><br>
    <v-timeline-item color="purple lighten-2" fill-dot right>
      <template v-slot:opposite>
        <span><img src="https://cevicheweb.com/wp-content/uploads/2019/04/6.1-ceviche-de-pollo-2.jpg" height="200" width="300"></span>
      </template>
      <v-card>
        <v-card-title class="purple lighten-2">
          <!--v-icon dark size="42" class="mr-4">
            mdi-magnify
          </v-icon-->
          <h1 class="display-1 white--text font-weight-bold">
            Ceviche con pollo:
          </h1>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              El Ceviche de pollo es un plato originario de la región costera del norte de Perú, donde se macera esta carne con jugo de limón, ajíes y otras especias. Sin embargo, también se hace variando la receta en países como Ecuador o Chile o en diferentes zonas del perú.
            </v-col>
            <v-col class="hidden-sm-and-down text-right" md="2">
              <!--v-icon size="64">
                mdi-calendar-text
              </v-icon-->
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <br><br>

    <v-timeline-item color="amber lighten-1" fill-dot left small>
      <template v-slot:opposite>
        <span><img src="https://t1.rg.ltmcdn.com/es/images/3/1/2/img_ceviche_de_pollo_58213_paso_0_600.jpg" height="350" width="500"></span>
      </template>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h1 class="display-1 mr-4 white--text font-weight-bold">
            Ingredientes:
          </h1>
          <!--v-icon dark size="42">
            mdi-home-outline
          </v-icon-->
        </v-card-title>
        <v-container>
          <ul id="ingred">
            <li  style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Una pechuga grande de pollo (también puedes usar gallina).</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Dos cebollas.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Cinco o seis limones.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Dos ajos.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Cinco cucharadas de ají amarillo molido, también llamado ají escabeche.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Una cucharada de ají panca molido, aunque en Perú es habitual encontrarlo como ají colorado, especial o seco.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Medio ají amarillo.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Media taza de caldo de pollo, aunque si no tienes puedes usar agua en su lugar.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Una rama de cilantro o culantro.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Una cucharada de aceite vegetal.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Sal y pimienta.</span>
            </li>
            <li style="font-weight: 400;">
              <input type="checkbox">
              <span style="font-weight: 400;"> Opcional: una hoja de lechuga y arroz blanco.</span>
            </li>
          </ul>
        </v-container>
      </v-card>
    </v-timeline-item>

    <br><br>

    <v-timeline-item color="cyan lighten-1" fill-dot right>
      <template v-slot:opposite>
        <span><img src="https://t1.rg.ltmcdn.com/es/images/3/1/2/img_ceviche_de_pollo_58213_paso_2_600.jpg" height="350" width="500"><img
            src="https://t2.rg.ltmcdn.com/es/images/3/1/2/img_ceviche_de_pollo_58213_paso_3_600.jpg" height="350" width="500"></span>
      </template>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <!--v-icon class="mr-4" dark size="42">
            mdi-email-outline
          </v-icon-->
          <h1 class="display-1 white--text font-weight-bold">
            Procedimiento
          </h1>
        </v-card-title>
        <v-container>
          <ol>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Comenzamos nuestra preparación troceando la pechuga de pollo en cubitos de dos a tres centímetros de grosor. Pelamos la cebolla y la cortamos en juliana no muy fina. Le quitamos las semillas, los septos y el corazón al ají amarillo, lo partimos por la mitad y fileteamos una de las partes. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Pelamos los ajos, los picamos muy finos y los echamos en una sartén con un poco de aceite vegetal. Añadimos también el ají amarillo molido y el ají panca molido y sofreímos durante un par de minutos. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">A continuación, agregamos la cebolla y seguimos cocinando a fuego medio hasta que cambie de color. En este momento, echamos las piezas de pollo, salpimentamos y salteamos cinco minutos. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Cuando la carne esté doradita, vertemos el caldo e incorporamos el medio ají amarillo, removemos y cocemos otros cinco minutos más. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Finalmente, añadimos el jugo de limón, subimos la potencia del fuego y esperamos a que el líquido se reduzca un poco, removiendo de vez en cuando para que no se pegue. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Ya hemos acabado nuestro Ceviche de pollo ligero. ¿Has visto qué fácil? Como sugerencia de presentación podemos usar una hoja de lechuga en la base a la hora de emplatar, espolvorear cilantro fresco picado por encima y acompañar este rico plato con un poco de arroz blanco hervido. ¡Que lo disfrutes!</span>
            </li>
          </ol>
        </v-container>
      </v-card>
    </v-timeline-item>

    <br><br>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <template v-slot:opposite>
        <span><img src="https://ep01.epimg.net/elcomidista/imagenes/2019/02/27/articulo/1551270449_348999_1551277300_sumario_normal.jpg" height="350" width="500"><img src="https://t1.rg.ltmcdn.com/es/images/3/1/2/img_ceviche_de_pollo_58213_paso_6_600.jpg" height="350" width="500"></span>
      </template>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h1 class="display-1 mr-4 white--text font-weight-bold">
            Consejos del chef:
          </h1>
          <!--v-icon dark size="42">
            mdi-home-outline
          </v-icon-->
        </v-card-title>
        <v-container>
          <ul>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Las cantidades mostradas dan para unas cuatro raciones y entre la preparación y el marinaje esta receta apenas nos tomará media hora de nuestro tiempo. El resultado final superará tus expectativas, ya que su sabor y textura es un auténtico placer para el paladar. ¡Y sin apenas calorías! Por lo que se trata de un alimento muy adecuado para todo tipo de dietas balanceadas y de adelgazamiento. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Además, la carne de pollo posee grandes ventajas nutricionales, con un 20% más de proteínas que la carne de vaca y menos grasas. Apenas tiene hidratos de carbonos, es muy suave y se digiere de maravilla. Es una fuente natural de minerales como el calcio, fósforo, hierro, zinc, magnesio, sodio y potasio, vitaminas A, B y C, ácido fólico y otras sustancias muy beneficiosas para el organismo. </span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Como todos los ceviches, puedes variar los ingredientes dependiendo de tus gustos y la disponibilidad que tengas en la cocina. Por ejemplo, prueba a añadir un poco de vinagre, chicha de jora o jugo de naranja para variar el nivel de acidez, usa perejil en lugar de cilantro o acompaña el plato con papas, yucas o rodajas de camote. De hecho, hay quien</span>
            </li>
            <li style="font-weight: 400;">
              <span style="font-weight: 400;">Si no puedes encontrar los ajíes molidos que hemos mencionado en la receta, puedes preparar una pasta casera siguiendo estos pasos: Corta dos ajíes amarillos por la mitad y quítales los septos, las semillas y los corazones. Cocínalos en agua caliente cambiando de líquido tres veces, de esta forma reduciremos considerablemente el picor y acidez de los ajíes y el sabor será mucho más delicado.</span>
            </li>
          </ul>
        </v-container>
      </v-card>
    </v-timeline-item>
    <br><br>
    <br><br>
  </v-timeline>
</template>

<script>
export default {
  name: "receta",
  data: () => ({

  }),
}
</script>

<style scoped>
#ingred li {
  list-style: none;
}
</style>