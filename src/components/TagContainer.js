import React from "react";
import Tag from "./Tag";

class TagContainer extends React.Component {
  constructor(props) {
    super(PushSubscriptionOptions);
    this.state = { tagText: "" };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { submitTag } = this.props;

    return (
      <div className="tag-section">
        <form onSubmit={submitTag}>
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
