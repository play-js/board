import React from "react"
import { withRouter } from "next/router"
import Layout from '../components/Layout'
import Button from '../components/Button'
import { createPost, updatePost } from '../api/posts'

class Write extends React.Component {
  constructor(props) {
    super(props);

    const { id, title, content } = props.router.query;

    this.state = {
      id: id || "",
      title: title || "",
      content: content || ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = value => e => {
      this.setState({[value]: e.target.value})
  }

  handleSubmit = async () => {
    const data = this.props.router.query;
    const {id, title, content} = this.state;
    
    if (!(id && title && content)) {
      window.alert("Please enter valid values!");
      //validation check (special characters)
      return;
    }

    if (data.hasOwnProperty("seq")) {
      const req = await updatePost(data.seq, id, title, content)
      window.alert("Edited your post!");
    } else {
      const req = await createPost(id, title, content)
      window.alert("Created your post!");
    }

    window.location.replace("/");
  }

  render() {
    return (
      <Layout>
        <div>
          <label>
          Name:
          <br />
            <input type='text' value={this.state.id} onChange={this.handleChange('id')}/>
          </label>
        </div>
        <div>
          <label>
          Title:
          <br />
            <input type='text' value={this.state.title} onChange={this.handleChange('title')} />
          </label>
        </div>
        <div>
          <label>
          Text:
          <br />
            <textarea value={this.state.content} onChange={this.handleChange('content')} />
          </label>
        </div>
        <Button onClickCallback={this.handleSubmit} text="Submit"/>
        <style jsx>{`
          input {
            width: 100%;
          }
          textarea {
            width: 100%;
            height: 300px;
          }
        `}</style>
      </Layout>
    )
  }
};

export default withRouter(Write);