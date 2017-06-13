import React, {Component} from 'react'

class WalkForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     images: '',
     user: '',
     title: '',
     content: '',
     dateCreated: Date,
     userID: '',
     location: ''
   };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleNewWalkSubmit = this.handleNewWalkSubmit.bind(this);
 }

 handleInputChange(e) {

   if (e.target.name === 'images') {
     this.setState({ images: e.target.value });
   }

   if (e.target.name === 'user') {
     this.setState({ user: e.target.value });
   }

   if (e.target.name === 'title') {
     this.setState({ title: e.target.value });
   }

   if (e.target.name === 'content') {
     this.setState({ content: e.target.value });
   }

   if (e.target.name === 'dateCreated') {
     this.setState({ dateCreated: e.target.value });
   }
     if (e.target.name === 'userID') {
     this.setState({ userID: e.target.value });
   }

 }

 handleNewWalkSubmit(e) {

   e.preventDefault();
   let images = this.state.images.trim();
   let user = this.state.user.trim();
   let title = this.state.title.trim();
   let content = this.state.content.trim();
   let dateCreated = this.state.dateCreated;
   let location = this.state.location;
   let userID = this.state.userID.trim();


   if (!images || !user || !title || !content || !dateCreated || !location || !userID ) {
     return;
   }
   this.props.onWalkFormSubmit(
   {	 images: images,
       user: user,
       title: title,
       content: content,
       dateCreated: dateCreated,
       location: location,
       userID: userID,
   });
   this.setState(
   {	images: images,
     user: user,
     title: title,
     content: content,
     dateCreated: Date,
     location: location,
     userID: userID,
   });

   console.log('logging this.state: ', this.state);
 }

 render() {
   return (
     <div className="container">
      <div className="form-group row">
      <h3 className="formheader">Add Your Walk</h3>
       <form className="walkList-form" onSubmit={ this.handleNewWalkSubmit }>
           <input
             className='form-control'
             type='text'
             name='images'
             placeholder='Link to your profile image...'
             value={ this.state.images }
             onChange={ this.handleInputChange } /><br></br>
           <input
             className='form-control'
             type='text'
             name='user'
             placeholder='Enter your name...'
             value={ this.state.user }
             onChange={ this.handleInputChange } /><br></br>
           <input
             className='form-control'
             type='text'
             name='title'
             placeholder='Choose a Title...'
             value={ this.state.title }
             onChange={ this.handleInputChange } /><br></br>
           <textarea
             className='form-control'
             rows='8'
             type='textarea'
             name='content'
             placeholder='Write About Your Walk...'
             value={ this.state.content }
             onChange={ this.handleInputChange } /><br></br>
           <input
             className='form-control'
             type='hidden'
             name='userID'
             placeholder='firebase userID'
             value={ this.state.userID }
             onChange={ this.handleInputChange } />
           <input
             className='form-control'
             type='hidden'
             name='date'
             value={Date.now()} />
           <input
             className='form-control'
             type='text'
             name='location'
             placeholder='Location of Walk...'
             onChange={ this.handleInputChange } /><br></br>
           <button
             type='submit'
             className='btn btn-primary'
             value='Walk'>Submit</button>
       </form>
      </div>
    </div>
   )
 }
}

export default WalkForm;
