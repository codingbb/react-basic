import React, { Component } from "react";

class Mynav extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      "shouldComponentUpdate 작동",
      newProps.data, // 변경된 값
      this.props.data // 변경전 값
    );
    if (this.props.data === newProps.data) {
      return false;
    }

    return true;
  }

  render() {
    let lists = [];
    // console.log(this.props.data);
    const data = this.props.data;

    data.forEach((item) => {
      lists.push(
        <li key={item.id}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(item.id);
            }}
          >
            {item.title}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{lists}</ul> {/* 동적으로 생성된 리스트를 렌더링 */}
      </nav>
    );
  }
}

export default Mynav;
