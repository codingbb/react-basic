import React, { Component } from "react";

class Mynav extends Component {
  render() {
    let lists = [];
    // console.log(this.props.data);
    const data = this.props.data;
    // let i = 0;
    // while (i < data.length) {
    //   lists.push(
    //     <li key={data[i].id}>
    //       <a href="/">{data[i].title}</a>
    //     </li>
    //   );
    //   i += 1;
    // }

    // data 하나하나를 item으로 받겠다!
    // 그 요소와 각각 가지고 있는 인덱스 번호를 쓰겠다 -> idx 사용
    // data.forEach(function (item, idx) {
    //   lists.push(
    //     <li key={item.id}>
    //       <a href="/">{item.title}</a>
    //     </li>
    //   );
    // });

    // 매개변수가 하나만 있을 때에는 (item) 이거 괄호 생략 가능
    data.forEach((item) => {
      lists.push(
        <li key={item.id}>
          <a href="/">{item.title}</a>
        </li>
      );
    });

    return (
      <nav>
        <ul>
          <li>
            <a href="/" data-id="1">
              UI/UX 개발
            </a>
          </li>
          <li>
            <a href="/" data-id="2">
              재사용이 가능한 UI 개발
            </a>
          </li>
          <li>
            <a href="/" data-id="3">
              애니메이션 구현
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Mynav;
