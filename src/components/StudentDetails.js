import React from "react";

const StudentDetails = ({ email, company, skill, averageGrade }) => {
  return (
    <div className="student-card-details-text-container">
      <p className="student-card-details-text">Email: {email}</p>
      <p className="student-card-details-text">Company: {company}</p>
      <p className="student-card-details-text">Skill: {skill}</p>
      <p className="student-card-details-text">Average: {averageGrade}%</p>
    </div>
  );
};

export default StudentDetails;
