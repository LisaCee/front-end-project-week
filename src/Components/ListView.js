import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

import '../css/ListView.css'
import Sidebar from './Sidebar';

const shortenNote = (str) => {
    if (str.length >= 100) {
        return str.slice(0, 90) + '...';
    }
    return str;
}

class ListView extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
         axios
            .get('https://lambda-notes-back-end.herokuapp.com/api/notes')
            .then(res => {
                // if (res.data.length === 0) {
                //     alert('Add a note to begin')
                // }
                const notes = res.data;
                console.log(res.data)
                this.setState({ notes })
            })

    }
    render() {
        return (
            <Container className='container'>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <h4 className='yourNotes'>Your Notes:</h4>

                        { this.state.notes.map((note, id) =>
                            <div className='thumbnail'
                                key={ note.title }>
                                <Link to={ `/${note._id}` }>
                                    <div className='title'>{ note.title }</div>
                                    <hr className='line' />
                                    <div className='content'>{ shortenNote(note.content) }</div>
                                </Link>
                            </div>
                        ) }
                    </Col>
                </Row>
            </Container>
        )
    }

}

const mapStateToProps = state => {
    return {
        notes: state,
    }
}
export default connect(mapStateToProps)(ListView);

