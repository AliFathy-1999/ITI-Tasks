import { useEffect, useRef, useState } from 'react';
import { setPostsRedux } from '../redux/actions';
import { connect } from 'react-redux';
function Post1(props) {
  const [posts, setPosts] = useState([]);
  const cardRef = useRef([]);
  const changeColor = (id) => {
      cardRef.current[id].style.cssText = `background-color:#0275d8;color:white`;     
  };

  return (
    <>    
    <div className="Posts container mt-5">
    <h1 className='text-center'>Posts 1</h1>
    <h2 className='text-center text-danger'>Query Result total number: {props.posts.length}</h2>
        <div className="row">
            { props.posts.map( (post) => (
                <div className="col-sm-4" key={post.id}>
                    <div ref={(elment) => cardRef.current[post.id] = elment} className={`card m-2`} >
                    <div  className={`card-header text-center`}>Post {post.id}</div>
                        <div className="card-body ">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button className="btn btn-warning" onClick={() => changeColor(post.id)}>Change Color</button>
                        </div>  
                    </div>
                </div>
            ))}
        </div>   
    </div>
    
  
    </>
  );
}
function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts
  };
}
function mapDispatchToProps() {
  return {
    setPostsRedux: (posts) => setPostsRedux(posts),
  };
}
export default connect(mapStateToProps, mapDispatchToProps())(Post1);
