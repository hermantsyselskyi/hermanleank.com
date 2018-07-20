import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const mapReduxStateToProps = state => ({
  user: state.user,
  state,
  projects: state.projectsReducer,
  specPieces: state.piecesReducer.piecesReducer.specPiecesList,
});

class AddPieces extends Component {
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
          this.props.dispatch({type: 'CLOSE_ADD', payload: false});
        } else {
          alert('Somewthing wrong ADD_PIECE');
        }
      }
      
      handleCloseAdd = () => {
        this.props.dispatch({type: 'CLOSE_ADD', payload: false});
      };
    

        
      
          render() {

            return (
              <div>
                  <input id="name" value={ this.state.name } onChange={this.handleChange} placeholder="Name" />
                  <input id="description" value={ this.state.description } onChange={this.handleChange} placeholder="Description" />
                  <input id="image_url" value={ this.state.image_url} onChange={this.handleChange} placeholder="URL"/>
                    <select id="project_id" value={this.state.project_id} onChange={this.handleChange}>
                    <option defaultValue  >Select project</option>
                        {this.props.projects.projectsReducer.map( item =>
                        <option key={item.id} value={item.id}>{item.projectname}</option>)};
                     </select>
                   <button onClick={this.handleClick}>Add Piece</button>
                   <Button onClick={this.handleCloseAdd}>Close</Button>
              </div>

            );
          }
        }
        
      
        
        export default  connect(mapReduxStateToProps)(AddPieces);