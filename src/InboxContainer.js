import Inbox from "./Inbox";
import { connect } from 'react-redux';

const NEW_MESSAGE = "NEW_MESSAGE",
      DELETE_MESSAGE = "DELETE_MESSAGE",
      EDIT_MESSAGE = "EDIT_MESSAGE";

let textId = 0;

let mapStateToProps = state => ({
    msgs: state
});
  
let mapDispatchToProps = {
    newMessage: text => ({ type: NEW_MESSAGE, payload: { id: ++textId, text }}),
    deleteMessage: idToDelete => ({type: DELETE_MESSAGE, idToDelete}),
    editMessage: (idToEdit, text) => ({type: EDIT_MESSAGE, idToEdit, text})
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Inbox)
  