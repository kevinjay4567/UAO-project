<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'description'])
</script>
<template>
  <div class="lg:flex gap-5">
    <p class="text-xl">
  ¡Hola a todos! 👋 Mi nombre es <strong class="text-2xl bg-green-400">Kevin Jay Herrera</strong>, tengo 23 años y soy estudiante de Ingeniería de Sistemas e informatica.<br><br>
  Tengo una pasion especial por el desarrollo web y en mi tiempo libre me gusta dedicarlo al ejercicio físico y el gimnasio. <br><br>
  Creo firmemente en la importancia de mantener un equilibrio entre mente y cuerpo, y el gimnasio se ha convertido en mi santuario para liberar el estrés y mantenerme en forma.</p>

    <img src="../assets/imgs/Kevin_talento.png" alt="" class="lg:w-1/2 max-lg:pt-5">
  </div>
</template>