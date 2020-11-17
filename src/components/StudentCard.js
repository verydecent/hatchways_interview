import React from "react";

const StudentCard = ({
  id,
  pic,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  toggleStudentCard,
}) => {
  return (
    <div className="student-card">
      <div className="student-card-container">
        <div className="student-card-image-container">
          <img src={pic} alt="" />
        </div>
        <div className="student-card-details-container">
          <div className="student-card-details-header">
            <h1 className="student-card-details-name">
              {firstName} {lastName}
            </h1>
            <div className="student-card-details-button">
              <button onClick={() => toggleStudentCard(id)}>+</button>
            </div>
          </div>
          <div className="student-card-details-text-container">
            <p className="student-card-details-text">Email: {email}</p>
            <p className="student-card-details-text">Company: {company}</p>
            <p className="student-card-details-text">Skill: {skill}</p>
            <p className="student-card-details-text">Average: {averageGrade}</p>
          </div>
        </div>
      </div>
      <div className="student-card-bottom-container">Bottom Display None</div>
    </div>
  );
};

export default StudentCard;
