import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./storestyle.css"
import Slider from "react-slick";
import Button from '@material-ui/core/Button';


class Store extends React.Component {
    
    componentDidMount() {
        console.log(this.props.reduxStore);
        this.props.dispatch({type: 'GET_STORE'});
        <Slider />
        }

  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      
      dots: true,
      speed: 1000,
    

    };
    return (
        
        
        <center className="main">
            <div className="panel"> 
                
                <Slider {...settings}>
                            {this.props.store.map( item =>
                                <center className='slidercard' key={item.id}>
                                    <h3>{item.name}</h3>
                                    <h1>{item.price}</h1>
                                    <h3>{item.description}</h3>
                                    <h3>{item.projectname}</h3>
                                    <img key={item.id} src={item.image_url} width="300" alt="unavailable"/>
                                    <Button   variant="outlined" className="greenbtn"  onClick={ () => this.deleteItem(item.id) }>Buy!</Button>
                                </center>
                            )}
                </Slider>
            </div>
        </center>
     
      
    );
  }
}
const mapStateToProps = state => ({
    store: state.storeReducer.storeReducer.storeList

});



  export default connect(mapStateToProps)( Store );
