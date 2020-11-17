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
      openStudentCards: [],
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  toggleStudentCard = (id) => {
    console.log("toggleStudentCard", id);
    if (this.state.openStudentCards.includes(id)) {
      // Remove
      const immutableArray = this.state.openStudentCards.filter(
        (card) => card.id !== id
      );
      this.setState((prevState) => {
        return {
          ...prevState,
          openStudentCards: immutableArray,
        };
      });
    } else {
      // Add
      this.state.openStudentCards.push(id);
    }
  };

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
          toggleStudentCard={this.toggleStudentCard}
        />
      </div>
    );
  }
}

export default StudentContainer;
