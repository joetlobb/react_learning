import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // only run once the component is created
  // }, [props.persons]); // only to persons value changes

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
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
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button className={btnClass} 
        onClick={props.clicked} >Toggle Persons
        </button>
    </div>
  );
};

export default Cockpit;