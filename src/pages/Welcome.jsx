import React, {Component} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;

export default class Welcome extends Component {
  render () {
    return (
      <Content style={{padding: 24, background: '#fff', minHeight: 360}}>
        <p>您好，朋友：</p>
        <p>
          希望这里可以让你寻找到使用或者是学习 CSS 的灵感，以分类的形式，展示不同 CSS 属性或者不同的课题使用 CSS 来解决的各种方法。
        </p>
      </Content>
    );
  }
}
