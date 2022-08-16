import React from 'react';
import Accordion from './Accordion';

const items = [
    {
        id: 1,
        title: 'What is React?',
        content: 'React is a Front-end JavaScript library'
    },
    {
        id: 2,
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        id: 3,
        title: 'How do you use React?',
        content: 'We use React to create components'
    }
]


const App = () => {
    return (
        <div style={{padding: '2em'}}>
            <Accordion items={items} />
        </div>
    )
};

export default App;