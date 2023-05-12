import Post1 from './components/post1';
import Post2 from './components/post2';
import Navbar from './layouts/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setPostsRedux } from './redux/actions';
import Search from './components/search';


function Lagouts({ posts, setPostsRedux }) {
  const [, setPosts] = useState([]);
  const [query,setQuery] = useState("");
  const handleSearch = (value) => {
    setQuery(value);
  };
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setPostsRedux(data);
      });
      
  }, [query]);

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      
        <Route 
          path="/"
          element={
            <>
              <Search onSearch={handleSearch} />
              <Post1 />
            </>
          } 
        />
        <Route path="post2" element={
          <>
            <Search onSearch={handleSearch} />
            <Post2 />
          </>
        }
        />
    </Routes>
  </BrowserRouter>

  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
function mapDispatchToProps() {
  return {
    setPostsRedux: (posts) => setPostsRedux(posts),
  };
}
export default connect(mapStateToProps, mapDispatchToProps())(Lagouts);