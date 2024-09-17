import "./App.css";
import React, { Component } from "react";
import Myheader from "./component/Myheader";
import Myarticle from "./component/Myarticle";
import Mynav from "./component/Mynav";
import CreateArticle from "./component/CreateArticle";
import UpdateArticle from "./component/UpdateArticle";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_menu_id = 3;
    this.state = {
      mode: "welcome",
      selected_id: 2,
      welcome: {
        title: "Welcome",
        desc: "Welcome to FrontEnd",
      },
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

  getReadArticle() {
    let idx = this.state.menus.findIndex(
      (item) => item.id === this.state.selected_id
    );
    let data = this.state.menus[idx];
    return data;
  }

  // 모드에 따라서 article을 바꾸는 걸 이 함수를 통해서 할 수 있다!
  getArticles() {
    let _title,
      _desc,
      _article = null;
    // welcome 모드인 경우
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = (
        <Myarticle
          title={_title}
          desc={_desc}
          mode={this.state.mode}
        ></Myarticle>
      );

      // read 모드인 경우
    } else if (this.state.mode === "read") {
      // menus 안에 있는 걸 item으로 받음
      let _data = this.getReadArticle();
      // console.log(idx);
      _article = (
        <Myarticle
          title={_data.title}
          desc={_data.desc}
          onChangeMode={(_mode) => {
            this.setState({
              mode: _mode,
            });
          }}
        ></Myarticle>
      );

      // crate 모드인 경우
    } else if (this.state.mode === "create") {
      _article = (
        <CreateArticle
          onSubmit={(_title, _desc) => {
            // console.log(_title, _desc);
            this.max_menu_id += 1;

            let _menus = this.state.menus.concat({
              id: this.max_menu_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              menus: _menus,
              mode: "read",
              selected_id: this.max_menu_id,
            });
          }}
        ></CreateArticle>
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadArticle();

      _article = (
        <UpdateArticle
          data={_content}
          onSubmit={(_title, _desc, _id) => {
            // console.log(_title, _desc, _id);

            let _menus = Array.from(this.state.menus);
            _menus.forEach((item, index) => {
              if (item.id === _id) {
                _menus[index] = { id: _id, title: _title, desc: _desc };
              }
            });
            this.setState({
              menus: _menus,
              mode: "read",
            });
          }}
        ></UpdateArticle>
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        {/* <Myheader /> 이렇게 사용도 가능 */}
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          // 함수를 자식에게 넘김
          onChangeMode={() => {
            this.setState({ mode: "welcome" });
          }}
        ></Myheader>
        <Mynav
          data={this.state.menus}
          onChangePage={(id) => {
            // debugger;
            this.setState({ mode: "read", selected_id: id });
          }}
        ></Mynav>

        {/* getArticles 함수가 실행된 결과물을 이 자리에 _article을 출력함 */}
        {this.getArticles()}
        {/* {_article} */}
        <hr />
        <div className="menu">
          <button
            type="button"
            className="primary"
            onClick={() => {
              this.setState({
                mode: "create",
              });
            }}
          >
            Create task
          </button>
        </div>
      </div>
    );
  }
}

export default App;
