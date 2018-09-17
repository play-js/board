import React from "react";
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

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
    const req = await fetch(`http://mugle.org/PilotBoard/create?id=${this.state.name}&content=${this.state.text}`)
    const data = await req.json()
    
    console.log(`Show data fetched. Count: ${data.length}`)

    // return fetch(`http://mugle.org/PilotBoard/create?id=${this.state.name}&content=${this.state.text}`, {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     if (response.status >= 200 && response.status < 300) {
    //         return response;
    //         console.log(response);
    //         window.location.reload();
    //       } else {
    //       console.log('Somthing happened wrong');
    //       }
    // }).catch(err => err);
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

export default Write;
