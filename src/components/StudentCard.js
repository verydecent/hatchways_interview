import React from "react";

const StudentCard = ({
  pic,
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
          <img src={pic} alt="" />
        </div>
        <div className="student-card-deatils-container">
          <h1 className="student-card-details-name">
            {firstName} {lastName}
          </h1>
          <p className="student-card-details-text">Email: {email}</p>
          <p className="student-card-details-text">Company: {company}</p>
          <p className="student-card-details-text">Skill: {skill}</p>
          <p className="student-card-details-text">Average: {averageGrade}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
