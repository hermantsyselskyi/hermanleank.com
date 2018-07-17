import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = state => ({
  user: state.user,
  state,
  projects: state.projectsReducer,
  specPieces: state.piecesReducer.piecesReducer.specPiecesList
});

class EditPieces extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            image_url:'',
            description:'',
            project_id: '',
            price: '',
            forsale: '',
            isOnStore: false
        }
    }
 
    componentDidMount() {
        console.log('This props are',this.props);
      // this piece is in the store?
      //Input values of specific SQL line
      console.log('Spec pieces',this.specPieces);
      this.setState({...this.state, name: '',  image_url: '',description: '', project_id:''})
    }

    handleChange = (event) => {
      const prop = event.target.id;
      const val = event.target.value;
      this.setState({
        ...this.state, [prop]: val
      });
    }
   handleClickTest = (event) => {
    if (this.props.specPieces["0"].price == ''){
        isOnStore: 0;
        console.log(this.state.isOnStore);
        this.setState({...this.state, name: this.props.specPieces["0"].name,  image_url: this.props.specPieces["0"].image_url ,description: this.props.specPieces["0"].description, project_id: this.props.specPieces["0"].project_id})
    }else {
        isOnStore: 1;
        console.log(this.state.isOnStore)
        this.setState({...this.state, name: this.props.specPieces["0"].name,  image_url: this.props.specPieces["0"].image_url ,description: this.props.specPieces["0"].description, project_id: this.props.specPieces["0"].project_id})
            }
            }
    handleClick = (event) => {
      event.preventDefault();
    
    //   if(this.state.name.length > 0 || this.state.description.length > 0 || this.state.image_url.length > 0){
        this.props.dispatch({ type: 'EDIT_PIECE', payload: this.state });
       
    //   } else {
    //     alert('Somewthing wrong EDIT_PIECE');
    //   }
    }

    render() {
        if(this.state.isOnStore == false) {
            return( 
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
            );
        }else{
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
              
              <button onClick={this.handleClick}>Edit Item</button>
             <button onClick={this.handleClickTest}>test</button>
          </form>
           
        }
        
    
    
  }
  
  
  export default connect(mapReduxStateToProps)(EditPieces);