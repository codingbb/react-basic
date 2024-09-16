import React, { Component } from "react";

class Mynav extends Component {
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
