import React from 'react';


function AppList(props) {
    return (
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">{props.description}</div>
      </div>
    );
}
  
  
export default AppList;
  