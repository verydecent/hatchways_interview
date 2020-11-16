import React from "react";
import ax from "../helpers/axiosConfig";
import StudentList from "./StudentList";

class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    ax.get("/students")
      .then((response) => {
        console.log("RESPONSE", response);
        const { students } = response.data;
        this.setState({ students });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }

  render() {
    return (
      <div className="student-container">
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default StudentContainer;
