import React, { Component } from 'react';
import PropTypes from 'prop-types';



//Define as a required the name 
const propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.any
};

//Define as a constante a name of the app (in this case)
const defaultProps = {
  name: 'Default name of App'
}

class MyComponent extends Component {
  
  //CycleLife Components
  componentWillMount(){
    console.log('Will Mount');
  }  

  componentDidMount() {
    console.log('Did Mount');
  }

  render() {
    const { title, name, onClick } = this.props;

    return (
      <div className="component">
         <h1> Title: {title} </h1>
         <h2> Name: {name} </h2>

         <div onClick={onClick}> Click Me </div>

      </div>
    );
  }
}
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
