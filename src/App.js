import "./App.css";
import React, { Component, useState } from "react";
import Myheader from "./component/Myheader";
import Myarticle from "./component/Myarticle";
import Mynav from "./component/Mynav";
import CreateArticle from "./component/CreateArticle";
import UpdateArticle from "./component/UpdateArticle";

// function App() {} 으로 해도 됨
const App = () => {
  let max_menu_id = 3;
  let welcome = {
    title: "Welcome",
    desc: "Welcome to FrontEnd",
  };
  let subject = {
    title: "프론트엔드 개발자 역량",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  };
  const [mode, setMode] = useState("welcome");
  const [selected_id, setSelectedId] = useState(2);
  const [menus, setMenus] = useState([
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
  ]);

  // 함수 정리
  const getReadArticle = () => {
    let idx = menus.findIndex((item) => item.id === selected_id);
    let data = menus[idx];
    return data;
  };

  const getArticles = () => {
    let _title,
      _desc,
      _article = null;
    // welcome 모드인 경우
    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
      _article = (
        <Myarticle title={_title} desc={_desc} mode={mode}></Myarticle>
      );

      // read 모드인 경우
    } else if (mode === "read") {
      // menus 안에 있는 걸 item으로 받음
      let _data = getReadArticle();
      // console.log(idx);
      _article = (
        <Myarticle
          title={_data.title}
          desc={_data.desc}
          onChangeMode={(_mode) => {
            if (_mode === "delete") {
              if (window.confirm("정말 삭제할까요?")) {
                // 배열을 새로 만들어서 _menus에 담는다 (원본을 건드리지 않기 위해서)
                let _menus = Array.from(menus);
                // 복사본의 하나하나의 아이템을 item으로 받아서 id랑 일치하는 것을 찾는다
                let idx = _menus.findIndex((item) => item.id === selected_id);
                console.log("idx ", idx);
                // 이제 복사본에서 찾은 idx를 삭제한다
                _menus.splice(idx, 1);
                // 원본에 복사본을 넣어준다
                setMode("welcome");
                setMenus(_menus);
              }
            } else {
              setMode(_mode);
            }
          }}
        ></Myarticle>
      );

      // crate 모드인 경우
    } else if (mode === "create") {
      _article = (
        <CreateArticle
          onSubmit={(_title, _desc) => {
            // console.log(_title, _desc);
            max_menu_id += 1;

            let _menus = menus.concat({
              id: max_menu_id,
              title: _title,
              desc: _desc,
            });
            setMenus(_menus);
            setMode("read");
            setSelectedId(max_menu_id);
          }}
        ></CreateArticle>
      );
    } else if (mode === "update") {
      let _content = getReadArticle();

      _article = (
        <UpdateArticle
          data={_content}
          onSubmit={(_title, _desc, _id) => {
            // console.log(_title, _desc, _id);

            let _menus = Array.from(menus);
            _menus.forEach((item, index) => {
              if (item.id === _id) {
                _menus[index] = { id: _id, title: _title, desc: _desc };
              }
            });
            setMenus(_menus);
            setMode("read");
          }}
        ></UpdateArticle>
      );
    }
    return _article;
  };

  return (
    <div className="App">
      <Myheader
        title={subject.title}
        desc={subject.desc}
        // 함수를 자식에게 넘김
        onChangeMode={() => {
          setMode("welcome");
        }}
      ></Myheader>

      <Mynav
        data={menus}
        onChangePage={(id) => {
          setMode("read");
          setSelectedId(id);
          // debugger;
        }}
      ></Mynav>

      {/* getArticles 함수가 실행된 결과물을 이 자리에 _article을 출력함 */}
      {getArticles()}
      <hr />
      <div className="menu">
        <button
          type="button"
          className="primary"
          onClick={() => {
            setMode("create");
          }}
        >
          Create task
        </button>
      </div>
    </div>
  );
};

export default App;
