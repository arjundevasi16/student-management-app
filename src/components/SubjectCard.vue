<template>
  <div>
    <div id="card">
      <h4>{{ subjectDetails.name.toUpperCase() }}</h4>
      <p>SUBJECT ID:{{ subjectDetails.id }}</p>
      <p>{{ subjectDetails.description }}</p>
      <p>STUDENT ENROLL:{{ subjectDetails.student.length }}</p>
      <button @click="openStudentListModal = true">view student</button>
    </div>

    <StudentList
      v-if="openStudentListModal"
      :students="studentInSubject"
      @closeModal="onCloseModal"
      @deleteStudent="deleteStudent"
      @updateStudentName="updateStudentName"
    />
  </div>
</template>

<script lang="ts">
import StudentList from './StudentList.vue'
import type { Student, Subject } from '../mock'
interface SubjectCardState {
  openStudentListModal: Boolean
}
export default {
  components: {
    StudentList,
  },
  data(): SubjectCardState {
    return {
      openStudentListModal: false,
    }
  },
  props: {
    subjectDetails: {
      type: Object as () => Subject,
      required: true,
    },
    studentDetails: {
      type: Array as () => Student[],
      required: true,
    },
  },
  computed: {
    studentInSubject() {
      // using filter method find student
      // const filteredList = this.studentDetails.filter((student) => {
      //   this.subjectDetails.student.includes(student.rollNo)
      // })

      return this.studentDetails?.reduce((acc, crr) => {
        if (this.subjectDetails.student?.includes(crr.rollNo)) {
          acc.push(crr)
        }
        return acc
      }, [] as Student[])
    },
  },
  methods: {
    deleteStudent(rollNo: number) {
      this.$emit('deleteStudent', rollNo, this.subjectDetails)
    },
    updateStudentName(editedName: string, rollNo: number) {
      this.$emit('updateStudentName', editedName, rollNo)
    },
    onCloseModal() {
      this.openStudentListModal = false
    },
  },
}
</script>
<style scoped>
#card {
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  color: #1a202c;
  text-align: center;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease;
}
#card:hover {
  transform: translateY(-4px);
}
#card h4 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
#card p {
  margin: 0.25rem 0;
}
#card button {
  background-color: #1a202c;
  color: #fff;
  border: none;
  padding: 10px 16px;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
}
#card button:hover {
  background-color: #2d3748;
}
</style>
