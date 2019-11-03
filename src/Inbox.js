import React from 'react';
import InboxBody from './InboxBody';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddMsg = this.handleAddMsg.bind(this);
    this.handleDeleteMsg = this.handleDeleteMsg.bind(this);
    this.handleEditMsg = this.handleEditMsg.bind(this);
  }
  
  handleInputChange(e) {
    let val = e.target.value;
    this.setState({inputVal: val})
  }
  
  handleAddMsg(e) {
    e.preventDefault();
    this.props.newMessage(this.state.inputVal);
    this.setState({inputVal: ''});
  }

  handleDeleteMsg(idToDelete) {
    this.props.deleteMessage(idToDelete);
  }

  handleEditMsg(idToEdit, threadId, editBtnId) {
    let editBtn = document.getElementById(editBtnId),
        msgToEdit = document.getElementById(threadId),
        editBanner = document.querySelector(".inboxWrapper-editBanner");

    if(editBtn.innerHTML.toLowerCase() === "ok") {
      editBtn.innerHTML = "Edit";
      editBanner.className = "inboxWrapper-editBanner";
      let msgToEditInput = document.getElementById("msgToEditInput");
      let text = msgToEditInput.value;
      this.props.editMessage(idToEdit, text);
    }else {
      editBtn.innerHTML = "Ok";
      editBanner.className += " banner-isActive";
      msgToEdit.innerHTML = "<input id='msgToEditInput' type='text' />";
    }
  }
  
  render() {
    return <InboxBody
    msgs={this.props.msgs} 
    handleDeleteMsg={this.handleDeleteMsg} 
    handleEditMsg={this.handleEditMsg} 
    handleAddMsg={this.handleAddMsg} 
    handleInputChange={this.handleInputChange} 
    inputVal={this.state.inputVal} 
    />;
  }
}
export default Inbox;
