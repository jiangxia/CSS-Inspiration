import React, {Component} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;

import './index.less';

export default class PubuColumn extends Component {
  render () {
    return (
      <Content style={{padding: 24, background: '#fff', minHeight: 360}}>
        <h2>CSS实现瀑布流布局（column-count）</h2>
        <p>本例使用 CSS column 实现瀑布流布局</p>
        <p>关键点：</p>
        <ul>
          <li>column-count: 元素内容将被划分的最佳列数</li>
          <li>break-inside: 避免在元素内部插入分页符</li>
        </ul>

        <div>
          <div className="g-container">
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
          </div>
        </div>
      </Content>
    );
  }
}
