import React from "react";
import ax from "../helpers/axiosConfig";
import SearchBar from "./SearchBar";
import StudentList from "./StudentList";

class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      nameSearchText: "",
      tagSearchText: "",
      students: [],
      openStudentCards: [],
    };
  }

  componentDidMount() {
    ax.get("/students")
      .then((response) => {
        console.log("RESPONSE", response);
        const { students } = response.data;
        const studentsWithTagsArr = students.map((student) => {
          student.tags = [];
          return student;
        });
        this.setState({ students: studentsWithTagsArr });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }

  nameOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  tagOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  submitTag = (e, id, tagText) => {
    e.preventDefault();
    const immutableArr = this.state.students.map((student) => {
      if (student.id === id) student.tags.push(tagText);
      return student;
    });
    this.setState((prevState) => {
      return {
        ...prevState,
        students: immutableArr,
      };
    });
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
          <div className="student-inner-container">
            <div className="searchbar-container">
              <SearchBar
                name="nameSearchText"
                value={this.state.nameSearchText}
                placeholder="Search by name"
                onChange={this.nameOnChange}
              />
              <SearchBar
                name="tagSearchText"
                value={this.state.tagSearchText}
                placeholder="Search by tag"
                onChange={this.tagOnChange}
              />
            </div>
            <StudentList
              students={this.state.students}
              nameSearchText={this.state.nameSearchText}
              tagSearchText={this.state.tagSearchText}
              toggleStudentCard={this.toggleStudentCard}
              openStudentCards={this.state.openStudentCards}
              submitTag={this.submitTag}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentContainer;
