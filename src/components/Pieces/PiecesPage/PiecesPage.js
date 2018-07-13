import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowPieces from '../ShowPieces/ShowPieces';

const mapStateToProps = state => ({
  projects: state.projectsReducer
});

class PiecesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            image_url:'',
            description:'',
            project_id: ''
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
      if(this.state.name.length > 0 || this.state.description.length > 0 || this.state.image_url.length > 0){
        this.props.dispatch({ type: 'ADD_PIECE', payload: this.state });
        this.setState({...this.state, name: '',  image_url: '',description: '', project_id:''})
      } else {
        alert('Somewthing wrong AddItemPage');
      }
    }

    render() {
      return (
        <div>
          <Nav />
          <form>
            <input id="name" value={ this.state.name } onChange={this.handleChange} 
            placeholder="Name" />
            <input id="description" value={ this.state.description } onChange={this.handleChange} 
              placeholder="Description" />
            <input id="image_url" value={ this.state.image_url} onChange={this.handleChange} 
            placeholder="URL"/>
              <select value={this.state.project_id} onChange={this.handleChange}>
             
                  <option value='Project1'>Project 1</option>
                  <option value='Project2'>Project 2</option>
              </select>
             <button onClick={this.handleClick}>Add Item</button>
          </form>
          <ShowPieces />
        </div>
      );
    }
  }
  
  const mapReduxStateToProps = state => ({
      user: state.user
  });
  
  export default connect(mapReduxStateToProps,mapStateToProps)(PiecesPage);