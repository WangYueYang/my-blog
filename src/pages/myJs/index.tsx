import React, { Component } from 'react';

import Menu from 'components/menu'
import Markdown from 'components/markdown'

interface IProps {
  match: {
    path: string
  }
}
class Myjs extends Component<IProps> {
  render() {
    return (
      <div>
        <Menu path={`${this.props.match.path}/ojs`} comp={Markdown}/>
      </div>
    );
  }
}

export default Myjs;