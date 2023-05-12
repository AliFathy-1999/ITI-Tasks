import { useRef } from "react";

function Posts(props) {
    const cardRef = useRef([]);
    const changeColor = (id) => {
        cardRef.current[id].style.cssText = `background-color:#0275d8;color:white`;     
    };
    return (      
    <div className="Posts container">
        <div className="row">
          <h2 className='text-center text-danger'>Query Result total number: {props.posts.length}</h2>
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
    
  );
  
}

export default Posts;
