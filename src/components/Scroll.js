import React from 'react';

// children - react keyword meant for rendering children 

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '700px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;