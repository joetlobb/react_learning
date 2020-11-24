import React, { Component } from 'react';
import classes from './App.module.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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

  nameChangedHandler = (event, id) => {
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
    // or const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    };

    return (
      <div className={classes.App} >
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;






// ----- following is function-based 

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