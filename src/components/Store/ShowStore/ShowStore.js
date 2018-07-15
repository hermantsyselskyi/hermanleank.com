import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    store: state.storeReducer

});

class ShowStore extends Component {
    componentDidMount() {
    console.log(this.props.reduxStore);
    this.props.dispatch({type: 'GET_STORE'});
    }
    // deleteItem = (id) => {
    //     console.log(id);
    //     this.props.dispatch({type: 'DELETE_PIECE', payload: id})
    // }
  
    render() {
        return (
          <div>
            {/* <p>
              Total pieces: {this.props.pieces.piecesReducer.length}
            </p> */}
           <p>Here</p>
            <div> 
            <pre>{JSON.stringify(this.props.state)}</pre>
                  {this.props.store.storeReducer.map( item =>
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

  export default connect(mapStateToProps)( ShowStore );