import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowStore from '../ShowStore/ShowStore';

const mapStateToProps = state => ({
  user: state.user,
  state,
  store: state.storeReducer
});

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces_id: '',
      price: '',
      forsale: ''
    }
  }



  render() {
         
  

    return (
      <div>
        <Nav />
        <ShowStore />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StorePage);
