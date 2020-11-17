import React from "react";
import ax from "../helpers/axiosConfig";
import SearchBar from "./SearchBar";
import StudentList from "./StudentList";

class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      tagText: "",
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
    if (this.state.openStudentCards.includes(id)) {
      // Remove
      const immutableArr = this.state.openStudentCards.filter((cardId) => {
        return cardId !== id;
      });

      this.setState((prevState) => {
        return {
          ...prevState,
          openStudentCards: immutableArr,
        };
      });
    } else {
      // Add
      this.setState((prevState) => {
        return {
          ...prevState,
          openStudentCards: [...prevState.openStudentCards, id],
        };
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="student-container">
          <div className="searchbar-container">
            <SearchBar
              name="searchText"
              value={this.state.searchText}
              placeholder="Search by name"
              onChange={this.onChange}
            />
            <SearchBar
              name="tagText"
              value={this.state.tagText}
              placeholder="Search by tag"
              onChange={this.onChange}
            />
          </div>
          <StudentList
            students={this.state.students}
            searchText={this.state.searchText}
            toggleStudentCard={this.toggleStudentCard}
            openStudentCards={this.state.openStudentCards}
          />
        </div>
      </div>
    );
  }
}

export default StudentContainer;
