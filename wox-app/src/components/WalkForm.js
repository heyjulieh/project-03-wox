import React, {Component} from 'react'

class WalkForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     images: '',
     userName: '',
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

   if (e.target.name === 'userName') {
     this.setState({ userName: e.target.value });
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
   let userName = this.state.userName.trim();
   let title = this.state.title.trim();
   let content = this.state.content.trim();
   let dateCreated = this.state.dateCreated;
   let location = this.state.location;
   let userID = this.state.userID.trim();


   this.props.onWalkFormSubmit(
     { images: images,
       userName: userName,
       title: title,
       content: content,
       dateCreated: dateCreated,
       location: location,
       userID: userID,
   });
   this.setState(
     { images: images,
       userName: userName,
       title: title,
       content: content,
       dateCreated: dateCreated,
       location: location,
       userID: userID,
   });

   console.log('logging this.state: ', this.state);
 }

 render() {
   return (
     <div className=" walk-form container">
      <div className="form-group row">
      <h3 className="formheader">Add Your Walk</h3>
       <form className="walkList-form" onSubmit={ this.handleNewWalkSubmit }>
           <input
             className='form-control'
             type='text'
             name='images'
             placeholder='Link to Images...'
             value={ this.state.images }
             onChange={ this.handleInputChange } /><br></br>
           <input
             className='form-control'
             type='text'
             name='user'
             placeholder='Enter your Name...'
             value={ this.state.userName }
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
             type='date'
             name='dateCreated'
             value={ this.state.dateCreated}
             onChange={ this.handleInputChange } /><br></br>
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
