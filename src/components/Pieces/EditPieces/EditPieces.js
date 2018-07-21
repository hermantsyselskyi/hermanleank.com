import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const mapReduxStateToProps = state => ({
    user: state.user,
    state,
    projects: state.projectsReducer,
    specialPiece: state.piecesReducer.piecesReducer.specialPiece
});

class EditPieces extends Component {
    // constructor(props){
    //     super(props);
    // this.state = {
    //     name:'',
    //     image_url:'',
    //     description:'',
    //     project_id: '',
    //     price: '',
    //     forsale: '',
    //     isOnStore: ''
    // }
    // }

    componentDidMount() {
        console.log('This props are', this.props);
        // this piece is in the store?
        //Input values of specific SQL line
        console.log('Spec pieces', this.specialPiece);
    }

    handleChange = (event) => {
        const prop = event.target.id;
        const val = event.target.value;
        this.props.dispatch({
            type: 'STORE_SPECIAL_PIECE', payload: {
                ...this.props.specialPiece, [prop]: val
            }
        });
    }
    //    handleClickTest = (event) => {
    //        event.preventDefault();
    //        this.setState({...this.state, name: this.props.specPieces["0"].name,  image_url: this.props.specPieces["0"].image_url ,description: this.props.specPieces["0"].description, project_id: this.props.specPieces["0"].project_id, price: this.props.specPieces["0"].price, forsale:this.props.specPieces["0"].forsale})
    //     }


    handleClick = (event) => {
        event.preventDefault();
        if (this.props.specialPiece && this.props.specialPiece.price) {
            console.log('I did not te up this path yet');
            this.props.dispatch({ type: 'EDIT_STORE', payload: this.props.state.piecesReducer.piecesReducer.specialPiece });
            this.props.dispatch({ type: 'EDIT_PIECE', payload: this.props.state.piecesReducer.piecesReducer.specialPiece });
            this.props.dispatch({ type: 'CLOSE_EDIT', payload: false });
        } else {
            this.props.dispatch({ type: 'EDIT_PIECE', payload: this.props.state.piecesReducer.piecesReducer.specialPiece });
            this.props.dispatch({ type: 'CLOSE_EDIT', payload: false });
        }

    }
    handleCloseEdit = () => {
        this.props.dispatch({ type: 'CLOSE_EDIT', payload: false });
    };

    render() {
        console.log(this.props.specialPiece)
        if (!this.props.specialPiece) {
            return <div>Select Piece</div>
        }

        // If we get here should have a piece selected 
        let content = null;
        if (this.props.specialPiece && this.props.specialPiece.price) {
            content = (<div><input id="price" value={this.props.specialPiece.price} onChange={this.handleChange}
                placeholder="Price" />

                <select id="forsale" value={this.props.specialPiece.forsale} onChange={this.handleChange}>

                    <option value='FOR SALE'>FOR SALE</option>
                    <option value='SOLD OUT'>SOLD OUT</option>
                    <option value='NOT AVAIABLE'>NOT AVAILABLE</option>

                    )};

                    </select>


            </div>
            );
        }
        return (
            <div>
                {/* <input id="name" value={ this.state.name } onChange={this.handleChange} 
                    placeholder="Name" /> */}
                <input id="name" value={this.props.specialPiece.name} onChange={this.handleChange}
                    placeholder="Name" />
                <input id="description" value={this.props.specialPiece.description} onChange={this.handleChange}
                    placeholder="Description" />
                <input id="image_url" value={this.props.specialPiece.image_url} onChange={this.handleChange}
                    placeholder="URL" />
                <select id="project_id" value={this.props.specialPiece.project_id} onChange={this.handleChange}>
                    <option defaultValue selected="selected" >Select project</option>
                    {this.props.state.projectsReducer.projectsReducer.map(item =>
                        <option key={item.id} value={item.id}>{item.projectname}</option>
                    )};
                    </select>
                {content}
                <Button onClick={this.handleClick}>Edit Piece</Button>
                <Button onClick={this.handleCloseEdit}>Close</Button>
                {/* <button onClick={this.handleClickTest}>test</button> */}
            </div>
        );
    }




}


export default connect(mapReduxStateToProps)(EditPieces);