import React from "react";
import Button from "./Button";
import TagContainer from "./TagContainer";
import StudentDetails from "./StudentDetails";
import StudentGrades from "./StudentGrades";

const StudentCard = ({
  // Values
  tagSearchText,
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
  tags,
  // Methods
  toggleStudentCard,
  submitTag,
}) => {
  const conditionalSymbol = isOpen ? "-" : "+";
  const conditionalClassName = isOpen
    ? "student-card-bottom-container show"
    : "student-card-bottom-container";
  const mappedGrades =
    grades &&
    grades.map((grade, index) => {
      return (
        <div key={index} className="grade">
          <p className="student-card-details-text">
            Test {index + 1}: {grade}%
          </p>
        </div>
      );
    });

  return (
    <div
      className="student-card"
      style={{
        display:
          tags.includes(tagSearchText) || tagSearchText === ""
            ? "block"
            : "none",
      }}
    >
      <div className="student-card-container">
        {/* Image Container */}
        <div className="student-card-image-container">
          <img src={pic} alt="hatchways robot" />
        </div>
        {/* Details container */}
        <div className="student-card-details-container">
          {/* Header section */}
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
          {/* Details section */}
          <StudentDetails
            email={email}
            company={company}
            skill={skill}
            averageGrade={averageGrade}
          />
          {/* Expanding grades section */}
          <StudentGrades
            conditionalClassName={conditionalClassName}
            mappedGrades={mappedGrades}
          />
          {/* Tags section */}
          <TagContainer id={id} tags={tags} submitTag={submitTag} />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
