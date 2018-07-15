import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import ShowStore from '../ShowStore/ShowStore';

const mapStateToProps = state => ({
  user: state.user,
  state,
  store: state.storeReducer
});

class StorePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      pieces_id:'',
      price:'',
      forsale:''
    }
  }




  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.props.dispatch({type: 'GET_PROJECT'});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <pre>{JSON.stringify(this.props.state.storeReducer)}</pre>
          
          <ShowStore />
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StorePage);
