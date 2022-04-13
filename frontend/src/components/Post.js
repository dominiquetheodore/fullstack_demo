import React from "react"

class Post extends React.Component {
    render() {
      return <div className="post">{this.props.details}</div>;
    }
}

export default Post