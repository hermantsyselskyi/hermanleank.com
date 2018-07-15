import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = state => ({
  store: state.storeReducer
});

class SellPieces extends Component {
    constructor(props){
        super(props);
        this.state = {
          pieceToSell: {
            piece_id: this.props.store.piece_id,
            price: '',
            forsale: ''
            } 
        }
    }
 
    componentDidMount() {
      console.log(this.props.reduxStore);
      this.props.dispatch({type: 'GET_STORE'});

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
      if(this.state.piece_id !== 0 || this.state.price !== 0 || this.state.forsale!== 0){
        this.props.dispatch({ type: 'SELL_PIECE', payload: this.state.pieceToSell });
        this.setState({...this.state, name: '',  image_url: '',description: '', piece_id:''});
      } else {
        alert('Somewthing wrong ADD_PIECE');
      }
    }

    render() {
      return (
        <div>
        
          <form>
            <input id="price" value={ this.state.name } onChange={this.handleChange} 
            placeholder="Price" />
         
              <select id="forsale" value={this.state.forsale} onChange={this.handleChange}>
              
                  <option  value='FOR SALE'>FOR SALE</option>
                  <option  value='SOLD OUT'>SOLD OUT</option>
                  <option value='NOT AVAIABLE'>NOT AVIABLE</option>

              )};
              
              </select>
              
             <button onClick={this.handleClick}>Sell piece</button>
          </form>
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(SellPieces);