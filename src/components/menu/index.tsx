import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './index.less'


interface IProps {
  menuList: { title: string, path: string }[],
  match?: {
    path: string
  }
}


class Menu extends Component<IProps, {}> {

  // 递归导航
  menuNode = (list) => {
    let vdom = []

    if (list instanceof Array) {
      let adom = []

      list.forEach(item => {
        adom.push(this.menuNode(item))
      })

      vdom.push(
        <ul key="haha">
          {adom}
        </ul>
      )

    } else {
      vdom.push(
        <li key={list.title}>
          {list.content}
          {this.menuNode(list.subMenu)}
        </li>
      )
    }

    return vdom;
  }

  render() {
    const { props } = this
    const fistMenu = props.menuList[0]
    
    return (
      <div className="menu">
        <ul className="menu-wrapper">
          <li className="menu-title">
            <Link to={`${fistMenu.path}`}>{fistMenu.title}</Link>
          </li>
          {
            props.menuList.map(item => {
              return (
                <li key={item.title}>
                  <Link to={`${props.match.path}${item.path}`}>{item.title}</Link>
                </li>
              )
            }).slice(1)
          }
        </ul>
      </div>
    );
  }
}

export default Menu;