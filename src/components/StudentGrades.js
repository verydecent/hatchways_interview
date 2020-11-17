import React from "react";

const StudentGrades = ({ conditionalClassName, mappedGrades }) => {
  return (
    <div className={conditionalClassName}>
      <div className="grades-list">{mappedGrades}</div>
    </div>
  );
};

export default StudentGrades;
