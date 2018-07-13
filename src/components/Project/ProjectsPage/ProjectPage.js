import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowProjects from '../ShowProjects/ShowProjects';

class ProjectPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            year:'',
            name:'',
            bg_url:'',
            description:'',
      
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
      if(this.state.name.length > 0 || this.state.description.length > 0 || this.state.bg_url.length > 0){
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state });
        this.setState({...this.state, year:'',name: '', bg_url: '', description: '',})
      } else {
        alert('Somewthing wrong AddItemPage');
      }
    }

    render() {
      return (
        <div>
          <Nav />
          <form>
            <input id="year" value={this.state.year} onChange={this.handleChange} 
            placeholder="Year" />
            <input id="name" value={ this.state.name } onChange={this.handleChange} 
            placeholder="Name" />
            <input id="description" value={ this.state.description } onChange={this.handleChange} 
              placeholder="Description" />
            <input id="bg_url" value={ this.state.image_url} onChange={this.handleChange} 
            placeholder="Background"/>
             <button onClick={this.handleClick}>Add Item</button>
          </form>
          <ShowProjects />
        </div>
      );
    }
  }
  
  const mapReduxStateToProps = state => ({
      user: state.user
  });
  
  export default connect(mapReduxStateToProps)(ProjectPage);