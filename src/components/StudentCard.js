import React from "react";
import TagContainer from "./TagContainer";
import StudentDetails from "./StudentDetails";
import StudentGrades from "./StudentGrades";
import StudentHeader from "./StudentHeader";
import StudentImageContainer from "./StudentImageContainer";

const StudentCard = ({
  // Values
  tagSearchText,
  isOpen,
  id,
  picSrc,
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
  const conditionalClassName = isOpen
    ? "student-card-bottom-container show"
    : "student-card-bottom-container";
  const tagConditionalClassName =
    tags.includes(tagSearchText) || tagSearchText === ""
      ? "student-card"
      : "student-card hide";
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
    <div className={tagConditionalClassName}>
      <div className="student-card-container">
        {/* Image Container */}
        <StudentImageContainer picSrc={picSrc} />
        {/* Details container */}
        <div className="student-card-details-container">
          {/* Header section */}
          <StudentHeader
            id={id}
            isOpen={isOpen}
            fullName={`${firstName} ${lastName}`}
            toggleStudentCard={toggleStudentCard}
          />
          {/* Details section */}
          <StudentDetails
            email={email}
            skill={skill}
            company={company}
            averageGrade={averageGrade}
          />
          {/* Expanding grades section */}
          <StudentGrades
            mappedGrades={mappedGrades}
            conditionalClassName={conditionalClassName}
          />
          {/* Tags section */}
          <TagContainer id={id} tags={tags} submitTag={submitTag} />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
