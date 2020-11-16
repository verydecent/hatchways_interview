import React from "react";

const StudentCard = ({
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
}) => {
  return <div className="student-card">{firstName}</div>;
};

export default StudentCard;
