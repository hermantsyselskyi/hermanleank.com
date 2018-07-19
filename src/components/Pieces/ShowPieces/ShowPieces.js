import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pieces: state.piecesReducer.piecesReducer.piecesList,
    specPieces: state.piecesReducer.piecesReducer.specpiecesList
});

class ShowPieces extends Component {
    componentDidMount() {
    console.log(this.props.reduxStore);
    this.props.dispatch({type: 'GET_PIECE'});
    }
    deleteItem = (id) => {
        console.log(id);
        this.props.dispatch({type: 'DELETE_PIECE', payload: id});
    }
    setId = (id) => {
      console.log(id);
      this.props.dispatch({type: 'PIECE_SET_ID', payload: id});
      
    }
    editId = (id) => {
      console.log('In edit',id);
      this.props.dispatch({type: 'PIECE_SET_ID', payload: id});
      this.props.dispatch({type: 'GET_SPECIAL_PIECE', payload: id});
      
    }
    render() {
      let content = null;
        // if( this.props.specialPiece && this.props.specialPiece.price ) {
        //         content =( className='Green' );
        //     }
        return (
          <div>
            <p>
              Total pieces: {this.props.pieces.length}
            </p>
           
            <div> 
            <pre>{JSON.stringify(this.props.specPieces)}</pre>
                  {this.props.pieces.map( item =>
                    <div key={item.id} 
                    //{content} 
                    >
                        <h3>{item.name}</h3>
                        <h3>{item.description}</h3>
                        <h3>{item.project_id}</h3>
                        <button onClick={ () => this.deleteItem(item.id) }>Delete</button>
                        <button onClick={ () => this.setId(item.id) }>Sell</button>
                        <button onClick={ () => this.editId(item.id) }>Edit</button>
                        <img key={item.id} src={item.image_url} width="300" alt="unavailable"/>
                    </div>
                  )}
            </div>
          </div>
        
    );

    }
}

  export default connect(mapStateToProps)( ShowPieces );