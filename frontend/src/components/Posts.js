import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
 const [posts, setPosts] = useState({});

 const fetchPosts = () => {
    axios.get("http://localhost:3000/posts")
    .then((res) => {
        setPosts(res.data)
    })
 //.then((data) => setPosts(data));
}

useEffect(() => {
    fetchPosts()
}, []);

return (
 <div className="App">
 <h2>Press the button for a random cat fact!</h2>
 <hr />
 <ul>
 {posts.map(post => (
          <li key={post._id}>{post.details}</li>
        ))}
 </ul>

 </div>
);
}
export default Posts;