import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] =  useState(null);

    const onTitleClick = (itemsID) => {
        // console.log('Title is clicked ', itemsID)
        setActiveIndex(itemsID);
    }

    const renderedItems = items.map((item, itemsID) => {
        return <React.Fragment key={item.id}>
                    <div className='active title' onClick={() => onTitleClick(itemsID)}>
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
                <h1>{activeIndex}</h1>
            </div>;
};

export default Accordion;