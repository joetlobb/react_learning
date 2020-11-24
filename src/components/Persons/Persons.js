import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
  return <Person
    click={() => props.clicked(index)}
    // click={this.deletePersonHandler.bind(this, index)}
    name={person.name}
    age={person.age}
    key={person.id}
    changed={(event) => props.changed(event, person.id)} />
  // changed={this.nameChangedHandler.bind(null, person.id)} />
});

export default persons;