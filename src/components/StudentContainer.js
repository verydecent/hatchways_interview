import React from "react";
import ax from "../helpers/axiosConfig";

class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ax.get();
  }

  render() {
    return <div>Student Container</div>;
  }
}

export default StudentContainer;
