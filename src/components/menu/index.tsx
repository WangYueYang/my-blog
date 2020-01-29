import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './index.less'

interface IProps {
  path: string,
  menuList?: [
    {
      title: string,
      subMenu: [
        {
          content: string,
          path: string,
          title: string
        }
      ]
    }
  ]
}


class Menu extends Component<IProps, {}> {

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

    return (
      <div className="menu">
        <ul className="menu-wrapper">
          {
            props.menuList.map((item, i) => (
              <li key={item.title}>
                <p className="menu-title">{item.title}</p>
                {this.menuNode(item.subMenu)}
              </li>
            ))
          }

        </ul>
      </div>
    );
  }
}

export default Menu;