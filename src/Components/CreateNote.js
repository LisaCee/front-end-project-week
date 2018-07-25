import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './Sidebar';
// import { addNote, deleteNote } from '../Actions/index';
import "../css/CreateNote.css";


// submit button not sending to db//
class CreateNote extends Component {
    state = {
        title: '',
        content: ''
    }
    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createNewNote = () => {
        const { title, content, notes } = this.state;

        axios
            .post("https://lambda-notes-back-end.herokuapp.com/api/notes", { title, content })
            .then(({ data }) =>
                this.setState({
                    title: '',
                    content: '',
                    // notes: [...notes, data]
                })

            )
            .catch(err => console.log(err));
    };
    render() {
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
                                value={ this.state.title }
                                onChange={ this.updateInput }
                            />

                            <textarea name='content'
                                rows='15'
                                cols='90'
                                placeholder='Note Content (required)'
                                value={ this.state.content }
                                onChange={ this.updateInput }
                            />

                            <Link to={ '/' }>
                                <button className='submit' onClick={ this.createNewNote }>Save</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default CreateNote;

// const mapStateToProps = (state) => {
//     return {
//         notes: state
//     };
// }
// export default connect(mapStateToProps, { addNote, deleteNote })(CreateNote);

