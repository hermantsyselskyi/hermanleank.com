import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowPieces from '../ShowPieces/ShowPieces';

const mapReduxStateToProps = state => ({
  user: state.user,
  state
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
        alert('Somewthing wrong ADD_PIECE');
      }
    }

    render() {
      return (
        <div>
          <Nav />
          <pre>{JSON.stringify(this.props.state.projectReducer)}</pre>
          <form>
            <input id="name" value={ this.state.name } onChange={this.handleChange} 
            placeholder="Name" />
            <input id="description" value={ this.state.description } onChange={this.handleChange} 
              placeholder="Description" />
            <input id="image_url" value={ this.state.image_url} onChange={this.handleChange} 
            placeholder="URL"/>
             <input id="project_id" value={ this.state.project_id} onChange={this.handleChange} 
            placeholder="Project"/>
              {/* <select id="project_id" value={this.state.project_id} onChange={this.handleChange}>
              {this.props.state.pieces.piecesReducer.map( item =>
                  <option value={item.id}>{item.name}</option>

              )};
              
              </select> */}
              
             <button onClick={this.handleClick}>Add Item</button>
             
          </form>
          <ShowPieces />
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(PiecesPage);