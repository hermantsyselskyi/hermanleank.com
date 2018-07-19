import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }


  render() {
    return (
      <div>
            Contact
            Hello, My name is Herman. The one with funny accent.
          
      </div>
    );
  }
}

export default connect(mapStateToProps)(Contact);
