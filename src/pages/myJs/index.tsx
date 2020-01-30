import React, { Component } from 'react';

import Menu from 'components/menu'

interface IProps {
}

const mockMenu: { title: string, path: string }[] = [
  {
    title: 'JavaScript',
    path: '/js',
  },
  {
    title: '文章一',
    path: '/js1'
  },
  {
    title: '文章二',
    path: '/js2'
  },
  {
    title: '文章三',
    path: '/js3'
  },
  {
    title: '文章4',
    path: '/js4'
  }
]
class Myjs extends Component<IProps> {
  render() {
    const { props } = this
    return (
      <div className="content-body">
        <Menu {...props} menuList={mockMenu} />
        <div className="blog-view">
          JavaScript view
        </div>
      </div>
    );
  }
}

export default Myjs;