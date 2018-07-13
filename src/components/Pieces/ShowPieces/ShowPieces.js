import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pieces: state.piecesReducer
});

class ShowPieces extends Component {

    componentDidMount() {
      console.log(this.props.reduxStore);
    
    }
  


    deleteItem = (id) => {
        console.log(id);
        this.props.dispatch({type: 'DELETE_ITEM', payload: id})
    }
  
    render() {
        return (
          <div>
            <p>
              Items on ShowPieces:
             
            </p>
           
            <div> 
                  {this.props.pieces.piecesReducer.map( item =>
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <h3>{item.description}</h3>
                        <button onClick={ () => this.deleteItem(item.id) }>Delete</button>
                        <img src={item.image_url} width="300" alt="unavailable"/>
                    </div>
                  )}
            </div>
          </div>
        
    );

    }
}

  export default connect(mapStateToProps)( ShowPieces );