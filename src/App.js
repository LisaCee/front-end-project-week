import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import CreateNote from './Components/CreateNote';
import ListView from './Components/ListView';
import NoteView from './Components/NoteView';
import EditView from './Components/EditView';
import DeleteModal from './Components/DeleteModal';


class App extends Component {
  state = {
    notes: [],
    title: '',
    content: '',
    modal: false
  };

  //List view
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
    console.log('ID', id)
    const { title, content } = this.state;
    axios
      .put(`https://lambda-notes-back-end.herokuapp.com/api/notes/${id}/edit`, { title, content })
      .then(() => {
        const notes = this.state.notes.map(
          note => (note._id === id ? { title, content } : note)
        )
        this.setState({
          title: '',
          content: '',
          notes: [...notes]
        })
      })
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  deleteNote = (id) => {
    axios
      .delete(
        `https://lambda-notes-back-end.herokuapp.com/api/notes/${id}`)
      .then(() => {
        this.componentDidMount()
      })
      .catch(err => console.log(err))
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
      deleteNote={ this.deleteNote }
      editCurrentNote={ this.editCurrentNote }
      toggle={ this.toggle }
      modal={ this.state.modal }
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
    console.log('STATE', this.state)
    return (
      <div className='app'>
        <Route exact path='/' render={ this.renderListView } />
        <Route exact path='/create' render={ this.renderCreate } />
        <Route exact path='/:id' render={ this.renderNote } />
        <Route exact path='/:id/edit' render={ this.renderEdit } />
        <Route exact path='/:id' render={ this.renderDelete } />
      </div>
    );
  }
}

export default App;
