import { Seq } from 'immutable';

export default function printBestStudents(studentData) {
  const studentsSeq = Seq(studentData);

  const filteredStudents = studentsSeq.filter((student) => {
    return student.score > 70;
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filteredStudentsJS = filteredStudents.toJS();

  Object.keys(filteredStudentsJS).map((studentId) => {
    filteredStudentsJS[studentId].firstName = capitalizeFirstLetter(filteredStudentsJS[studentId].firstName);
    filteredStudentsJS[studentId].lastName = capitalizeFirstLetter(filteredStudentsJS[studentId].lastName);
    return filteredStudentsJS[studentId];
  });

  console.log(filteredStudentsJS);
}
