import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../css/NoteView.css';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            note: []
        }
        console.log('NOTE', props)
        console.log('STATE', this.state)
    }
    
    componentDidMount() {
        axios
            .get(`https://lambda-notes-back-end.herokuapp.com/api/notes/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                const note = res.data;
                this.setState({ note });
            })
            .catch(err => console.log(err));
    }
    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='3'>
                            <Sidebar />
                        </Col>
                        <Col xs='9'>
                            {/* <div className='viewLinks'>
                                <Link to={ `${props.match.params.id}/edit` }>
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
                            <p>{ props.location.content }</p> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
        
    }

export default NoteView;