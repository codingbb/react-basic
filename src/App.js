import "./App.css";
import React, { Component } from "react";

class Myheader extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">
          <a href="/">{this.props.title}</a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

class Mynav extends Component {
  render() {
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

class Myarticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>Welcome</h2>
          <p>Welcome to FrontEnd</p>
        </article>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Myheader /> 이렇게 사용도 가능 */}
        <Myheader
          title="프론트엔드 개발자"
          desc="기본언어인 html, css, javascript부터 학습합니다."
        ></Myheader>
        <Mynav></Mynav>
        <Myarticle></Myarticle>
      </div>
    );
  }
}

export default App;
