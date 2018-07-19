import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class Menu extends Component {
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
           Menu
            <Link to="/timeline">
            Timeline
          </Link>
            <Link to="/store">
            Store
          </Link>
          <Link to="/Contact">
            Contact
          </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Menu);
