import React from 'react';
import PropTypes from 'prop-types';

const InboxThread = props => {
    return (
        <li className="inboxWrapper__threadWrapper-message">
            <section id={props.threadId}>{props.msg.text}</section>
            <section>
                <button onClick={() => {props.handleDeleteMsg(props.msg.id)}}>Delete</button>
                <button 
                id={props.editBtnId} 
                onClick={() => {props.handleEditMsg(props.msg.id, props.threadId, props.editBtnId)}}>
                    Edit
                </button>
            </section>
        </li>
    );
}
export default InboxThread;

InboxThread.propTypes = {
    msg: PropTypes.object.isRequired,
    handleDeleteMsg: PropTypes.func.isRequired,
    handleEditMsg: PropTypes.func.isRequired,
    threadId: PropTypes.string.isRequired,
    editBtnId: PropTypes.string.isRequired
}