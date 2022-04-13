import logo from './logo.svg';
import './App.css';

import AddPost from './components/AddPost';
import Posts from './components/Posts';
import Post from './components/Post';

const Header = () => <h1>My Blog</h1>

function App() {
  return (
    <div>
      <Header />
      <Posts />
      <Post details="This is my first blog post." />
      <AddPost />
    </div>
  );
}

export default App;
