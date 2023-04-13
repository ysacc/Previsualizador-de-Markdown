import React, { Component } from 'react';
import marked from 'marked';

class Preview extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: marked(this.props.markdown) }} />
    );
  }
}

export default Preview;