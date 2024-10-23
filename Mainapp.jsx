import React from 'react';
import ProfileList from './Profilecards';

const App = () => {
    return (
        <div style={styles.app}>
            <h1>User Profiles</h1>
            <ProfileList />
        </div>
    );
};

const styles = {
    app: {
        padding: '20px',
        textAlign: 'center',
    },
};

export default App;
