import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import "./piecesstyle.css";

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
        this.props.dispatch({type: 'DELETE_STORE', payload: id});
        this.props.dispatch({type: 'DELETE_PIECE', payload: id});
    }
    setId = (id) => {
      console.log(id);
      
      this.props.dispatch({type: 'PIECE_SET_ID', payload: id});
      this.props.dispatch({type: 'OPEN_SELL', payload: true });
      
    }
    editId = (id) => {
      console.log('In edit',id);
      this.props.dispatch({type: 'PIECE_SET_ID', payload: id});
      this.props.dispatch({type: 'GET_SPECIAL_PIECE', payload: id});
      this.props.dispatch({type: 'OPEN_EDIT', payload: true});
      
    }

  

    render() {
      let content = null;

        return (
          <div>
            <p>
              Total pieces: {this.props.pieces.length}
            </p>
            
           
            <div> 
            <pre>{JSON.stringify(this.props.specPieces)}</pre>
                  {this.props.pieces.map( item =>
                    <div key={item.id} className="grid" >
                     <figure className="effect-goliath">
                     <img key={item.id} src={item.image_url} width="300" alt="unavailable"/>
                     <figcaption>
                        <h2>{item.name}</h2>
                        <p>{item.description}
                        
                        <Button onClick={ () => this.deleteItem(item.id) }>Delete</Button>
                        <Button onClick={ () => this.setId(item.id) }>Sell</Button>
                        <Button onClick={ () => this.editId(item.id) }>Edit</Button></p>
                        
                       
                        </figcaption>			
                        </figure>
                    </div>
                  )}
            </div>
          </div>
        
    );

    }
}

  export default connect(mapStateToProps)( ShowPieces );