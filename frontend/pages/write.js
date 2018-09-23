import Button from "../components/Button";
import fetch from "isomorphic-unfetch";
// import Router, { withRouter } from "next/router";
import { withRouter } from "next/router";

class Write extends React.Component {
  constructor(props) {
    super(props);

    const { id, seq, title, content } = props.router.query;
    this.state = {
      title,
      content,
      author: id,
      seq
    };
  }

  handleSubmit = async () => {
    const { title, content, author, seq } = this.state;
    let uri = `http://mugle.org/PilotBoard/create?id=${author}&content=${content}&title=${title}`;

    if (seq) {
      uri = `http://mugle.org/PilotBoard/update?seq=${seq}&id=${author}&content=${content}&title=${title}`;
    }

    await fetch(uri, { mode: "no-cors" });

    this.setState({
      title: "",
      content: "",
      author: ""
    });
    alert("작성 완료!");
    // Router.push("/"); // Client side
    window.location.replace("/"); // Server side
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
export default withRouter(Write);
