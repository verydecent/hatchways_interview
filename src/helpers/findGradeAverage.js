export default function findGradeAverage(grades) {
  const numberOfGrades = grades.length;
  let gradeTotal = 0;

  for (let s = 0; s < grades.length; s++) {
    const grade = parseInt(grades[s], 10);
    gradeTotal += grade;
  }
  // Using forEach
  // grades.forEach((grade) => (gradeTotal = gradeTotal + parseInt(grade, 10)));

  const average = (gradeTotal / numberOfGrades).toFixed(2);

  return average;
}
