<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'description'])
</script>
<template>
  <div class="md:flex gap-20 lgpl-5">
    <div class="md:w-1/2">
      <p class="text-xl">Mi nombre es <strong class="text-2xl bg-pink-300">Adriana Valentina Ocampo Garcia</strong> pero suelo utilizar solo “Valentina” Soy estudiante de Ingeniería Química, uno de mis hobbies es hornear, me gusta compartir lo que hago con las personas que quiero ya sea por su cumpleaños, día especial, etc. <br>
      También me gusta hacer senderismos y recorrer la naturaleza, es una forma de desconectarme y una forma de admirar y no perder la capacidad de sorpresa ante aquello que me rodea. Suelo ser una persona pasiva e introvertida, hablo en situaciones que lo requieran pero no es de mis cosas favoritas. <br> 
      En el transcurso del semestre fortalecí mis capacidades para aprender y entender al otro, guiar mi vida hacia un propósito y no simplemente vivir sin saber que quiero o porque lo hago. </p>
  
      <video src="../assets/videos/Adriana_video.mp4" loop autoplay class="mt-5"></video>
    </div>

    <img src="../assets/imgs/Adriana_talento.png" class="md:w-1/3 max-md:mt-5"/>
  </div>
</template>