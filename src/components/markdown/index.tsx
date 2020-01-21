import React, { Component } from 'react';

import Hello from './md/Hello.md'

class Markdown extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{__html: Hello}} />
      </>
    );
  }
}

export default Markdown;