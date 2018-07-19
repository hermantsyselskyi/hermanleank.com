import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
import ShowPieces from '../ShowPieces/ShowPieces';
import SellPieces from '../SellPieces/SellPieces';
import EditPieces from '../EditPieces/EditPieces';
//MaterialUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});
const mapReduxStateToProps = state => ({
  user: state.user,
  state,
  projects: state.projectsReducer,
  specPieces: state.piecesReducer.piecesReducer.specPiecesList
});

class PiecesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            openAdd: false,
            openSell: false,
            name:'',
            image_url:'',
            description:'',
            project_id: ''
        }
    }

  handleOpenAdd = () => {
    this.setState({ openAdd: true });
  };

  handleCloseAdd = () => {
    this.setState({ openAdd: false });
  };

  handleOpenSell = () => {
    this.setState({ openSell: true });
  };

  handleCloseSell = () => {
    this.setState({ openSell: false });
  };
 
    componentDidMount() {
      console.log(this.props.reduxStore);
      this.props.dispatch({type: 'GET_PROJECT'});

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
      if(this.state.name.length > 0 || this.state.description.length > 0 || this.state.image_url.length > 0){
        this.props.dispatch({ type: 'ADD_PIECE', payload: this.state });
        this.setState({...this.state, name: '',  image_url: '',description: '', project_id:''})
      } else {
        alert('Somewthing wrong ADD_PIECE');
      }
    }

    render() {
      const { classes } = this.props;

      return (
        <div>
          <Nav />

        <Button onClick={this.handleOpenAdd}>Add item</Button>

        {/* ADD ITEM */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openAdd}
          onClose={this.handleCloseAdd}
        >
        <form>
            <input id="name" value={ this.state.name } onChange={this.handleChange} placeholder="Name" />
            <input id="description" value={ this.state.description } onChange={this.handleChange} placeholder="Description" />
            <input id="image_url" value={ this.state.image_url} onChange={this.handleChange} placeholder="URL"/>
              <select id="project_id" value={this.state.project_id} onChange={this.handleChange}>
                  {this.props.projects.projectsReducer.map( item =>
                  <option key={item.id} value={item.id}>{item.projectname}</option>)};
               </select>
             <button onClick={this.handleClick}>Add Item</button>
        </form>
        </Modal>

        {/* SELL */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openSell}
          onClose={this.handleCloseSell}
        >
        <form>
           <SellPieces />
        </form>
        </Modal>


          <EditPieces />
          <ShowPieces />
        </div>
      );
    }
  }
  

  
  export default  connect(mapReduxStateToProps)(PiecesPage);