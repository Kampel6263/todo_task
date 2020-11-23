import classes from './App.module.css';
import React from 'react';
import ListContainer from '../src/components/list/List-Container'
import ContentContainer from '../src/components/content/Content-Container'


function App() {
    return (
        <div className={classes.todo}>
            <ListContainer/>
            <ContentContainer/>
        </div>
    );
}

export default App;
