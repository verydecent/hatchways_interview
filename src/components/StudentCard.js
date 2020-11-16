import React from "react";

const StudentCard = ({
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
}) => {
  return (
    <div className="student-card">
      <div className="student-card-container">
        <div className="student-card-image-container">
          <img src={""} alt="" />
        </div>
        <div className="student-card-deatils-container"></div>
      </div>
    </div>
  );
};

export default StudentCard;
