import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pieces: state.piecesReducer

});

class ShowPieces extends Component {
    componentDidMount() {
    console.log(this.props.reduxStore);
    this.props.dispatch({type: 'GET_PIECE'});
    }
    deleteItem = (id) => {
        console.log(id);
        this.props.dispatch({type: 'DELETE_PIECE', payload: id})
    }
    sellItem = (id) => {
      console.log(id);
      this.props.dispatch({type: 'SET_SELL', payload: id})
    }
  
    render() {
        return (
          <div>
            <p>
              Total pieces: {this.props.pieces.piecesReducer.length}
            </p>
           
            <div> 
            <pre>{JSON.stringify(this.props.state)}</pre>
                  {this.props.pieces.piecesReducer.map( item =>
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <h3>{item.description}</h3>
                        <h3>{item.project_id}</h3>
                        <button onClick={ () => this.deleteItem(item.id) }>Delete</button>
                        <button onClick={ () => this.sellItem(item.id) }>Sell</button>
                        <img key={item.id} src={item.image_url} width="300" alt="unavailable"/>
                    </div>
                  )}
            </div>
          </div>
        
    );

    }
}

  export default connect(mapStateToProps)( ShowPieces );