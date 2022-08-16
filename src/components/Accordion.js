import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        return <React.Fragment key={item.id}>
                    <div className='active title'>
                        <i className='dropdown icon'></i>
                        {item.title}
                    </div>
                    <div className='content active'>
                        <p>{item.content}</p>
                    </div>
               </React.Fragment>
    })
    return <div className='ui styled accordion'>
                {renderedItems}
            </div>;
};

export default Accordion;