import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


//MaterialUI cardsimport React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const mapStateToProps = state => ({
  pieces: state.piecesReducer.piecesReducer.piecesList,
  specPieces: state.piecesReducer.piecesReducer.specpiecesList
});

class ShowPieces extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          
      }
  }
  componentDidMount() {
    console.log(this.props.reduxStore);
    this.props.dispatch({ type: 'GET_PIECE' });
    this.props.dispatch({ type: 'GET_PROJECT' });
  }
  
  deleteItem = (id) => {
    console.log(id);
    this.props.dispatch({ type: 'DELETE_STORE', payload: id });
    this.props.dispatch({ type: 'DELETE_PIECE', payload: id });
  }
  setId = (id) => {
    console.log(id);

    this.props.dispatch({ type: 'PIECE_SET_ID', payload: id });
    this.props.dispatch({ type: 'OPEN_SELL', payload: true });

  }
  editId = (id) => {
    console.log('In edit', id);
    this.props.dispatch({ type: 'PIECE_SET_ID', payload: id });
    this.props.dispatch({ type: 'GET_SPECIAL_PIECE', payload: id });
    this.props.dispatch({ type: 'OPEN_EDIT', payload: true });

  }
  render() {
    let content = null;
    const { classes } = this.props;
   
  

    return (
    <div>
       <pre>{JSON.stringify(this.props.specPieces)}</pre>
          {this.props.pieces.map(item =>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={item.image_url}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          {item.name}
          </Typography>
          <Typography component="p">
          {item.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button onClick={() => this.deleteItem(item.id)}>Delete</Button>
        <Button onClick={() => this.setId(item.id)}>Sell</Button>
        <Button onClick={() => this.editId(item.id)}>Edit</Button>

        </CardActions>
      </Card>)};
    </div>
  );
}}

ShowPieces.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleMediaCardWrapped = withStyles(styles)(ShowPieces);


export default connect(mapStateToProps)(SimpleMediaCardWrapped);

