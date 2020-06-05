import React from 'react';
import App from './App';

function AddNew(props) {
    const app = new App();
    return (
            <div className="inputVal">
                <h3>Title:</h3>
                <input type="text" value={props.title}/>
                <h3>Description:</h3>
                <input type="text" value={props.description}/>
                <br/><br/>
                <button className="Add form-control"
                onClick={() => app.clickHandler(props.title, props.description)}
                >Add</button>
            </div>
 );
}
  
  
export default AddNew;
  