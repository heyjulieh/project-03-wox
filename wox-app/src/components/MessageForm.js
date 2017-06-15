import React, {Component} from 'react'

class MessageForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     userSender: '',
     userAcceptor: '',
     title: '',
     content: '',
     date: Date,
     userSenderID: '',
     userAcceptorID: '',
   };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleNewMessageSubmit = this.handleNewMessageSubmit.bind(this);
 }

 handleInputChange(e) {

   if (e.target.name === 'userSender') {
     this.setState({ userSender: e.target.value });
   }

   if (e.target.name === 'userAcceptor') {
     this.setState({ userAcceptor: e.target.value });
   }

   if (e.target.name === 'title') {
     this.setState({ title: e.target.value });
   }

   if (e.target.name === 'content') {
     this.setState({ content: e.target.value });
   }

   if (e.target.name === 'date') {
     this.setState({ dateCreated: e.target.value });
   }
     if (e.target.name === 'userSenderID') {
     this.setState({ userSenderID: e.target.value });
   }
     if (e.target.name === 'userAcceptorID') {
     this.setState({ userAcceptorID: e.target.value });
   }
 }

 handleNewMessageSubmit(e) {

   e.preventDefault();
   let userSender = this.state.userSender.trim();
   let userAcceptor = this.state.userAcceptor.trim();
   let title = this.state.title.trim();
   let content = this.state.content.trim();
   let date = this.state.date;
   let userSenderID = this.state.userSenderID;
   let userAcceptorID = this.state.userAcceptorID.trim();


   if (!userSender || !userAcceptor || !title || !content || !date || !userSenderID || !userAcceptorID ) {
     return;
   }
   this.props.onMessageFormSubmit(
   {	 userSender: userSender,
       userAcceptor: userAcceptor,
       title: title,
       content: content,
       date: date,
       userSenderID: userSenderID,
       userAcceptorID: userAcceptorID,
   });
   this.setState(
   {	 userSender: userSender,
       userAcceptor: userAcceptor,
       title: title,
       content: content,
       date: date,
       userSenderID: userSenderID,
       userAcceptorID: userAcceptorID,
   });

   console.log('logging this.state: ', this.state);
 }

 render() {
   return (
     <div className="container">
      <div className="form-group row">
      <h3 className="formheader">Send a Message</h3>
       <form className="messageList-form" onSubmit={ this.handleNewMessageSubmit }>
           <input
             className='form-control'
             type='hidden'
             name='userSender'
             value={ this.state.userSender }
             onChange={ this.handleInputChange } />
           <input
             className='form-control'
             type='text'
             name='userAcceptor'
             placeholder='Send to...'
             value={ this.state.userAcceptor } />
           <input
             className='form-control'
             type='text'
             name='title'
             placeholder='Subject of Message...'
             value={ this.state.title }
             onChange={ this.handleInputChange } /><br></br>
           <textarea
             className='form-control'
             rows='8'
             type='textarea'
             name='content'
             placeholder='Write Your Message...'
             value={ this.state.content }
             onChange={ this.handleInputChange } /><br></br>
           <input
             className='form-control'
             type='hidden'
             name='userSenderID'
             placeholder='firebase userID'
             value={ this.state.userSenderID } />
           <input
             className='form-control'
             type='hidden'
             name='date'
             value={Date.now()} />
           <input
             className='form-control'
             type='hidden'
             name='userAcceptorID'
             placeholder='Send Message To...'
             value={ this.state.userAcceptorID} />
           <button
             type='submit'
             className='btn btn-primary'
             value='Message'>Submit</button>
       </form>
      </div>
    </div>
   )
 }
}

export default MessageForm;
