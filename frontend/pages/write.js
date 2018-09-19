import React from "react";
import Link from "next/link";
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import { createPost } from '../api/posts'

class Write extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      text: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = value => e => {
      this.setState({[value]: e.target.value})
  }

  async handleSubmit () {
    const {name, title, text} = this.state;
    const req = await createPost(name, title, text)

    window.alert("created Post!");
    //go to list
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
            Name:
            <br />
              <input type='text' value={this.state.name} onChange={this.handleChange('name')} />
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
              <textarea rows='4' cols='50' type='text' value={this.state.text} onChange={this.handleChange('text')} />
            </label>
          </div>
          <input type='submit' value='Submit' />
        </form>
      </Layout>
    )
  }
};

Write.getInitialProps = async (context) => {
  // const { seq } = context.query
  // const res = await fetch(`http://mugle.org/PilotBoard/select?seq=${seq}`)
  // const data = await res.json()

  // this.setState({
  //     name: data.name,
  //     title: data.title,
  //     text: data.cotent
  // })

  return {  }
}

export default Write;