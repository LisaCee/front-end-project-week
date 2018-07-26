import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../css/NoteView.css';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        console.log('NOTE', props)
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal });
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
                            <div className='viewLinks'>
                                <Link to={ `${this.props.match.params.id}/edit` }>
                                    edit
                                </Link>
                                <a className='noteViewLink' onClick={ this.toggle }>delete</a>
                                { this.state.modal && (
                                    <DeleteModal
                                        toggle={ this.toggle }
                                        delete={ this.props.deleteNote }
                                        id={this.props.location.id}
                                        { ...this.state }
                                    />
                                ) }
                            </div>
                            <h4 className='noteTitle'>{ this.props.location.title }</h4>
                            <p>{ this.props.location.content }</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
        
    }

export default NoteView;