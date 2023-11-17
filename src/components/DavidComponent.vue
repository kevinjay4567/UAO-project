<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'description'])
</script>
<template>
  <div class="lg:flex gap-20 lg:pr-28 lg:pl-5">
    <p class="text-xl">Mi nombre es <strong class="text-2xl bg-yellow-300">David Ruiz</strong>, tengo 24 años y soy estudiante de Ingeniería Civil. <br>

      Soy una persona sociable, inteligente y con una alta capacidad de liderazgo. Además poseo una gran capacidad de
      adaptación.<br>

      Entre mis hobbies puedo destacar:<br>

    <ul class="list-disc pl-5">
      <li>El deporte, he practicado judo desde hace 10 años y desde hace 2 años practico tambien tenis de campo.</li>
      <li>La jardinería, me encanta ensuciarme las manos y ver como crecen mis plantas</li>
      <li>El senderismo, disfruto de recorrer caminos distintos y mágicos, descubriendo lugares nuevos y muy hermosos.
      </li>
    </ul>
    </p>

    <img src="../assets/imgs/David_talento.png" alt="" class="lg:w-1/5 max-lg:pt-5" />
  </div>
</template>