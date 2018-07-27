import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../css/NoteView.css';

const NoteView = props => {
    const handleDelete = e => {
        props.deleteNote(props.match.params.id)
        props.history.push('/')
        props.toggle();
    }

    return (
        <div>
        
            <Container>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='viewLinks'>
                            <Link to={ { pathname: `/${props.match.params.id}/edit`, id: props.match.params.id }  }>
                                edit
                                </Link>
                            <a className='noteViewLink' onClick={ props.toggle }>delete</a>
                            { props.modal && (
                                <DeleteModal
                                    modal={ props.modal }
                                    toggle={ props.toggle }
                                    delete={ handleDelete }
                                    id={ props.match.params.id }
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