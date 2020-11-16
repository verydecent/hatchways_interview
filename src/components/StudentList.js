import React from "react";

const StudentList = ({ students }) => {
  const list =
    students &&
    students.map((student) => {
      console.log("student from map", student);
      return <div>student 1</div>;
    });

  return (
    <div>
      {list}
      LIST STUDENT
    </div>
  );
};

export default StudentList;
