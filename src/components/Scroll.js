import React from 'react';


//creating a scroll component that wraps the Cardlist child
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', 
            border: '4px solid black', height: '550px' }}>
            {props.children}
        </div>
    )
}


export default Scroll;