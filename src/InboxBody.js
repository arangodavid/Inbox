import React from 'react';
import PropTypes from 'prop-types';
import InboxThread from './InboxThread';
import InboxForm from './InboxForm';

const InboxBody = props => {
    return (
        <section className="inboxWrapper">

            <header className="inboxWrapper__headerWrapper">
            <h1 className="inboxWrapper__headerWrapper-title">INBOX</h1>
            </header>
        
            <main className="inboxWrapper__threadWrapper">
                <ul className="inboxWrapper__threadWrapper-messages">
                    {
                    props.msgs.map((msg, i) => {
                        let threadId = `thread_${i}`,
                            editBtnId = `editBtn_${i}`;
                        return <InboxThread 
                        key={i} 
                        msg={msg} 
                        handleDeleteMsg={props.handleDeleteMsg} 
                        handleEditMsg={props.handleEditMsg} 
                        threadId={threadId} 
                        editBtnId={editBtnId}
                        />
                    })
                    }
                </ul>
            </main>
            <InboxForm 
            handleAddMsg={props.handleAddMsg} 
            handleInputChange={props.handleInputChange} 
            inputVal={props.inputVal}
            />
            <section className="inboxWrapper-editBanner">Edit Mode...</section>
        </section>
    );
}

export default InboxBody;

InboxBody.propTypes = {
    msgs: PropTypes.array.isRequired,
    handleDeleteMsg: PropTypes.func.isRequired,
    handleEditMsg: PropTypes.func.isRequired,
    handleAddMsg: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired, 
    inputVal: PropTypes.string.isRequired
}