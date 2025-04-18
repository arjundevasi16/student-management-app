<template>
  <Modal @closeModal="$emit('closeModal')">
    <div class="studentCardList">
      <StudentCard
        v-for="student in students"
        :studentInfo="student"
        @deleteStudent="$emit('deleteStudent', $event)"
        @updateStudentName="updateStudentName"
      ></StudentCard>
    </div>
  </Modal>
</template>
<script lang="ts">
import Modal from './controller/Modal.vue'
import StudentCard from './StudentCard.vue'
export default {
  props: ['students'],
  components: {
    StudentCard,
    Modal,
  },
  methods: {
    updateStudentName(name: string, rollNo: number) {
      this.$emit('updateStudentName', name, rollNo)
    },
  },
}
</script>
<style scoped>
.studentCardList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 30px;
}
</style>
