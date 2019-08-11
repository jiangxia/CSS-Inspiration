import React, {Component} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;

import styles from './index.less';

export default class PubuFlex extends Component {
  render () {
    return (
      <Content style={{padding: 24, background: '#fff', minHeight: 360}}>
        <h2>CSS 实现瀑布流布局（display: flex）</h2>
        <p>本例使用 CSS flex 实现瀑布流布局</p>
        <p>关键点，横向 flex 布局嵌套多列纵向 flex 布局，使用了 vw 进行自适应缩放</p>

        <div>
          <div className={styles["g-container"]}>
            <div className={styles["g-queue"]}>
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
            </div>
            <div className={styles["g-queue"]}>
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
            </div>
            <div className={styles["g-queue"]}>
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
            </div>
            <div className={styles["g-queue"]}>
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
              <div className={styles["g-item"]} />
            </div>
          </div>
        </div>
      </Content>
    );
  }
}
