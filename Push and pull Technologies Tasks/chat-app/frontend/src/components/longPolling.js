import axios from "axios";
import user from "../user.png"
import '../shortPolling.css';
import { useCallback, useEffect, useState } from 'react';

function LongPolling() {
  const backendUrl = "http://localhost:2000/chat"
  const [messages,setMessages] = useState([]);
  const [inputValue,setInputValue] = useState('');
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);

  const changeTimeFormate = (messageDate) => {
    const date = new Date(messageDate);
    const time = `${date.getUTCHours()}:${date.getUTCMinutes()}`
    return time;
  }
  const sendMessage = (e) => {
    e.preventDefault();
    if(!inputValue.trim()){
      setError("You entered invalid data, please enter a valid input!!")
    }else{
      setError('')
      axios.post(backendUrl,{
        message:inputValue
      })
    }
  }
  useEffect(() => {
    axios.get(`${backendUrl}/long`)
      .then(response => {
        setMessages(prevData => [...prevData, response.data]);
        console.log('the new data', response.data);
      })
      .catch(error => {
        console.log(error);
        setMessages(prevData => [...prevData]);
      });
  }, [messages]);

  return (
    
    <>
 
      <div className="container mb-5 mt-5 animate-bottom">
        <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading p-3 text-center fs-4"><i className="bi bi-chat"></i> Chat App</div>
              <div className="panel-body">
              {
                loading ? <div id="loader"></div> :
                <div className="container">
                { messages.map( myMessage => 
                    <div className=" message-bubble p-3" key={myMessage._id}>
                        <div className="d-flex">
                          <img src={user} alt="user" className="user-image col-1"/>
                          <h3 className="col ms-2 mt-3">Username</h3>
                          <p>{ changeTimeFormate(myMessage.createdAt)}</p>
                        </div>
                        <h4 className="mt-3 ms-5"> {myMessage.message} </h4>
                    </div>
                  )}
                </div>
              }
                <form className="panel-footer mt-3">
                    <div className="input-group">
                      <input type="text" value={inputValue} className="form-control" name="message" onChange={(e)=>{setInputValue(e.target.value);}} />
                      <span className="input-group-btn">
                        <button className="btn btn-primary ms-2 fs-3" onClick={sendMessage} type="button"><i className="bi bi-send"></i> Send</button>
                      </span>
                    </div>
                      {
                        error ? <div className="alert alert-danger mt-3 text-center fs-4"  ><i className="bi bi-exclamation-triangle-fill"></i> {error}</div> : null
                      }
                </form>

              </div>
            </div>
        </div>
      </div>
      
    </>
    
  );
}

export default LongPolling;
