<script setup>
import JhonatanComponent from './components/JhonatanComponent.vue';
import KevinComponent from './components/KevinComponent.vue';
import MariaComponent from './components/MariaComponent.vue';
import DavidComponent from './components/DavidComponent.vue';
import ArturoComponent from './components/ArturoComponent.vue';
import AdrianaComponent from './components/AdrianaComponent.vue';
import { useMemberStore } from './stores/member'

const memberStore = useMemberStore()
const members = memberStore.getMembers()

function getMember(index) {
  memberStore.getMemberByIndex(index);
}
</script>

<template>
  <main class="flex flex-col h-full max-lg:px-10 max-md:px-5 max-[1920px]:px-20 pt-5 bg-[#EEEEEE]">
    <section class="h-full shadow-lg p-5">
      <h1 class="text-4xl pb-5">Nuestra travesía UAO</h1>
      <div class="flex gap-5 max-xl:flex-col">
        <p class="text-2xl xl:w-1/2">
          Dentro de la Universidad, se evidencian diferentes áreas temáticas de
          la materia, y durante nuestra observación, seleccionamos tres en
          particular: trabajo en equipo, talentos y resiliencia.
        </p>
        <ul class="flex gap-2">
          <li>
            <img src="./assets/imgs/Equipo.png" alt="Equipo image" class="h-48 max-md:h-32" />
          </li>
          <li><img src="./assets/imgs/Resiliencia_2.png" alt="Resiliencia image" class="h-48 max-md:h-32" /></li>
          <li><img src="./assets/imgs/Talentos_diversos.png" alt="Talentos image" class="h-48 max-md:h-32" /></li>
        </ul>
      </div>
      <div class="overflow-x-auto">
        <div class="flex gap-14 lg:justify-center my-10 h-48 lg:pl-24 w-fit overflow-x-auto whitespace-nowrap">
          <div v-for="(member, index) in members" class="inline-block h-36 w-36 rounded-full overflow-hidden">
            <img v-if="index === 0" class="w-full hover:cursor-pointer" @click="getMember(index)" src="./assets/imgs/Kevin_imagen.jpeg" />
            <img v-if="index === 1" class="w-full hover:cursor-pointer" @click="getMember(index)" src="./assets/imgs/Arturo_imagen.jpeg" />
              <img v-if="index === 2" class="w-full hover:cursor-pointer" @click="getMember(index)" src="./assets/imgs/Adriana_imagen.png" />
              <img v-if="index === 3" class="w-full hover:cursor-pointer" @click="getMember(index)" src="./assets/imgs/Maria_imagen.jpeg" />
              <img v-if="index === 4" class="w-full hover:cursor-pointer" @click="getMember(index)" src="./assets/imgs/Jhonatan_imagen.png" />
              <img v-if="index === 5" class="w-full hover:cursor-pointer" @click="getMember(index)" src="./assets/imgs/David_imagen.jpg" />

          </div>
        </div>
      </div>

      <section>
        <KevinComponent v-if="memberStore.member.name === 'Kevin Jay Herrera'" :name="memberStore.member.name"
          :description="memberStore.member.description" />

        <JhonatanComponent v-if="memberStore.member.name === 'Jhonatan Sanchez'" :name="memberStore.member.name"
          :description="memberStore.member.description" />

        <MariaComponent v-if="memberStore.member.name === 'Maria Posada'" :name="memberStore.member.name"
          :description="memberStore.member.description" />

        <DavidComponent v-if="memberStore.member.name === 'David Ruiz'" :name="memberStore.member.name"
          :description="memberStore.member.description" />

        <ArturoComponent v-if="memberStore.member.name === 'Arturo Rangel'" :name="memberStore.member.name"
          :description="memberStore.member.description" />

        <AdrianaComponent v-if="memberStore.member.name === 'Adriana Ocampo'" :name="memberStore.member.name"
          :description="memberStore.member.description" />
      </section>
      <section class="mt-10">
        <h1 class="text-4xl">Trabajo en equipo</h1>
        <div class="lg:flex my-10 gap-5">
          <video src="./assets//videos/Video-Grupal1.mp4" controls class="lg:w-1/2 max-md:w-full"></video>
  
          <p class="lg:text-2xl max-lg:mt-5">¡El trabajo en equipo es como un rompecabezas donde cada pieza es única y esencial. Cada miembro aporta sus
            propios conocimientos y talentos, creando una sinergia que va más allá de lo individual. Al evidenciar y valorar
            las habilidades de cada persona, no sólo fortalecemos el equipo, sino que también enriquecemos nuestras vidas
            con nuevas perspectivas y aprendizajes. Juntos, creamos un tejido único que nos impulsa hacia el éxito y el
            crecimiento constante. ¡El equipo es la clave para desbloquear nuestro potencial pleno!</p>
        </div>

        <div class="flex justify-around max-lg:flex-col max-lg:gap-10">
          <img src="./assets/imgs/Foto_grupal.jpeg" alt="" class="lg:w-2/5"/>
          <img src="./assets/imgs/Foto_grupal2.jpeg" alt="" class="lg:w-2/5"/>
        </div>
        <div class="flex flex-col gap-5 justify-center items-center mt-5">
          <p class="lg:text-2xl">En nuestro equipo, la diversidad se convierte en nuestra fuerza, y cada desafío es una oportunidad para brillar juntos. <br> En la colaboración encontramos la magia que transforma esfuerzos individuales en logros extraordinarios. <br> Recordemos siempre: el verdadero triunfo es un regalo compartido entre corazones unidos por un propósito común.</p>
  
          <video src="./assets/videos/Bailar_salsa.mp4" controls class="lg:w-2/3"></video>
        </div>
      </section>
      <section class="mt-10">
        <h1 class="text-4xl">Resiliencia UNAL</h1>
        <div class="mt-5">
          <p class="lg:text-xl">En particular, a lo largo de la universidad, nos encontramos con numerosos murales que
            representan artísticamente los talentos de diversos estudiantes. Muchos de estos murales son el resultado de
            la colaboración de varios estudiantes, no solo en la ejecución pictórica, sino también en la adquisición de
            materiales y otros aspectos. De esta manera, también son ejemplos tangibles de trabajo en equipo. Además de
            ser expresiones artísticas, muchos de estos murales contienen mensajes de resiliencia, abordando temas como la
            lucha feminista, la pérdida de estudiantes y líderes sociales y problemáticas sociales. Adicionalmente, como
            prueba del talento existente entre nuestros compañeros, observamos los diversos grupos de bienestar
            universitario, como los de baile, deportes y el coro, entre otros.</p>
        </div>

        <img src="./assets/imgs/Collage_murales.png" alt="" class="mt-10">
    </section>
  </section>
</main></template>

<style scoped></style>
