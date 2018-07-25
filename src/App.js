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
    const {title, content, notes} = this.state;

    axios
      .post("https://lambda-notes-back-end.herokuapp.com/api/notes", {title, content})
      .then(({data}) => 
        this.setState({
          title: '',
          content: '',
          notes: [...notes, data]
        })
        
      )
      .catch(err => console.log(err));
  };

  renderListView = props => <ListView notes={ this.state.notes } />;

  renderCreate = props => (
    <CreateNote
      { ...props }
      title={ this.state.title }
      content={ this.state.content }
      updateInput={ this.state.updateInput }
      createNewNote={ this.state.createNewNote }
    />
  )

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={ this.renderListView } />
        <Route exact path='/create' component={ CreateNote } />
        <Route exact path='/:id' component={ NoteView } />
        <Route exact path='/:id/edit' component={ EditView } />
      </div>
    );
  }
}

export default App;
