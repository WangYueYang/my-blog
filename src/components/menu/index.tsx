import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './index.less'

interface IProps {
  path: string,
  comp: any
}

class Menu extends Component<IProps, {}> {
  render() {
    const { props } = this
    return (
      <div className="menu">
        <div className="menu-wrapper">
          <div className="menu-title">JavaScript</div>
          <div className="menu-content">js内容1</div>
        </div>
        <div className="view">
          <Route path={props.path} component={props.comp}/>
        </div>
      </div>
    );
  }
}

export default Menu;