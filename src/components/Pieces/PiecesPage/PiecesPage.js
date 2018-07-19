import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowPieces from '../ShowPieces/ShowPieces';
import SellPieces from '../SellPieces/SellPieces';
import EditPieces from '../EditPieces/EditPieces';

const mapReduxStateToProps = state => ({
  user: state.user,
  state,
  projects: state.projectsReducer,
  specPieces: state.piecesReducer.piecesReducer.specPiecesList
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
 
    componentDidMount() {
      console.log(this.props.reduxStore);
      this.props.dispatch({type: 'GET_PROJECT'});

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
              <select id="project_id" value={this.state.project_id} onChange={this.handleChange}>
              {this.props.projects.projectsReducer.map( item =>
                  <option key={item.id} value={item.id}>{item.projectname}</option>

              )};
              
              </select>
              
             <button onClick={this.handleClick}>Add Item</button>
            
          </form>
          <SellPieces />
          <EditPieces />
          <ShowPieces />
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(PiecesPage);