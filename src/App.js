import "./App.css";
import React, { Component } from "react";
import Myheader from "./component/Myheader";
import Myarticle from "./component/Myarticle";
import Mynav from "./component/Mynav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: "프론트엔드 개발자",
        desc: "기본언어인 html, css, javascript부터 학습합니다.",
      },
      menus: [
        {
          id: 1,
          title: "UI/UX 개발",
          desc: "사용자 인터페이스와 사용자가 웹사이트르 이용하면 느끼고 생각하는 총체적 경험을 개발",
        },
        {
          id: 2,
          title: "재사용이 가능한 UI 개발",
          desc: "앵귤러, 리액트, 뷰 등의 자바스크립트 프레임워크를 가지고 재사용할 수 있는 UI를 만든다.",
        },
        {
          id: 3,
          title: "애니메이션 구현",
          desc: "CSS 또는 javascript를 사용해 다양한 효과의 애니메이션 구현한다.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {/* <Myheader /> 이렇게 사용도 가능 */}
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
        ></Myheader>
        <Mynav data={this.state.menus}></Mynav>
        <Myarticle></Myarticle>
      </div>
    );
  }
}

export default App;
