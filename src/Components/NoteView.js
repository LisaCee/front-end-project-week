import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../css/NoteView.css';

const NoteView = props => {
    console.log('NOTE', props)
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='3'>
                            <Sidebar />
                        </Col>
                        <Col xs='9'>
                            <div className='viewLinks'>
                                <Link to={ `/${props.location.id}/edit` }>
                                    edit
                                </Link>
                                <a className='noteViewLink' onClick={ this.toggle }>delete</a>
                                { this.state.modal && (
                                    <DeleteModal
                                        toggle={ this.toggle }
                                        delete={ this.props.deleteNote }
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