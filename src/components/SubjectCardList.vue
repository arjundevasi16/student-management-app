<template>
  <div id="subjectCardList">
    <subject-card
      v-for="subject in subjects"
      :subjectDetails="subject"
      :studentDetails="students"
      @deleteStudent="deleteStudent"
      @updateStudentName="updateStudentName"
    />
  </div>
</template>

<script lang="ts">
import SubjectCard from './SubjectCard.vue'
import { studentList, type Subject } from '../mock'
import { subjectList } from '../mock'
export default {
  components: {
    SubjectCard,
  },
  data() {
    return {
      subjects: subjectList,
      students: studentList,
    }
  },
  methods: {
    deleteStudent(rollNo: number, subjectDetails: Subject) {
      // const subjectDetails = this.subjects.find((subject) => subject.name === name)
      if (!subjectDetails) {
        return
      }
      let index = subjectDetails?.student.indexOf(rollNo)
      if (index !== -1) {
        subjectDetails?.student.splice(index, 1)
      }
    },
    updateStudentName(editedName: string, rollNo: number) {
      this.students = this.students.map((student) => {
        if (student.rollNo == rollNo) {
          return { ...student, name: editedName }
        }
        return student
      })
    },
  },
}
</script>

<style scoped>
#subjectCardList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  background-color: #f9fafb;
}
</style>
