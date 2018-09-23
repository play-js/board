// import React from "react";
import Button from "../components/Button";
import fetch from "isomorphic-unfetch";

class Write extends React.Component {
  state = {
    title: "",
    content: "",
    author: ""
  };

  handleSubmit = async () => {
    const { title, content, author } = this.state;

    const res = await fetch(
      `http://mugle.org/PilotBoard/create?id=${author}&content=${content}&title=${title}`,
      { mode: "cors" }
    );
    this.setState({
      title: "",
      content: "",
      author: ""
    });
    alert("작성 완료!");
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { title, content, author } = this.state;

    return (
      <div>
        <div>
          title :<input value={title} onChange={handleChange("title")} />
        </div>
        <div>
          content :<input value={content} onChange={handleChange("content")} />
        </div>
        <div>
          작성자 :<input value={author} onChange={handleChange("author")} />
        </div>
        <Button onClick={handleSubmit}>submit</Button>
      </div>
    );
  }
}
export default Write;
