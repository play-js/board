// import React from "react";
import Button from "../components/Button";

class Write extends React.Component {
  state = {
    title: "",
    content: "",
    author: ""
  };

  handleSubmit = () => {
    console.log("submit");

    // fetch(
    //   `http://mugle.org/PilotBoard/create?id=${"id"}&content=${"content"}&title=${"title"}`
    // );
  };

  render() {
    const { handleSubmit } = this;
    const { title, content, author } = this.state;

    return (
      <div>
        <div>
          title :<input value={title} />
        </div>
        <div>
          content :<input value={content} />
        </div>
        <div>
          작성자 :<input value={author} />
        </div>
        <Button onClick={handleSubmit}>submit</Button>
      </div>
    );
  }
}
export default Write;
