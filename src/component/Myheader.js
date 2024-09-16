import React, { Component } from "react";

class Myheader extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              //   함수를 실행할 때에는 () 사용
              this.props.onChangeMode();
            }}
          >
            {this.props.title}
          </a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

export default Myheader;
