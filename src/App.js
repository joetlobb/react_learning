import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
// import logo from './logo.svg';

import './App.css';

import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.myAlt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.myAlt ? 'salmon' : 'lightgreen'};
    color: black;
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Joy', age: 30 }
    ],
    otherState: 'some value',
    showPersons: false
  }

  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // or use
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              // Can switch between these two, but bind is preferable
              // click={() => this.deletePersonHandler(index)}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              // changed={(event) => this.nameChangedHandler(event, person.id)} />
              changed={this.nameChangedHandler.bind(null, person.id)} />
          })}
        </div>
      )

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    };

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classess = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classess = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className="App" >
        <h1>Hello World!</h1>
        <p className={classes.join(' ')}>This is working!</p>
        <StyledButton myAlt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >Toggle Persons
        </StyledButton>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Person from './Person/Person';

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Joy', age: 30 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // Don't do this
//     // this.state.persons[0].name = 'NewMax';
//     setPersonsState({
//       persons: [
//         { name: 'NewMax', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Joy', age: 30 }
//       ],
//       otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <p>This is working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobby is gaming!</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
//     </div>
//   );

// }

// export default App;