import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  const list =
    students &&
    students.map((student) => {
      const { firstName, lastName, email, company, skill, grades } = student;
      console.log("student from map", student);
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

  return (
    <div>
      {list}
      LIST STUDENT
    </div>
  );
};

export default StudentList;
