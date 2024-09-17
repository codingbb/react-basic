import React, { Component } from "react";

class Myarticle extends Component {
  render() {
    let classNames = "menu";
    if (this.props.mode === "welcome") {
      // 앞에 공백 띄우기 필수 !!
      classNames += " hidden";
    }
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <ul className={classNames}>
            <li>
              <a
                href="/update"
                className="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onChangeMode("update");
                }}
              >
                update
              </a>
            </li>
            <li>
              <input
                type="button"
                className="danger"
                value="delete"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onChangeMode("delete");
                }}
              ></input>
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default Myarticle;
