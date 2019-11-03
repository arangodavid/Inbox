import React from 'react';
import './App.scss';
import InboxContainer from './InboxContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <InboxContainer />
        )
    }
}

export default App;