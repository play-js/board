import Button from "../components/Button";
import fetch from "isomorphic-unfetch";
// import Router, { withRouter } from "next/router";
import { withRouter } from "next/router";
import { server } from "../config.json";
import { Layout, Input } from "../components";

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
    let uri = `${
      server.url
    }create?id=${author}&content=${content}&title=${title}`;

    if (seq) {
      uri = `${
        server.url
      }update?seq=${seq}&id=${author}&content=${content}&title=${title}`;
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
      <Layout>
        <div>
          <Input
            placeholder="Title"
            value={title}
            onChange={handleChange("title")}
          />
        </div>
        <div>
          <Input
            placeholder="Content"
            value={content}
            onChange={handleChange("content")}
          />
        </div>
        <div>
          <Input
            placeholder="Author"
            value={author}
            onChange={handleChange("author")}
          />
        </div>
        <div>
          <Button onClick={handleSubmit}>submit</Button>
        </div>
        <style jsx>
          {`
            div {
              display: flex;
              align-self: stretch;
              justify-self: stretch;
            }
          `}
        </style>
      </Layout>
    );
  }
}
export default withRouter(Write);
