<template>
  <div id="card">
    <img :src="studentInfo.imgSrc" alt="student image" class="student-image" />
    <div class="student-info">
      <p v-if="!isEditing">Name: {{ studentName }}</p>
      <input v-else type="text" v-model="studentName" @blur="editStudentName" class="edit-input" />
      <p>Roll Number: {{ studentInfo.rollNo }}</p>
      <div class="button-group">
        <button class="editBtn" @click="isEditing = true">EDIT</button>
        <button class="deleteBtn" @click="$emit('deleteStudent', studentInfo.rollNo)">
          DELETE
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isEditing: false,
      studentName: this.studentInfo.name,
    }
  },
  props: ['studentInfo'],
  methods: {
    editStudentName() {
      this.isEditing = false
      this.$emit('updateStudentName', this.studentName, this.studentInfo.rollNo)
    },
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#card {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 2px solid #e2e8f0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.student-image {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 15px;
}

.student-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p {
  font-size: 1rem;
  color: #333;
}

.edit-input {
  font-size: 1rem;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.button-group {
  margin-top: 10px;
}

.editBtn,
.deleteBtn {
  background-color: #ff7f50;
  padding: 6px 12px;
  font-size: 0.875rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.editBtn:hover {
  background-color: #ff6347;
}

.deleteBtn {
  background-color: #e53e3e;
  margin-left: 10px;
}

.deleteBtn:hover {
  background-color: #c53030;
}
</style>
