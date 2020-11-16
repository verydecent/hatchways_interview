import React from "react";
import StudentCard from "./StudentCard";
import findGradeAverage from "../helpers/findGradeAverage";

const StudentList = ({ students }) => {
  const list =
    students &&
    students.map((student) => {
      const {
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
