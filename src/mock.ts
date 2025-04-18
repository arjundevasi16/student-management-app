export interface Student {
  name: string
  rollNo: number
  imgSrc: string
}
export interface Subject {
  name: string
  id: number
  description: string
  student: number[]
}
export const studentList: Student[] = [
  {
    name: 'Aarav Mehta',
    rollNo: 101,
    imgSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Anaya Sharma',
    rollNo: 102,
    imgSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Kabir Singh',
    rollNo: 103,
    imgSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Diya Patel',
    rollNo: 104,
    imgSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Vivaan Gupta',
    rollNo: 105,
    imgSrc: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Myra Kapoor',
    rollNo: 106,
    imgSrc: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    name: 'Arjun Reddy',
    rollNo: 107,
    imgSrc: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
]

export const subjectList: Subject[] = [
  {
    name: 'Mathematics',
    id: 101,
    description: 'the study of numbers, shapes, and their relationships',
    student: [101, 103, 107],
  },
  {
    name: 'Physics',
    id: 102,
    description: 'the study of matter, energy, and their interactions in the universe',
    student: [103, 105, 106, 107],
  },
  {
    name: 'Chemistry',
    id: 103,
    description: "The study of matter's composition, structure, and change.",
    student: [102, 103, 104, 107],
  },
  {
    name: 'Biology',
    id: 104,
    description: 'The study of all living organisms and their life. ',
    student: [101, 103, 105, 106],
  },
  {
    name: 'English',
    id: 105,
    description: 'Study of language, literature, and communication.',
    student: [101, 104, 107],
  },
  {
    name: 'Hindi',
    id: 106,
    description: 'Exploration of Hindi language, literature, culture.',
    student: [101, 103, 104, 105, 106, 107],
  },
]
