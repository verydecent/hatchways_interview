import React from "react";
import StudentCard from "./StudentCard";
import findGradeAverage from "../helpers/findGradeAverage";

const StudentList = ({ students, searchText }) => {
  const filteredStudents =
    students &&
    students.filter((student) => {
      const fullName = student.firstName + " " + student.lastName;
      return fullName.toLowerCase().indexOf(searchText) !== -1;
    });

  const list =
    filteredStudents &&
    filteredStudents.map((student) => {
      const {
        id,
        pic,
        firstName,
        lastName,
        email,
        company,
        skill,
        grades,
      } = student;
      return (
        <StudentCard
          id={id}
          pic={pic}
          firstName={firstName}
          lastName={lastName}
          email={email}
          company={company}
          skill={skill}
          averageGrade={findGradeAverage(grades)}
        />
      );
    });

  return <div className="student-list">{list}</div>;
};

export default StudentList;
