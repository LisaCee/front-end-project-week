import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './Sidebar';
// import { addNote, deleteNote } from '../Actions/index';
import "../css/CreateNote.css";


const CreateNote = props => {
    // console.log('CREATE', props)
    // const submit = event => {
    //     event.preventDefault()
    //     props.createNewNote()
    //     props.history.push('/')
    // }
   
        return (
            <Container className='container'>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='newNote'>
                            <h4 className='createNoteHeading'>Create New Note</h4>

                            <input type='text'
                                name='title'
                                placeholder='Note Title (required)'
                                value={ props.title }
                                onChange={ props.updateInput }
                            />

                            <textarea name='content'
                                rows='15'
                                cols='90'
                                placeholder='Note Content (required)'
                                value={ props.content }
                                onChange={ props.updateInput }
                            />

                            <Link to={ '/' }>
                                <button className='submit' onClick={props.createNewNote}>Save</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
    
// }

export default CreateNote;

