import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    
    //In React we can modify the state or set initial state in the constructor as variables such as strings, numbers, arrays or objects
    this.state = {
      list_items:['Item 1a', 'Item 2a', 'Item 3a'],
      user_input:'',
    }

  }

  //This function will update the state based on the user input
  handleInputChange = (e) => {

    console.log(e.target.value)
    //We are taking the value of the input field (similar to using input.value) and updating the state using setState
    this.setState({user_input:e.target.value})


  }

  //This function will append the user input to the state of the list 
  handleSubmit = () =>{
    const  {list_items, user_input} = this.state
    //const list_items = this.state.list_items
    //const user_input = this.state.user_input

    //TODO: Validate that the user input is correct (HOMEWORK)
    //Ensure that the user input is a string of max length 100 characters
    //OR that the user input is a number greater than 50 but less than 1000

    //Add to the state of list items
    list_items.push(user_input)

    this.setState({list_items})
  }

  render() {
    //We grab the state of the list (similar to document.getElementById)
    const listItems = this.state.list_items
    
    // We are using the ES6 map function in order to loop through the listItems array and return a collection of LI items
    const userList = listItems.map((value, key) =>
          <li key={key}>{value}</li>
        );

    return (
      <div className="App">

        <ol id='user_list'>
         {/* We display the collection of LI items within the ordered list tags */}
          {userList}
        </ol>

        <form>
          {/* This input field has an onChange function which handles any changes to the input field */}
          <input type='text' value={this.state.user_input} onChange={(e) => this.handleInputChange(e)} />
          {/* This button has an onClick handler to handle appending the user input to the list */}
          <button type='button' onClick={this.handleSubmit}>Submit</button>

        </form>
          
      </div>
    );
  }
}

export default App;
