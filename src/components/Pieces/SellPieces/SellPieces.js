import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const mapReduxStateToProps = state => ({
 pieces_id: state.piecesReducer.piecesReducer.pieces_id
});

class SellPieces extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: '',
            forsale: ''
        }
    }
 
    componentDidMount() {
      this.props.dispatch({type: 'GET_STORE'});
    }

    handleChange = (event) => {
      const prop = event.target.id;
      const val = event.target.value;
      this.setState({
        ...this.state, [prop]: val
      });
    }
    setPrice = () => {
      console.log(this.state);
      //this.props.dispatch({type: 'PIECE_SET_DONE', payload: {price: this.state.price , forsale: this.state.forsale}});
      console.log
      this.props.dispatch({ type: 'ADD_STORE', payload: {...this.state, pieces_id: this.props.pieces_id }});
      this.props.dispatch({type: 'CLOSE_SELL', payload: false});
    }

    handleCloseSell = () => {
      this.props.dispatch({type: 'CLOSE_SELL', payload: false});
    };
  

    render() {
      return (
        <div>
        
          <form className="forsale" >
            <input id="price" value={ this.state.price } onChange={this.handleChange} 
            placeholder="Price" />
         
              <select id="forsale" value={this.state.forsale} onChange={this.handleChange}>
          
                  <option  value='FOR SALE'>FOR SALE</option>
                  <option  value='SOLD OUT'>SOLD OUT</option>
                  <option value='NOT AVAIABLE'>NOT AVAILABLE</option>

              )};
              
              </select>
              
              <Button onClick={ () => this.setPrice() }>Sell piece</Button>
              <Button onClick={this.handleCloseSell}>Close</Button>
          </form>
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(SellPieces);