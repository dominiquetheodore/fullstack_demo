import React from "react"
import apiURL from "../config"
import axios from "axios"

class AddPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    addPost(newPost) {
      console.log(newPost)
      axios.post("http://localhost:3000/posts", newPost)
        .then(res => alert("Post created"))
        .catch(err => console.log(err))
    }
  
    render() {
      return (
        <div>
          <h3>Add a Post</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Details
            </label>
            <br />
            <textarea
              id="new-post"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br />
            <button>
              Submit
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newPost = {
        details: this.state.text,
      };

      this.addPost(newPost)

      /*
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));*/
    }
  }

export default AddPost