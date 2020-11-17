import React from "react";

const StudentImageContainer = ({ picSrc }) => {
  return (
    <div className="student-card-image-container">
      <img src={picSrc} alt="hatchways robot" />
    </div>
  );
};

export default StudentImageContainer;
