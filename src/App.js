import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];


const App = () => {
    return (
        <div style={{padding: '2em'}}>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Translate />
        </div>
    )
};

export default App;