import React, { Component } from 'react';

class Editor extends Component {
  handleChange = e => {
    this.props.updateMarkdown(e.target.value);
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} />
      </div>
    );
  }
}

export default Editor;