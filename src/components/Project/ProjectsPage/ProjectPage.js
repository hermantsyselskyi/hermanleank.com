import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowProjects from '../ShowProjects/ShowProjects';

const mapReduxStateToProps = state => ({
  user: state.user,
  state
});

class ProjectPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            year:'',
            projectname:'',
            bg_url:'',
            description:''
        }
    }
   

    handleChange = (event) => {
      const prop = event.target.id;
      const val = event.target.value;
      this.setState({
        ...this.state, [prop]: val
      });
    }
  
    handleClick = (event) => {
      event.preventDefault();
      if(this.state.projectname.length > 0 || this.state.description.length > 0 || this.state.bg_url.length > 0 || this.state.year.length > 0){
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state });
        this.setState({...this.state, year:'', projectname:'', bg_url: '', description: ''})
      } else {
        alert('Somewthing wrong ADD_PROJECT');
      }
    }

    render() {
      return (
        <div>
          <Nav />
          <form>
            <input id="year" value={this.state.year} onChange={this.handleChange} 
            placeholder="Year" />
            <input id="projectname" value={ this.state.projectname } onChange={this.handleChange} 
            placeholder="Name" />
            <input id="description" value={ this.state.description } onChange={this.handleChange} 
              placeholder="Description" />
            <input id="bg_url" value={ this.state.bg_url} onChange={this.handleChange} 
            placeholder="Background"/>
             <button onClick={this.handleClick}>Add Item</button>
          </form>
          <ShowProjects />
        </div>
      );
    }
  }
  
 
  export default connect(mapReduxStateToProps)(ProjectPage);