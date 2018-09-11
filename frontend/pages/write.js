import React from "react";

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

  handleSubmit (data) {

  }

  render() {
    return (
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
    )
  }
};

export default Write;
