import React from "react";
import ax from "../helpers/axiosConfig";
import StudentList from "./StudentList";

class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ax.get("/students")
      .then((response) => {
        console.log("RESPONSE", response);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }

  render() {
    return (
      <div>
        <StudentList />
      </div>
    );
  }
}

export default StudentContainer;
