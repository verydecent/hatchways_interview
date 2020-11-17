import React from "react";
import Button from "./Button";

const StudentCard = ({
  isOpen,
  id,
  pic,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  grades,
  toggleStudentCard,
}) => {
  const conditionalSymbol = isOpen ? "-" : "+";
  const conditionalClassName = isOpen
    ? "student-card-bottom-container show"
    : "student-card-bottom-container";
  const mappedGrades =
    grades &&
    grades.map((grade, index) => {
      return (
        <div className="grade">
          <p className="student-card-details-text">
            Test {index + 1}: {grade}%
          </p>
        </div>
      );
    });
  return (
    <div className="student-card">
      <div className="student-card-container">
        <div className="student-card-image-container">
          <img src={pic} alt="hatchways robot" />
        </div>
        <div className="student-card-details-container">
          <div className="student-card-details-header">
            <h1 className="student-card-details-name">
              {firstName} {lastName}
            </h1>
            <div className="student-card-details-button">
              <Button onClick={() => toggleStudentCard(id)}>
                {conditionalSymbol}
              </Button>
            </div>
          </div>
          <div className="student-card-details-text-container">
            <p className="student-card-details-text">Email: {email}</p>
            <p className="student-card-details-text">Company: {company}</p>
            <p className="student-card-details-text">Skill: {skill}</p>
            <p className="student-card-details-text">
              Average: {averageGrade}%
            </p>
          </div>
        </div>
      </div>
      <div className={conditionalClassName}>
        <div className="grades-list">{mappedGrades}</div>
      </div>
    </div>
  );
};

export default StudentCard;
