import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = state => ({
  store: state.storeReducer
});

class SellPieces extends Component {
    constructor(props){
        super(props);
        this.state = {
            piece_id: '',
            price: '',
            forsale: ''
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
    setPrice = (price,forsale) => {
      console.log(price,forsale);
      this.props.dispatch({type: 'PIECE_SET_DONE', payload: {price: this.state.price , forsale: this.state.forsale}});
    }

    render() {
      return (
        <div>
        
          <form className="forsale" >
            <input id="price" value={ this.state.price } onChange={this.handleChange} 
            placeholder="Price" />
         
              <select id="forsale" value={this.state.forsale} onChange={this.handleChange}>
                  <option value="" selected id="disabled">-- Select --</option>
                  <option  value='FOR SALE'>FOR SALE</option>
                  <option  value='SOLD OUT'>SOLD OUT</option>
                  <option value='NOT AVAIABLE'>NOT AVIABLE</option>

              )};
              
              </select>
              
              <button onClick={ () => this.setPrice(this.state.price,this.state.forsale) }>Sell piece</button>
          </form>
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(SellPieces);