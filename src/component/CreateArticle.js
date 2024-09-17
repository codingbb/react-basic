import React, { Component } from "react";

class CreateArticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>Create Task</h2>
          <form
            action="/create_process"
            method="POST"
            // 내가 입력한 값이 e에 담길 것이다
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }}
          >
            <p>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                placeholder="title"
                id="title"
                required
              ></input>
            </p>
            <p>
              <label htmlFor="desc">Description:</label>
              <textarea
                id="desc"
                name="desc"
                placeholder="description"
                required
              ></textarea>
            </p>
            <button className="primary">Submit</button>
          </form>
        </article>
      </section>
    );
  }
}

export default CreateArticle;
