import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';

import AddPieces from '../AddPieces/AddPieces';
import ShowPieces from '../ShowPieces/ShowPieces';
import SellPieces from '../SellPieces/SellPieces';
import EditPieces from '../EditPieces/EditPieces';
//MaterialUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';



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
  openAdd: state.piecesReducer.piecesReducer.openAdd,
  openSell: state.piecesReducer.piecesReducer.openSell,
  openEdit: state.piecesReducer.piecesReducer.openEdit,
  openDelete:  state.piecesReducer.piecesReducer.openEdit
});

class PiecesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
      this.props.dispatch({type: 'GET_PIECE'});
      console.log('Propsš',this.props.state.piecesReducer.piecesReducer.openAdd);
    }

   
  handleOpenAdd = () => {

    this.props.dispatch({type: 'OPEN_ADD', payload: true });
    this.props.dispatch({type: 'GET_PIECE'});

  };

  handleCloseAdd = () => {
    this.props.dispatch({type: 'CLOSE_ADD', payload: false});
    this.props.dispatch({type: 'GET_PIECE'});
  };

  // handleOpenSell = () => {
  //   this.setState({ openSell: true });
  // };

  // handleCloseSell = () => {
  //   this.setState({ openSell: false });
  // };
 
    

  

    render() {
      let content = null;
     
      if( this.props.state.piecesReducer.piecesReducer.open == true) {
        return content =(
          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.state.piecesReducer.piecesReducer.open}
          onClose={this.handleCloseAdd}
        >
        <AddPieces />
        
  

        </Modal>
        )}
        else{
        }
       

      return (
        <div>
          <Nav />
          <div>
          <Button onClick={this.handleOpenAdd}>Open</Button>
          <Button onClick={this.handleCloseAdd}>Close</Button>
          </div>
        {/* ADD ITEM */}
   
{content}
        
   
{/* <AddPieces />
<SellPieces />
          <EditPieces />
          <ShowPieces /> */}
        </div>
      );
    }
  }
  
  

  
  export default  connect(mapReduxStateToProps)(PiecesPage);