import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = state => ({
  user: state.user,
  state,
  projects: state.projectsReducer,
  store: state.storeReducer
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
            forsale: ''
        }
    }
 
    componentDidMount() {
      //console.log('Is this id of pieces is in store?' ,this.props.piecesReducer.piecesReducer.pieces_id)
      console.log(this.props.reduxStore);
      this.props.dispatch({type: 'GET_PROJECT'});
      this.props.dispatch({type: 'GET_STORE'});
      //Input values of specific SQL line
      this.setState({...this.state, name: '',  image_url: '',description: '', project_id:''})
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
     
    //   if(this.state.name.length > 0 || this.state.description.length > 0 || this.state.image_url.length > 0){
        this.props.dispatch({ type: 'EDIT_PIECE', payload: this.state });
        this.setState({...this.state, name: '',  image_url: '',description: '', project_id:''})
    //   } else {
    //     alert('Somewthing wrong EDIT_PIECE');
    //   }
    }

    render() {
        
    //if object exist in store page show Price part

      return (
        <div>
        
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



            
               <input id="price" value={ this.state.price } onChange={this.handleChange} 
            placeholder="Price" />
         
              <select id="forsale" value={this.state.forsale} onChange={this.handleChange}>
                  <option value="" defaultValue id="disabled">-- Select --</option>
                  <option  value='FOR SALE'>FOR SALE</option>
                  <option  value='SOLD OUT'>SOLD OUT</option>
                  <option value='NOT AVAIABLE'>NOT AVIABLE</option>

              )};
              
              </select>




              
             <button onClick={this.handleClick}>Edit Item</button>
            
          </form>
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(EditPieces);