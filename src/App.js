import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import CreateNote from './Components/CreateNote';
import ListView from './Components/ListView';
import NoteView from './Components/NoteView';
import EditView from './Components/EditView';


class App extends Component {
  state = {
    notes: [],
    title: '',
    content: ''
  };

  componentDidMount() {
    axios
      .get("https://lambda-notes-back-end.herokuapp.com/api/notes")
      .then(res => {
        const notes = res.data;
        this.setState({ notes });
      })
      .catch(err => console.log(err));
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
          notes: [...notes, data]
        })

      )
      .catch(err => console.log(err));
  };

  editCurrentNote = id => {
    const { title, content } = this.state;

    axios
      .put(`https://lambda-notes-back-end.herokuapp.com/api/notes/${id}`, { title, content })
      .then(() => {
        const notes = this.state.notes.map(
          note => (note._id === id ? { title, content } : note)
        )
        this.setState({
          title: '',
          content: '',
          notes
        })
      })
      .catch(err => console.log(err));
  };

  deleteNote = (id) => {
    axios
      .delete(
        `https://lambda-notes-back-end.herokuapp.com/api/notes/${
        this.props.match.params.id
        }`
      )
      .then(res => {
        const note = res.data;
        // this.setState({ note });
        console.log(note);
        // this.props.deleteNote(id);
        // this.props.history.push('/');
      });
  }


  renderListView = props => <ListView notes={ this.state.notes } />;

  renderCreate = props => (
    <CreateNote
      { ...props }
      title={ this.state.title }
      content={ this.state.content }
      updateInput={ this.updateInput }
      createNewNote={ this.createNewNote }
    />
  )
  
  renderNote = props => (
    <NoteView
      { ...props }
      // title={ this.state.title }
      // content={ this.state.content }
      deleteNote={ this.deleteNote }
      editCurrentNote={ this.editCurrentNote }
    />
  )

  renderEdit = props => (
    <EditView
      { ...props }
      title={ this.state.title }
      content={ this.state.content }
      updateInput={ this.updateInput }
      editCurrentNote={ this.editCurrentNote }
    />
  )
 
  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={ this.renderListView } />
        <Route exact path='/create' render={ this.renderCreate } />
        <Route exact path='/:id' render={ this.renderNote } />
        <Route exact path='/:id/edit' render={ this.renderEdit } />
      </div>
    );
  }
}

export default App;
