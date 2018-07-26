import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../css/NoteView.css';

const NoteView = props => {
    console.log('NOTE', props)

    const handleDelete = e => {
        // e.preventDefault()
        props.deleteNote(props.match.params.id)
        props.history.push('/')
    }

    // const handleToggle = e => {
    //     e.preventDefault();
    //     props.toggle(props.match.params.id)
    // }


    return (
        <div>
            <Container>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='viewLinks'>
                            <Link to={ `${props.match.params.id}/edit` }>
                                edit
                                </Link>
                            <a className='noteViewLink' onClick={ props.toggle }>delete</a>
                            { props.modal && (
                                <DeleteModal
                                    toggle={ props.toggle }
                                    delete={ props.delete }
                                    id={ props.location.id }
                                    { ...this.state }
                                />
                            ) }
                        </div>
                        <h4 className='noteTitle'>{ props.location.title }</h4>
                        <p>{ props.location.content }</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default NoteView;