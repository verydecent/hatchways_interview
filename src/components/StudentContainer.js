import React from "react";
import ax from "../helpers/axiosConfig";
import SearchBar from "./SearchBar";
import StudentList from "./StudentList";

class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      students: [],
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

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
        <SearchBar
          searchText={this.state.searchText}
          onChange={this.onChange}
        />
        <StudentList
          students={this.state.students}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default StudentContainer;
