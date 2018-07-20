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
  };

  handleCloseAdd = () => {
    this.props.dispatch({type: 'CLOSE_ADD', payload: false});
  };



  

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
        else if( this.props.state.storeReducer.storeReducer.open == true) {
          return content =(
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.state.storeReducer.storeReducer.open}
          >
          <SellPieces />
          </Modal>
          )}
          
          else if( this.props.state.editReducer.editReducer.open == true) {
            return content =(
              <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.props.state.editReducer.editReducer.open}
            >
            <EditPieces />
            </Modal>
            )}

      return (
        <div>
          <Nav />
          <div>
          <Button onClick={this.handleOpenAdd}>Add pieces  +</Button>
          </div>
        
{content}
       
          <ShowPieces /> 
        </div>
      );
    }
  }
  
  

  
  export default  connect(mapReduxStateToProps)(PiecesPage);