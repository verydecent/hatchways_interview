import React from "react";
import StudentCard from "./StudentCard";
import findGradeAverage from "../helpers/findGradeAverage";

const StudentList = ({ students }) => {
  const list =
    students &&
    students.map((student) => {
      const { firstName, lastName, email, company, skill, grades } = student;
      findGradeAverage(grades);
      return (
        <StudentCard
          firstName={firstName}
          lastName={lastName}
          email={email}
          company={company}
          skill={skill}
          grades={grades}
        />
      );
    });

  return <div>{list}</div>;
};

export default StudentList;
