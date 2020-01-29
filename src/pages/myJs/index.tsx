import React, { Component } from 'react';

import Menu from 'components/menu'
import Markdown from 'components/markdown'
import ViewComp from 'components/viewComp'

interface IProps {
  match: {
    path: string
  }
}

const mockMenu: any = [
  {
    title: 'JavaScript',
    subMenu: [
      {
        content: '导航一',
        path: '/js1',
        title: 'dh1',
        subMenu: [
          {
            title: 'abc',
            content: '哈哈哈',
            path: '/path',
            subMenu: []
          },
          {
            title: 'abc22',
            content: '哈哈哈22',
            path: '/path22',
            subMenu: []
          }
        ]
      },
      {
        content: '导航二',
        path: '/js2',
        title: 'dh2',
        subMenu: []
      },
      {
        content: '导航三',
        path: '/js3',
        title: 'dh3',
        subMenu: []
      }
    ]
  }
]
class Myjs extends Component<IProps> {
  render() {
    return (
      <div className="clearfix content-body">
        <Menu path={`${this.props.match.path}/ojs`} menuList={mockMenu} />
      </div>
    );
  }
}

export default Myjs;