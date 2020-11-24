import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  };

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // assignedClassess = ['red']
  };
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClassess = ['red', 'bold']
  };

  return (
    <div className={classes.Cockpit}>
      <h1>Hello World!</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button className={btnClass} myAlt={props.showPersons}
        onClick={props.clicked} >Toggle Persons
        </button>
    </div>
  );
};

export default cockpit;