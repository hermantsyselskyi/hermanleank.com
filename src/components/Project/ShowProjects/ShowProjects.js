import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    projects: state.projectsReducer
});

class ShowProjects extends Component {
    componentDidMount() {
      console.log(this.props.reduxStore);
      this.props.dispatch({type: 'GET_PROJECT'});

    }
    deleteItem = (id) => {
      console.log(id);
      this.props.dispatch({type: 'DELETE_PROJECT', payload: id})
  }
  

  
    render() {
        return (
          <div>
            <p>
              Total projects: {this.props.projects.projectsReducer.length}
            </p>
            
            <div> 
              
                  {this.props.projects.projectsReducer.map( item =>
                    <div key={item.id}>
                         <h3>{item.year}</h3>
                        <h3>{item.projectname}</h3>
                        <h3>{item.description}</h3>
                        <button onClick={ () => this.deleteItem(item.id) }>Delete</button>
                        <img src={item.image_url} width="300" alt="unavailable"/>
                    </div>
                  )}
            </div>
          </div>
    );

    }
}

  export default connect(mapStateToProps)( ShowProjects );
    // componentDidUpdate() {
  //     if (!this.props.user.isLoading && this.props.user.userName === null) {
  //       this.props.history.push('home');
  //     }
  //   }

