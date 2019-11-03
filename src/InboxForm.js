import React from 'react';
import PropTypes from 'prop-types';

const InboxForm = props => {
    return (
        <form onSubmit={props.handleAddMsg} className="inboxWrapper__messageWrapper">

            <input 
            onChange={props.handleInputChange} 
            className="inboxWrapper__messageWrapper-message" 
            type="text" value={props.inputVal}
            required 
            />

            <button 
            className="inboxWrapper__messageWrapper-button" 
            type="submit">
            Send
            </button>

        </form>
    );
}

export default InboxForm;

InboxForm.propTypes = {
    handleAddMsg: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    inputVal: PropTypes.string.isRequired
}