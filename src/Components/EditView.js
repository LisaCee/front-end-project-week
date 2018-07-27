import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './Sidebar';
import "../css/CreateNote.css";


const EditView = props => {
    console.log('EDIT', props)
    const handleEdit = e => {
        e.preventDefault()
        props.editCurrentNote(props.match.params.id)
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

                          
                                <button className='submit' onClick={ handleEdit }>Update</button>
                            
                        </div>
                    </Col>

                </Row>
            </Container>
        )
}

export default EditView;


