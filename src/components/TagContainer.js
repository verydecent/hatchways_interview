import React from "react";
import Tag from "./Tag";

class TagContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tagText: "" };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearState = () => {
    this.setState({ tagText: "" });
  };

  render() {
    return (
      <div className="tag-section">
        <form
          onSubmit={() => {
            this.props.submitTag();
            this.clearState();
          }}
        >
          <input
            name="tagText"
            value={this.state.tagText}
            onChange={this.onChange}
            placeholder="add a tag"
            className="tag-input"
          />
        </form>
      </div>
    );
  }
}

export default TagContainer;
