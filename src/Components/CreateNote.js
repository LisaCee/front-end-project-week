import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import Sidebar from './Sidebar';
import { addNote, deleteNote } from '../Actions/index';
import "../css/CreateNote.css";

const CreateNote = props => {
console.log('PROPS', props)
const submit = e => {
    e.preventDefault();
    props.createNewNote();
    props.history.push('/')
}
    return (
        <Container className='container'>
            <Row>
                <Col xs='3'>
                    <Sidebar />
                </Col>
                <Col xs='9'>
                    <div className='newNote'>
                        <h4 className='createNoteHeading'>Create a Note</h4>

                        <input type='text'
                            name='title'
                            placeholder='Note Title (required)'
                            value={ props.title }
                            onChange={ this.updateInput }
                        />

                        <textarea name='content'
                            rows='15'
                            cols='90'
                            placeholder='Note Content (required)'
                            value={ props.content }
                            onChange={ this.updateInput }
                        />

                        <Link to={ '/' }>
                            <button className='submit' onClick={ submit }>Save</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


const mapStateToProps = (state) => {
    return {
        notes: state
    };
}
export default connect(mapStateToProps, { addNote, deleteNote })(CreateNote);

