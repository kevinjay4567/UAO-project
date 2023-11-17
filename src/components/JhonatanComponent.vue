<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'description'])
</script>
<template>
  <div class="flex flex-col gap-5">
    <p class="text-xl">Mi nombre es <strong class="text-2xl bg-orange-300">Jhonatan Sanchez</strong></p>
    <img src="../assets/imgs/Jhonatan_talento.jpg" alt="" class="lg:w-1/4">
  </div>
</template>