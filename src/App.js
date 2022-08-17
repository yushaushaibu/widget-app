import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        id: 0,
        title: 'What is React?',
        content: 'React is a Front-end JavaScript library. It is used to show content to users and handles user events'
    },
    {
        id: 1,
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        id: 2,
        title: 'How do you use React?',
        content: 'We use React to create components'
    }
]


const App = () => {
    return (
        <div style={{padding: '2em'}}>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
};

export default App;