import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <div style={{marginTop: '2em'}}>
                <Dropdown
                    label="Select a language"
                    selected={language} 
                    onSelectedChange={setLanguage} 
                    options={options}
                />

                <hr />
                <h3 className='ui header'>Output</h3>
                <Convert text={text} language={language}/>
            </div>
        </div>
    )
}

export default Translate;