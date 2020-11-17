import React from "react";
import Button from "./Button";

const StudentHeader = ({ id, fullName, isOpen, toggleStudentCard }) => {
  const conditionalSymbol = isOpen ? "-" : "+";

  return (
    <div className="student-card-details-header">
      <h1 className="student-card-details-name">{fullName}</h1>
      <div className="student-card-details-button">
        <Button onClick={() => toggleStudentCard(id)}>
          {conditionalSymbol}
        </Button>
      </div>
    </div>
  );
};

export default StudentHeader;
