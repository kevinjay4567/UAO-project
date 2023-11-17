<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'description'])
</script>
<template>
  <div class="lg:flex gap-5 max-md:flex max-lg:flex-wrap">
    <p class="text-xl">Mi nombre es <strong class="text-2xl bg-red-400">Arturo De Jesus Rangel Julio</strong>, tengo 24 años y soy estudiante de Ingeniería Administrativa. <br>
    Me considero una persona sociable, destacando por su habilidad innata para establecer conexiones genuinas con los demás. Con una buena percepción del entorno y un profundo conocimiento del entorno, lo que me permite adaptarme con facilidad a diferentes situaciones. <br>
    Entre mis pasatiempos preferidos puedo destacar: <br>
    El deporte, ya que he practicado distintas disciplinas desde mi niñez como los son el fútbol, basquetbol, béisbol, atletismo, entre otros. <br>
    La música, ya sea cantando principalmente vallenato y el baile, en muchos ritmos como lo son la salsa, bachata, merengue vallenato, champeta, entre otros.<br>
    La cocina,ya que es un talento que descubrí durante la pandemia, y principalmente me gusta cocinar para eventos familiares.</p>

    <img src="../assets/imgs/Arturo_talento.png" alt="" class="lg:w-1/3"/>
    <img src="../assets/imgs/Arturo_talento2.png" class="lg:w-1/3"/>
  </div>
</template>