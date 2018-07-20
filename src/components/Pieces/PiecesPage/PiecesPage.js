import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';

import AddPieces from '../AddPieces/AddPieces';
import ShowPieces from '../ShowPieces/ShowPieces';
import SellPieces from '../SellPieces/SellPieces';
import EditPieces from '../EditPieces/EditPieces';
//MaterialUI
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import "./piecesstyle.css";




  
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
 
});

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class PiecesPage extends React.Component {
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
    this.props.dispatch({type: 'CLOSE_EDIT', payload: false});
    this.props.dispatch({type: 'CLOSE_SELL', payload: false});
    
  };



    render() {
      let content = null;
      const { classes } = this.props;
     
    

      return (
        <div>
          <Nav />
            <div>
               <Button onClick={this.handleOpenAdd}>Add pieces  +</Button>
            </div>

      
          
          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.state.piecesReducer.piecesReducer.open}
          onClose={this.handleCloseAdd}
        >
        <div style={getModalStyle()} className={classes.paper}>
        <Typography variant="title" id="modal-title">
              Add piece
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              To add piece, input information and press Add Piece
            </Typography>
        <AddPieces />
        </div>
        </Modal>
        
       
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.state.storeReducer.storeReducer.open}
            onClose={this.handleCloseAdd}
          >
           <div style={getModalStyle()} className={classes.paper}>
        <Typography variant="title" id="modal-title">
              Sell piece
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              To sell piece, input information and press Sell Piece
            </Typography>
            <SellPieces />
        </div>
          </Modal>
          
          
              <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.props.state.editReducer.editReducer.open}
              onClose={this.handleCloseAdd}
            >

             <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="title" id="modal-title">
                  Edit piece
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  To edit piece,edit information and press Edit Piece
                </Typography>
                <EditPieces />
        </div>


           
            </Modal>
            
          <ShowPieces /> 
        </div>
      );
    }
  }
  
  PiecesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(PiecesPage);

  
export default  connect(mapReduxStateToProps)(SimpleModalWrapped);
