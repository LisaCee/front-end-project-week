import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './Sidebar';
import { addNote, deleteNote, editNote } from '../Actions/index';
import "../css/CreateNote.css";

const EditView = props => {
    console.log('EDIT', props)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         type: 'Edit Note:', //Edit Note:
    //         id: this.props.match.params.id,
    //         button: 'Update', //Update
    //     }
    // }

    // updateInput = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    // editCurrentNote = () => {
    //     const updatedNote = {
    //         title: this.state.title,
    //         content: this.state.content,
    //         id: parseInt(this.props.match.params.id, 10),
    //     };

    //   axios
    //       .put(`https://lambda-notes-back-end.herokuapp.com/api/notes/${this.props.match.params.id}/`, updatedNote)
    //         .then(res => {
    //             const note = res.data;
    //             this.setState({ note });
    //             console.log(res.data)
    //         });
    // };

    // render() {
        return (
            <Container className='container'>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='newNote'>
                            <h4 className='createNoteHeading'>Edit Note</h4>

                            <input
                                type='text'
                                name='title'
                                placeholder='Note Title'
                                value={ props.title }
                                onChange={ props.updateInput }
                            />

                            <textarea
                                name='content'
                                rows='15'
                                cols='90'
                                placeholder='Note Content'
                                value={ props.content }
                                onChange={ props.updateInput }
                            />

                            <Link to={ '/' }>
                                <button className='submit' onClick={ props.editCurrentNote }>Update</button>
                            </Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        )
    // }
}

// const mapStateToProps = (state) => {
//     return {
//         notes: state
//     };
// }
// export default connect(mapStateToProps, { addNote, deleteNote, editNote })(EditView);

export default EditView;


