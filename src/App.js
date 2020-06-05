import React, { Component } from 'react';
import './App.css';
import AppList from './App.list';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    lists: [
      {title: 'status call', description: 'Status call to discuss about daily status'},
      {title: 'CEO meeting', description: 'Meeting with CEO to discuss regarding pandemic updates'},
      {title: 'Fun Time', description: 'Fun time with team, for casual discussions.'}
    ]

  }

  clickHandler = (newTitle, newDescription) => {

    this.state.lists.push({title: newTitle, description: newDescription});

    this.setState({
      lists: this.state.lists
    });
  }

  deleteListHandler = (index) => {
    const listnew = this.state.lists
    listnew.splice(index, 1);
    this.setState({
      lists: listnew
    });
  }

  render() {

    return (
      <div className="App">
        <nav className="navbar navbar-light"><h1>Todo App</h1></nav>
        <br/>
        <div className="container">
          <div className="inputVal">
            <h3>Title:</h3>
            <input type="text" ref={el => this.title=el}/>
            <h3>Description:</h3>
            <input type="text" ref={el => this.description=el}/>
            <br/><br/>
            <button className="Add form-control"
            onClick={() => this.clickHandler(this.title.value, this.description.value)}
            >Add</button>
          </div>
          <br/>
          <br/>
          <div className="listView">
            {this.state.lists.map((list, index) => {
              return ( 
              <div onClick={() => this.deleteListHandler(index)}>
                <AppList 
                title={list.title} description={list.description} /> 
              <br/>
              </div>)
            })}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
