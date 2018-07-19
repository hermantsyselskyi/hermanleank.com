import React, { Component } from 'react';
import { connect } from 'react-redux';
export { default as AutoRotatingCarousel } from '../../../AutoRotatingCarousel';
export { default as Slide } from '../../../Slide';
const mapStateToProps = state => ({
    store: state.storeReducer.storeReducer.storeList

});

class Store extends Component {
    componentDidMount() {
    console.log(this.props.reduxStore);
    this.props.dispatch({type: 'GET_STORE'});
    }
    // deleteItem = (id) => {
    //     console.log(id);
    //     this.props.dispatch({type: 'DELETE_PIECE', payload: id})
    // }
  
    render() {
        return (
          <div>
           
           <p>Store</p>
            <div> 
            
                  {this.props.store.map( item =>
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <h1>{item.price}</h1>
                        <h3>{item.description}</h3>
                        <h3>{item.projectname}</h3>
                        <button onClick={ () => this.deleteItem(item.id) }>Buy!</button>
                        <img key={item.id} src={item.image_url} width="300" alt="unavailable"/>
                    </div>
                  )}
            </div>
          </div>
        
    );

    }
}

  export default connect(mapStateToProps)( Store );
