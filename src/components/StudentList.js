import React from "react";
import StudentCard from "./StudentCard";
import findGradeAverage from "../helpers/findGradeAverage";

const StudentList = ({
  students,
  nameSearchText,
  openStudentCards,
  toggleStudentCard,
  submitTag,
}) => {
  // const
  const filteredStudents =
    students &&
    students.filter((student) => {
      const fullName = student.firstName + " " + student.lastName;
      return fullName.toLowerCase().indexOf(nameSearchText) !== -1;
    });

  const list =
    filteredStudents &&
    filteredStudents.map((student, index) => {
      const {
        id,
        pic,
        firstName,
        lastName,
        email,
        company,
        skill,
        grades,
        tags,
      } = student;

      return (
        <StudentCard
          // Key
          key={index}
          // Values
          isOpen={openStudentCards.includes(id)}
          id={id}
          pic={pic}
          firstName={firstName}
          lastName={lastName}
          email={email}
          company={company}
          skill={skill}
          averageGrade={findGradeAverage(grades)}
          grades={grades}
          tags={tags}
          // Methods
          toggleStudentCard={toggleStudentCard}
          submitTag={submitTag}
        />
      );
    });

  return <div className="student-list">{list}</div>;
};

export default StudentList;
