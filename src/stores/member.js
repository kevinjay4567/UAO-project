import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMemberStore = defineStore('member', () => {

  const members = ref([
    { 'name': 'Kevin Jay Herrera', 'img': 'src/assets/imgs/Kevin_imagen.jpeg' },
    { 'name': 'Arturo Rangel', 'img': 'src/assets/imgs/Arturo_imagen.jpeg' },
    { 'name': 'Adriana Ocampo', 'img': 'src/assets/imgs/Adriana_imagen.png' },
    { 'name': 'Maria Posada', 'img':'src/assets/imgs/Maria_imagen.jpeg' },
    { 'name': 'Jhonatan Sanchez', 'img': 'src/assets/imgs/Jhonatan_imagen.png' },
    { 'name': 'David Ruiz', 'img': 'src/assets/imgs/David_imagen.jpg' }
  ])

  const member = ref(members.value[0])

  function getMembers() {
    return members
  }

  function getMemberByIndex(index) {
    member.value = members.value[index]
    return
  }

  return { members, member, getMembers, getMemberByIndex }
})