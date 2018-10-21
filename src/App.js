import React, { Component } from 'react';
import './App.css';
import Form from './component/Props';
import Counter from './component/States';

class App extends Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     persons: [
  //       { name: 'Nadim Mahmud', email: 'nadim@gmail.com', address: 'West Kazipara' },
  //       { name: 'Kafil Uddin', email: 'kafil@gmail.com', address: 'Gulshan' },
  //       { name: 'Abdur Rahim', email: 'rahim@gmail.com', address: 'Dhanmondhi' },
  //     ]
  //   }
  // }

  clickHandler = () => {
    alert('My name is Nadim Mahmud');
  }

  render() {
    return (
      <div className="App">

        {/* Example of Event Handler */}
        <button onClick= { this.clickHandler } >Click Me</button>
        
        {/* Example of props */}
        {/* { this.state.persons.map((item, index) => {
          return <Form 
                  key = { index }
                  name = { item.name } 
                  email = {item.email }
                  address = { item.address } />
        }) } */}

        {/* Example of state */}
        {/* <Counter /> */}

      </div>
    );
  }
}

export default App;
