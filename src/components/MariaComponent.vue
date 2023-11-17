<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'description'])
</script>
<template>
  <div class="lg:flex gap-20 lg:pr-28 lg:pl-5 ">
    <p class="text-xl">¡Holaaaa! Mi nombre es <strong class="text-2xl bg-cyan-300">María Alejandra Posada Herrera</strong>, tengo 21 años y soy estudiante de Ingeniería Industrial, trabajo en el Instituto de Educación en Ingeniería de la Facultad de Minas de la Universidad Nacional de Colombia como estudiante auxiliar. <br> Me considero una persona muy extrovertida, dispuesta a hacer nuevas amistades y a ayudar tanto como pueda a la gente que me rodea, tengo muy buena capacidad de solucionar problemas y para esto utilizo como herramienta mi habilidad de pensamiento estratégico.<br>
    Unos de mis pasatiempos favoritos es bailar al ritmo de géneros tropicales como salsa, merengue, porro, entre otros.<br>
    Me gusta cocinar para las personas que quiero y hacerlas sentir especiales a través del deleite de mis especialidades y por último me encantan los juegos de mesa y sobre todo los que me ayuden a desarrollar aún más mi pensamiento estratégico</p>

    <img src="../assets/imgs/Maria_talento.png" alt="" class="lg:w-1/3 max-lg:mt-5"/>
  </div>
</template>